
import { ReactNode } from 'react';

export type Language = 'en' | 'es';

export interface WeatherData {
  location: string;
  temperature: number;
  sky_condition:string;
  humidity: number;
  wind_speed: number;
  wind_direction: string;
}

export type LineType = 'input' | 'output' | 'system' | 'error';

export interface TerminalLine {
  type: LineType;
  content: ReactNode;
}
