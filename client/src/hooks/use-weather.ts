import { useQuery } from '@tanstack/react-query';

interface WeatherData {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
  weatherCode: number;
}

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
}

const HERCEG_NOVI_LAT = 42.4511;
const HERCEG_NOVI_LON = 18.5378;

function mapWeatherCodeToCondition(code: number): 'sunny' | 'cloudy' | 'rainy' {
  if (code === 0 || code === 1) return 'sunny';
  if (code === 2 || code === 3) return 'cloudy';
  if (code >= 51 && code <= 99) return 'rainy';
  return 'cloudy';
}

async function fetchWeather(): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${HERCEG_NOVI_LAT}&longitude=${HERCEG_NOVI_LON}&current=temperature_2m,weather_code`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  const data: OpenMeteoResponse = await response.json();
  
  return {
    temperature: Math.round(data.current.temperature_2m),
    weatherCode: data.current.weather_code,
    condition: mapWeatherCodeToCondition(data.current.weather_code)
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
