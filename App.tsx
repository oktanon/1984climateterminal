
import React, { useState, useEffect, useRef, useCallback } from 'react';
import IntroScreen from './components/IntroScreen';
import Terminal from './components/Terminal';
import {
    getWeatherForecast,
    getWeatherAlerts,
    getExtendedReport,
    getWorldWeather,
} from './services/geminiService';
import { translations } from './translations';
import type { TerminalLine, WeatherData, Language } from './types';

const App: React.FC = () => {
    const [lang, setLang] = useState<Language>('en');
    const [showIntro, setShowIntro] = useState(true);
    const [lines, setLines] = useState<TerminalLine[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRebooting, setIsRebooting] = useState(false);
    const [conformityLevel, setConformityLevel] = useState(92);
    const lastLocationRef = useRef<string | null>(null);

    const t = translations[lang];

    const getInitialMessages = useCallback((): TerminalLine[] => 
        t.welcome.map(msg => ({ type: 'system', content: msg })), 
    [t]);
    
    const handleIntroFinish = useCallback(() => {
        setShowIntro(false);
        setIsRebooting(false);
        setLines(getInitialMessages());
    }, [getInitialMessages]);
    
    const addLine = useCallback((line: TerminalLine) => {
        setLines(prev => [...prev, line]);
    }, []);

    const handleLanguageChange = useCallback((newLang: Language) => {
        if (lang === newLang) return;
        setIsRebooting(true);
        const newT = translations[newLang];
        addLine({ type: 'system', content: `>>> ${newT.reboot_lang}` });
        setTimeout(() => {
            setLang(newLang);
            document.documentElement.lang = newLang;
            document.title = newT.title;
        }, 1500);
    }, [lang, addLine]);

    const handleCommand = useCallback(async (command: string) => {
        const lowerCaseCommand = command.toLowerCase();
        const flatCommand = lowerCaseCommand.replace(/\s+/g, '');
        addLine({ type: 'input', content: command });
    
        const parts = lowerCaseCommand.trim().split(' ');
        const action = parts[0];
        const args = parts.slice(1).join(' ');

        const { commands, system_messages, errors, help_text } = t;

        // --- Instant Commands (No Loading) ---
        if (commands.lang_en.includes(flatCommand)) {
            handleLanguageChange('en');
            return;
        }
        if (commands.lang_es.includes(flatCommand)) {
            handleLanguageChange('es');
            return;
        }
        if (commands.clear.includes(action)) {
            setLines(getInitialMessages());
            return;
        }
        if (commands.logout.includes(flatCommand)) {
            setIsRebooting(true);
            addLine({ type: 'system', content: system_messages.logout });
            return;
        }
        if (commands.status.includes(action)) {
            system_messages.status.forEach(line => addLine({ type: 'output', content: line }));
            setConformityLevel(prev => Math.min(100, prev + 1));
            return;
        }
        if (commands.help.includes(action)) {
            help_text.forEach(line => addLine({ type: 'system', content: line }));
            setConformityLevel(prev => Math.min(100, prev + 1));
            return;
        }
        if (commands.report_dissidence.includes(flatCommand)) {
            addLine({ type: 'output', content: system_messages.dissidence_report });
            setConformityLevel(prev => Math.max(0, prev - 5));
            return;
        }
        if (commands.conformity_level.includes(flatCommand)) {
            addLine({ type: 'output', content: system_messages.conformity_level(conformityLevel) });
            setConformityLevel(prev => Math.min(100, prev + 1));
            return;
        }
        if (commands.modify_weather.includes(flatCommand)) {
            addLine({ type: 'output', content: system_messages.permission_denied });
            setConformityLevel(prev => Math.max(0, prev - 2));
            return;
        }

        // --- Commands that require loading ---
        setIsLoading(true);
        let wasSuccessful = false;
        try {
            if (commands.check.includes(action) || commands.report.includes(action)) {
                const location = args || lastLocationRef.current;
                if (!location) throw new Error(errors.no_location);
                
                addLine({ type: 'system', content: system_messages.processing(location) });
                lastLocationRef.current = location;

                if (commands.check.includes(action)) {
                    const weatherData: WeatherData = await getWeatherForecast(location, lang);
                    const weatherString = `DATOS ATMOSFÉRICOS RECIBIDOS::${JSON.stringify(weatherData)}`;
                    addLine({ type: 'output', content: weatherString });
                } else if (commands.report.includes(action)) {
                    const report = await getExtendedReport(location, lang);
                    addLine({ type: 'output', content: `>>> ${report}`});
                }
            } else if (commands.refresh.includes(action)) {
                if (!lastLocationRef.current) throw new Error(errors.no_location_refresh);
                addLine({ type: 'system', content: system_messages.updating(lastLocationRef.current) });
                const weatherData: WeatherData = await getWeatherForecast(lastLocationRef.current, lang);
                const weatherString = `DATOS ATMOSFÉRICOS RECIBIDOS::${JSON.stringify(weatherData)}`;
                addLine({ type: 'output', content: weatherString });
            } else if (commands.alerts.includes(action)) {
                if (!lastLocationRef.current) throw new Error(errors.no_location_alerts);
                addLine({ type: 'system', content: system_messages.checking_alerts(lastLocationRef.current) });
                const alerts = await getWeatherAlerts(lastLocationRef.current, lang);
                addLine({ type: 'output', content: `>>> ${alerts}` });
            } else if (commands.world_weather.includes(action)) {
                addLine({ type: 'system', content: system_messages.getting_report });
                const worldWeather = await getWorldWeather(lang);
                addLine({ type: 'output', content: `>>> ${worldWeather}` });
            } else {
                throw new Error(errors.unknown_command(command));
            }
            wasSuccessful = true;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error.';
            addLine({ type: 'error', content: `ERROR: ${errorMessage}` });
        } finally {
            if (wasSuccessful) {
                setConformityLevel(prev => Math.min(100, prev + 1));
            } else {
                setConformityLevel(prev => Math.max(0, prev - 1));
            }
            setIsLoading(false);
        }
    }, [lang, t, conformityLevel, addLine, getInitialMessages, handleLanguageChange]);

    useEffect(() => {
        if (isRebooting) {
            const timer = setTimeout(() => {
                setShowIntro(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isRebooting]);

    if (showIntro) {
        return <IntroScreen onFinished={handleIntroFinish} introText={t.intro} />;
    }

    return <Terminal 
        lines={lines} 
        onCommand={handleCommand} 
        isLoading={isLoading}
        t={t}
        placeholder={isLoading ? t.placeholder_loading : t.placeholder}
    />;
};

export default App;
