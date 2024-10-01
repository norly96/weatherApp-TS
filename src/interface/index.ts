export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Units;
  current: CurrentWeather;
  daily_units: Units;
  daily: DailyWeather;
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  weather_code: number;
}

export interface DailyWeather {
  time: string[];
  temperature_2m_max: number[];
  weather_code: number[];
}

interface Units {
  time: string;
  interval: string;
  temperature_2m: string;
  weather_code: string;
}
