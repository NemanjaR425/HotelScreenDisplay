import { useQuery } from '@tanstack/react-query';

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'clear-night';
}

interface WeatherData {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'clear-night';
  weatherCode: number;
  isDay: number;
  forecast: ForecastDay[];
}

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
    is_day: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

const HERCEG_NOVI_LAT = 42.4511;
const HERCEG_NOVI_LON = 18.5378;

function mapWeatherCodeToCondition(code: number, isDay: number = 1): 'sunny' | 'cloudy' | 'rainy' | 'clear-night' {
  if (code === 0 || code === 1) {
    return isDay === 1 ? 'sunny' : 'clear-night';
  }
  if (code === 2 || code === 3) return 'cloudy';
  if (code >= 51 && code <= 99) return 'rainy';
  return 'cloudy';
}

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function fetchWeather(): Promise<WeatherData> {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${HERCEG_NOVI_LAT}&longitude=${HERCEG_NOVI_LON}` +
    `&current=temperature_2m,weather_code,is_day` +
    `&daily=temperature_2m_max,temperature_2m_min,weather_code` +
    `&forecast_days=8&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data: OpenMeteoResponse = await response.json();

  // Build 7-day forecast starting from tomorrow (index 1)
  const forecast: ForecastDay[] = data.daily.time.slice(1, 8).map((dateStr, i) => {
    const dayOfWeek = new Date(dateStr).getDay();
    return {
      day: DAY_NAMES[dayOfWeek],
      high: Math.round(data.daily.temperature_2m_max[i + 1]),
      low: Math.round(data.daily.temperature_2m_min[i + 1]),
      condition: mapWeatherCodeToCondition(data.daily.weather_code[i + 1]),
    };
  });

  return {
    temperature: Math.round(data.current.temperature_2m),
    weatherCode: data.current.weather_code,
    isDay: data.current.is_day,
    condition: mapWeatherCodeToCondition(data.current.weather_code, data.current.is_day),
    forecast,
  };
}

export function useWeather() {
  return useQuery<WeatherData>({
    queryKey: ['/weather/herceg-novi'],
    queryFn: fetchWeather,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
  });
}
