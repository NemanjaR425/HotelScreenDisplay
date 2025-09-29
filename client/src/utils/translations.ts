export interface Translations {
  welcomeTo: string;
  dining: string;
  shopping: string;
  excursions: string;
  entertainment: string;
  spa: string;
  currentWeatherIn: string;
}

export const translations: Record<string, Translations> = {
  me: { // Montenegrin
    welcomeTo: "Dobrodošli u",
    dining: "Restoran",
    shopping: "Kupovina",
    excursions: "Izleti",
    entertainment: "Zabava",
    spa: "Spa",
    currentWeatherIn: "Trenutno vrijeme u"
  },
  en: { // English
    welcomeTo: "Welcome to",
    dining: "Dining",
    shopping: "Shopping", 
    excursions: "Excursions",
    entertainment: "Entertainment",
    spa: "Spa",
    currentWeatherIn: "Current weather in"
  },
  ru: { // Russian
    welcomeTo: "Добро пожаловать в",
    dining: "Ресторан",
    shopping: "Покупки",
    excursions: "Экскурсии", 
    entertainment: "Развлечения",
    spa: "Спа",
    currentWeatherIn: "Текущая погода в"
  },
  es: { // Spanish
    welcomeTo: "Bienvenido a",
    dining: "Restaurante",
    shopping: "Compras",
    excursions: "Excursiones",
    entertainment: "Entretenimiento", 
    spa: "Spa",
    currentWeatherIn: "Clima actual en"
  },
  fr: { // French
    welcomeTo: "Bienvenue à",
    dining: "Restaurant",
    shopping: "Shopping",
    excursions: "Excursions",
    entertainment: "Divertissement",
    spa: "Spa", 
    currentWeatherIn: "Météo actuelle à"
  },
  de: { // German
    welcomeTo: "Willkommen im",
    dining: "Restaurant",
    shopping: "Einkaufen",
    excursions: "Ausflüge",
    entertainment: "Unterhaltung",
    spa: "Spa",
    currentWeatherIn: "Aktuelles Wetter in"
  }
};

export function getTranslation(language: string): Translations {
  return translations[language] || translations.en;
}