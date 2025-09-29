import WeatherWidget from '../WeatherWidget';

export default function WeatherWidgetExample() {
  return (
    <WeatherWidget 
      temperature={72}
      condition="sunny"
      location="Downtown"
      currentWeatherText="Current weather in"
    />
  );
}