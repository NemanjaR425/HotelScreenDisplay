export interface Translations {
  welcomeTo: string;
  dining: string;
  shopping: string;
  excursions: string;
  entertainment: string;
  spa: string;
  currentWeatherIn: string;
  weatherSunny: string;
  weatherClearNight: string;
  weatherCloudy: string;
  weatherRainy: string;
}

export const translations: Record<string, Translations> = {
  me: { // Montenegrin
    welcomeTo: "Dobrodošli u",
    dining: "Restoran",
    shopping: "Kupovina",
    excursions: "Izleti",
    entertainment: "Zabava",
    spa: "Spa",
    currentWeatherIn: "Trenutno vrijeme u",
    weatherSunny: "Sunčano",
    weatherClearNight: "Vedra noć",
    weatherCloudy: "Oblačno",
    weatherRainy: "Kiša"
  },
  en: { // English
    welcomeTo: "Welcome to",
    dining: "Dining",
    shopping: "Shopping", 
    excursions: "Excursions",
    entertainment: "Entertainment",
    spa: "Spa",
    currentWeatherIn: "Current weather in",
    weatherSunny: "Sunny",
    weatherClearNight: "Clear Night",
    weatherCloudy: "Cloudy",
    weatherRainy: "Light Rain"
  },
  ru: { // Russian
    welcomeTo: "Добро пожаловать в",
    dining: "Ресторан",
    shopping: "Покупки",
    excursions: "Экскурсии", 
    entertainment: "Развлечения",
    spa: "Спа",
    currentWeatherIn: "Текущая погода в",
    weatherSunny: "Солнечно",
    weatherClearNight: "Ясная ночь",
    weatherCloudy: "Облачно",
    weatherRainy: "Дождь"
  },
  es: { // Spanish
    welcomeTo: "Bienvenido a",
    dining: "Restaurante",
    shopping: "Compras",
    excursions: "Excursiones",
    entertainment: "Entretenimiento", 
    spa: "Spa",
    currentWeatherIn: "Clima actual en",
    weatherSunny: "Soleado",
    weatherClearNight: "Noche despejada",
    weatherCloudy: "Nublado",
    weatherRainy: "Lluvia ligera"
  },
  fr: { // French
    welcomeTo: "Bienvenue à",
    dining: "Restaurant",
    shopping: "Shopping",
    excursions: "Excursions",
    entertainment: "Divertissement",
    spa: "Spa", 
    currentWeatherIn: "Météo actuelle à",
    weatherSunny: "Ensoleillé",
    weatherClearNight: "Nuit claire",
    weatherCloudy: "Nuageux",
    weatherRainy: "Pluie légère"
  },
  de: { // German
    welcomeTo: "Willkommen im",
    dining: "Restaurant",
    shopping: "Einkaufen",
    excursions: "Ausflüge",
    entertainment: "Unterhaltung",
    spa: "Spa",
    currentWeatherIn: "Aktuelles Wetter in",
    weatherSunny: "Sonnig",
    weatherClearNight: "Klare Nacht",
    weatherCloudy: "Bewölkt",
    weatherRainy: "Leichter Regen"
  }
};

export function getTranslation(language: string): Translations {
  return translations[language] || translations.en;
}