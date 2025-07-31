
export const translations = {
    en: {
        title: "MINISTRY OF CLIMATE",
        intro: "CONNECTING TO WEATHER SATELLITE... ACCESS GRANTED.",
        terminal_header: "CLIMATE MINISTRY - SURVEILLANCE TERMINAL C-138",
        terminal_status: "STATUS: SECURE",
        placeholder: "Enter command (type 'help' for list)",
        placeholder_loading: "PROCESSING...",
        welcome: [
            "Welcome, Agent. Terminal ready for commands.",
            "Type 'help' for a list of available commands.",
            "Type 'spanish' to switch language to Spanish.",
            "=============================================================="
        ],
        reboot_lang: "REBOOTING INTERFACE IN ENGLISH...",
        commands: {
            help: ["help"],
            clear: ["clear", "cls"],
            check: ["check", "weather"],
            report: ["report"],
            alerts: ["alerts"],
            world_weather: ["worldweather", "global"],
            refresh: ["refresh"],
            status: ["status"],
            logout: ["logout", "exit"],
            lang_en: ["english"],
            lang_es: ["spanish"],
            report_dissidence: ["reportdissidence"],
            conformity_level: ["conformitylevel"],
            modify_weather: ["modifyweather"]
        },
        help_text: [
            "AVAILABLE COMMANDS:",
            "> check [city]         - Current weather.",
            "> report [city]        - 3-day extended forecast.",
            "> alerts               - Alerts for the last checked city.",
            "> worldweather         - Weather in 5 major cities.",
            "> refresh              - Repeat last weather check.",
            "> status               - System status.",
            "> clear / cls          - Clear the screen.",
            "> logout / exit        - Disconnect from the terminal.",
            "> spanish              - Change language to Spanish.",
            "--- CLASSIFIED ---",
            "> reportdissidence   - Report climate anomalies.",
            "> conformitylevel      - Check your compliance score.",
            "> modifyweather        - [REDACTED]"
        ],
        system_messages: {
            processing: (location: string) => `PROCESSING REQUEST FOR ${location.toUpperCase()}...`,
            updating: (location: string) => `UPDATING DATA FOR ${location.toUpperCase()}...`,
            checking_alerts: (location: string) => `CHECKING ALERTS FOR ${location.toUpperCase()}...`,
            getting_report: "GETTING GLOBAL REPORT...",
            logout: ">>> DISCONNECTING... YOUR ACTIVITY HAS BEEN LOGGED.",
            status: [
                ">>> SYSTEM STATUS: FUNCTIONAL",
                ">>> SATELLITE LINK: STABLE",
                ">>> WEATHER NODE: ACTIVE",
            ],
            dissidence_report: ">>> REPORT SUBMITTED -- THE CLIMATE CANNOT BE HIDDEN",
            conformity_level: (level: number) => `>>> CONFORMITY: ${level}% -- USER MEETS CLIMATE STANDARDS`,
            permission_denied: ">>> PERMISSION DENIED -- THIS FUNCTION IS RESTRICTED"
        },
        errors: {
            no_location: "No location specified or previously checked.",
            no_location_alerts: "Check a city's weather first to see its alerts.",
            no_location_refresh: "No previous location checked to refresh.",
            unknown_command: (cmd: string) => `Command "${cmd}" not recognized. Type "help" for a list.`,
            api_comm_failure: "COMMUNICATION FAILURE WITH SATELLITE NETWORK. TRY AGAIN.",
            api_parse_failure: "FAILURE TO PROCESS SATELLITE DATA. UNEXPECTED FORMAT.",
            empty_response: "Empty response from API."
        },
        weather_report: {
            header: (location: string) => `MANDATORY WEATHER REPORT - DESIGNATED SECTOR: ${location.toUpperCase()}`,
            temp: "TEMP..................",
            condition: "CONDITION.............",
            humidity: "HUMIDITY..............",
            wind: "WIND..................",
            transmission_end: "> END OF TRANSMISSION. SURVEILLANCE ACTIVE."
        },
        prompts: {
            forecast: (location: string) => `Using the latest web information, provide the current and accurate weather forecast for the following location: ${location}. Your response MUST be only a JSON object, with no other text, explanation, markdown formatting (like \`\`\`json), or any other extra characters. The JSON object must have the following structure: { "location": "City, Country", "temperature": NUMBER (in Celsius), "sky_condition": "STRING (e.g., 'Clear', 'Partly Cloudy')", "humidity": NUMBER (percentage), "wind_speed": NUMBER (in km/h), "wind_direction": "STRING (e.g., 'N', 'SW')" }`,
            alerts: (location: string) => `Based on current weather data from the web for ${location}, report if there are active weather alerts. If so, respond with the type and a brief description (e.g., "YELLOW ALERT: MODERATE THUNDERSTORM"). If there are none, your response MUST be only: "NO ACTIVE ALERTS FOR ${location.toUpperCase()}."`,
            report: (location: string) => `Generate an extended weather report for ${location} using web data. The format must be a single line of text with no line breaks: "REPORT FOR ${location.toUpperCase()}: TODAY: [temp]°C [condition] / TOMORROW: [temp]°C [condition] / DAY AFTER: [temp]°C [condition]"`,
            world: `Provide the current weather (temperature in Celsius and weather condition) for these 5 cities: London, Tokyo, Buenos Aires, Moscow, and New York. Use web data. Format the response as a single line of text, with each city separated by " — ". Example: "LONDON: 15°C RAIN — TOKYO: 28°C CLEAR..."`
        }
    },
    es: {
        title: "MINISTERIO DEL CLIMA",
        intro: "CONECTANDO CON EL SATÉLITE METEOROLÓGICO... ACCESO AUTORIZADO.",
        terminal_header: "MINISTERIO DEL CLIMA - TERMINAL DE VIGILANCIA C-138",
        terminal_status: "ESTADO: SEGURO",
        placeholder: "Introduzca comando (escriba 'ayuda' para ver lista)",
        placeholder_loading: "PROCESANDO...",
        welcome: [
            "Bienvenido, Agente. Terminal lista para recibir comandos.",
            "Escriba 'ayuda' para ver la lista de comandos disponibles.",
            "Escriba 'english' para cambiar el idioma a inglés.",
            "=============================================================="
        ],
        reboot_lang: "REINICIANDO INTERFAZ EN ESPAÑOL...",
        commands: {
            help: ["ayuda"],
            clear: ["limpiar", "cls"],
            check: ["consultar", "clima"],
            report: ["informe"],
            alerts: ["alertas"],
            world_weather: ["climamundial", "global"],
            refresh: ["actualizar"],
            status: ["estado"],
            logout: ["cerrarsesión", "salir"],
            lang_en: ["english"],
            lang_es: ["spanish"],
            report_dissidence: ["reportardisidencia"],
            conformity_level: ["niveldeconformidad"],
            modify_weather: ["modificarclima"]
        },
        help_text: [
            "COMANDOS DISPONIBLES:",
            "> consultar [ciudad]   - Clima actual.",
            "> informe [ciudad]     - Pronóstico extendido para 3 días.",
            "> alertas              - Alertas para la última ciudad consultada.",
            "> climamundial         - Clima en 5 ciudades principales.",
            "> actualizar           - Repetir última consulta de clima.",
            "> estado               - Estado del sistema.",
            "> limpiar / cls        - Limpiar la pantalla.",
            "> cerrarsesión / salir - Desconectar de la terminal.",
            "> english              - Cambiar idioma a inglés.",
            "--- CLASIFICADO ---",
            "> reportardisidencia   - Reportar anomalías climáticas.",
            "> niveldeconformidad   - Verificar su nivel de conformidad.",
            "> modificarclima       - [REDACTADO]"
        ],
        system_messages: {
            processing: (location: string) => `PROCESANDO SOLICITUD PARA ${location.toUpperCase()}...`,
            updating: (location: string) => `ACTUALIZANDO DATOS PARA ${location.toUpperCase()}...`,
            checking_alerts: (location: string) => `VERIFICANDO ALERTAS PARA ${location.toUpperCase()}...`,
            getting_report: "OBTENIENDO REPORTE GLOBAL...",
            logout: ">>> DESCONECTANDO... SU ACTIVIDAD HA SIDO REGISTRADA.",
            status: [
                ">>> ESTADO SISTEMA: FUNCIONAL",
                ">>> ENLACE SATELITAL: ESTABLE",
                ">>> NODO METEOROLÓGICO: ACTIVO"
            ],
            dissidence_report: ">>> INFORME ENVIADO — EL CLIMA NO PUEDE SER OCULTADO",
            conformity_level: (level: number) => `>>> CONFORMIDAD: ${level}% — USUARIO CUMPLE ESTÁNDARES CLIMÁTICOS`,
            permission_denied: ">>> PERMISO DENEGADO — ESTA FUNCIÓN ESTÁ RESTRINGIDA"
        },
        errors: {
            no_location: "Ninguna ubicación especificada o consultada previamente.",
            no_location_alerts: "Consulte el clima de una ciudad primero para ver sus alertas.",
            no_location_refresh: "Ninguna ubicación previa consultada para actualizar.",
            unknown_command: (cmd: string) => `Comando "${cmd}" no reconocido. Escriba "ayuda" para ver la lista.`,
            api_comm_failure: "FALLA DE COMUNICACIÓN CON LA RED DE SATÉLITES. INTENTE DE NUEVO.",
            api_parse_failure: "FALLA AL PROCESAR DATOS DEL SATÉLITE. FORMATO INESPERADO.",
            empty_response: "Respuesta vacía de la API."
        },
        weather_report: {
            header: (location: string) => `REPORTE CLIMÁTICO OBLIGATORIO - SECTOR DESIGNADO: ${location.toUpperCase()}`,
            temp: "TEMP..................",
            condition: "CONDICIÓN.............",
            humidity: "HUMEDAD...............",
            wind: "VIENTO................",
            transmission_end: "> FIN DE LA TRANSMISIÓN. VIGILANCIA ACTIVA."
        },
        prompts: {
            forecast: (location: string) => `Utilizando la información más reciente de la web, proporciona el pronóstico del tiempo actual y preciso para la siguiente ubicación: ${location}. Tu respuesta DEBE ser únicamente un objeto JSON, sin ningún texto, explicación, formato de markdown (como \`\`\`json) o cualquier otro carácter adicional. El objeto JSON debe tener la siguiente estructura: { "location": "Ciudad, País", "temperature": NÚMERO (en grados Celsius), "sky_condition": "CADENA (ej: 'Despejado', 'Parcialmente Nublado')", "humidity": NÚMERO (porcentaje), "wind_speed": NÚMERO (en km/h), "wind_direction": "CADENA (ej: 'N', 'SO')" }`,
            alerts: (location: string) => `Basado en datos meteorológicos actuales de la web para ${location}, informa si hay alertas meteorológicas activas. Si las hay, responde con el tipo y una breve descripción (ej: "ALERTA AMARILLA: TORMENTA ELÉCTRICA MODERADA"). Si no hay ninguna, tu respuesta DEBE ser únicamente: "SIN ALERTAS ACTIVAS PARA ${location.toUpperCase()}."`,
            report: (location: string) => `Genera un informe meteorológico extendido para ${location} usando datos web. El formato debe ser una sola línea de texto sin saltos de línea: "INFORME PARA ${location.toUpperCase()}: HOY: [temp]°C [condición] / MAÑANA: [temp]°C [condición] / PASADO: [temp]°C [condición]"`,
            world: `Proporciona el clima actual (temperatura en Celsius y condición climática) para estas 5 ciudades: Londres, Tokio, Buenos Aires, Moscú, y Nueva York. Usa datos de la web. Formatea la respuesta como una sola línea de texto, con cada ciudad separada por " — ". Ejemplo: "LONDRES: 15°C LLUVIA — TOKIO: 28°C DESPEJADO..."`
        }
    }
};
