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
  
  restaurant1Name: string;
  restaurant1Description: string;
  restaurant1Cuisine: string;
  restaurant1Location: string;
  
  restaurant2Name: string;
  restaurant2Description: string;
  restaurant2Cuisine: string;
  restaurant2Location: string;
  
  restaurant3Name: string;
  restaurant3Description: string;
  restaurant3Cuisine: string;
  restaurant3Location: string;
  
  restaurant4Name: string;
  restaurant4Description: string;
  restaurant4Cuisine: string;
  restaurant4Location: string;
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
    weatherRainy: "Kiša",
    
    restaurant1Name: "Azure Mediteranski",
    restaurant1Description: "Autentična mediteranska kuhinja sa svježim morskim plodovima i tradicionalnim jelima",
    restaurant1Cuisine: "Mediteranski",
    restaurant1Location: "Prizemlje, Terasa sa pogledom na ocean",
    
    restaurant2Name: "Sakura Suši Bar",
    restaurant2Description: "Premium japanska kuhinja sa svježim sušijem i tradicionalnim jelima",
    restaurant2Cuisine: "Japanski",
    restaurant2Location: "Drugi sprat, Pogled na vrt",
    
    restaurant3Name: "Bella Vista Italijanski",
    restaurant3Description: "Autentična italijanska tratoria sa domaćim tjesteninama i pica iz peći na drva",
    restaurant3Cuisine: "Italijanski",
    restaurant3Location: "Prizemlje, Piazza dvorište",
    
    restaurant4Name: "Steakhouse Prime",
    restaurant4Description: "Premium steakhouse sa suhomesnatom govedinom i finim vinima",
    restaurant4Cuisine: "Američki Steakhouse",
    restaurant4Location: "Treći sprat, Izvršni nivo"
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
    weatherRainy: "Light Rain",
    
    restaurant1Name: "Azure Mediterranean",
    restaurant1Description: "Authentic Mediterranean cuisine with fresh seafood and traditional dishes",
    restaurant1Cuisine: "Mediterranean",
    restaurant1Location: "Main Floor, Oceanview Terrace",
    
    restaurant2Name: "Sakura Sushi Bar",
    restaurant2Description: "Premium Japanese cuisine featuring fresh sushi and traditional dishes",
    restaurant2Cuisine: "Japanese",
    restaurant2Location: "2nd Floor, Garden View",
    
    restaurant3Name: "Bella Vista Italian",
    restaurant3Description: "Authentic Italian trattoria with handmade pasta and wood-fired pizzas",
    restaurant3Cuisine: "Italian",
    restaurant3Location: "Main Floor, Piazza Courtyard",
    
    restaurant4Name: "Steakhouse Prime",
    restaurant4Description: "Premium steakhouse featuring dry-aged beef and fine wines",
    restaurant4Cuisine: "American Steakhouse",
    restaurant4Location: "3rd Floor, Executive Level"
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
    weatherRainy: "Дождь",
    
    restaurant1Name: "Azure Средиземноморский",
    restaurant1Description: "Аутентичная средиземноморская кухня со свежими морепродуктами и традиционными блюдами",
    restaurant1Cuisine: "Средиземноморская",
    restaurant1Location: "Первый этаж, Терраса с видом на океан",
    
    restaurant2Name: "Sakura Суши Бар",
    restaurant2Description: "Премиальная японская кухня со свежими суши и традиционными блюдами",
    restaurant2Cuisine: "Японская",
    restaurant2Location: "2-й этаж, Вид на сад",
    
    restaurant3Name: "Bella Vista Итальянский",
    restaurant3Description: "Аутентичная итальянская траттория с домашней пастой и пиццей из дровяной печи",
    restaurant3Cuisine: "Итальянская",
    restaurant3Location: "Первый этаж, Внутренний двор Пьяцца",
    
    restaurant4Name: "Steakhouse Prime",
    restaurant4Description: "Премиальный стейк-хаус с мясом сухого вызревания и изысканными винами",
    restaurant4Cuisine: "Американский стейк-хаус",
    restaurant4Location: "3-й этаж, Исполнительный уровень"
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
    weatherRainy: "Lluvia ligera",
    
    restaurant1Name: "Azure Mediterráneo",
    restaurant1Description: "Auténtica cocina mediterránea con mariscos frescos y platos tradicionales",
    restaurant1Cuisine: "Mediterránea",
    restaurant1Location: "Planta principal, Terraza con vista al océano",
    
    restaurant2Name: "Sakura Sushi Bar",
    restaurant2Description: "Cocina japonesa premium con sushi fresco y platos tradicionales",
    restaurant2Cuisine: "Japonesa",
    restaurant2Location: "Segundo piso, Vista al jardín",
    
    restaurant3Name: "Bella Vista Italiano",
    restaurant3Description: "Auténtica trattoria italiana con pasta casera y pizzas al horno de leña",
    restaurant3Cuisine: "Italiana",
    restaurant3Location: "Planta principal, Patio Piazza",
    
    restaurant4Name: "Steakhouse Prime",
    restaurant4Description: "Steakhouse premium con carne madurada en seco y vinos finos",
    restaurant4Cuisine: "Steakhouse Americano",
    restaurant4Location: "Tercer piso, Nivel ejecutivo"
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
    weatherRainy: "Pluie légère",
    
    restaurant1Name: "Azure Méditerranéen",
    restaurant1Description: "Cuisine méditerranéenne authentique avec fruits de mer frais et plats traditionnels",
    restaurant1Cuisine: "Méditerranéenne",
    restaurant1Location: "Rez-de-chaussée, Terrasse vue océan",
    
    restaurant2Name: "Sakura Sushi Bar",
    restaurant2Description: "Cuisine japonaise premium avec sushi frais et plats traditionnels",
    restaurant2Cuisine: "Japonaise",
    restaurant2Location: "2ème étage, Vue sur le jardin",
    
    restaurant3Name: "Bella Vista Italien",
    restaurant3Description: "Trattoria italienne authentique avec pâtes faites maison et pizzas au feu de bois",
    restaurant3Cuisine: "Italienne",
    restaurant3Location: "Rez-de-chaussée, Cour Piazza",
    
    restaurant4Name: "Steakhouse Prime",
    restaurant4Description: "Steakhouse premium avec boeuf maturé à sec et vins fins",
    restaurant4Cuisine: "Steakhouse Américain",
    restaurant4Location: "3ème étage, Niveau exécutif"
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
    weatherRainy: "Leichter Regen",
    
    restaurant1Name: "Azure Mediterran",
    restaurant1Description: "Authentische mediterrane Küche mit frischen Meeresfrüchten und traditionellen Gerichten",
    restaurant1Cuisine: "Mediterran",
    restaurant1Location: "Erdgeschoss, Terrasse mit Meerblick",
    
    restaurant2Name: "Sakura Sushi Bar",
    restaurant2Description: "Premium japanische Küche mit frischem Sushi und traditionellen Gerichten",
    restaurant2Cuisine: "Japanisch",
    restaurant2Location: "2. Etage, Gartenblick",
    
    restaurant3Name: "Bella Vista Italienisch",
    restaurant3Description: "Authentische italienische Trattoria mit hausgemachter Pasta und Holzofen-Pizzen",
    restaurant3Cuisine: "Italienisch",
    restaurant3Location: "Erdgeschoss, Piazza-Innenhof",
    
    restaurant4Name: "Steakhouse Prime",
    restaurant4Description: "Premium Steakhouse mit trocken gereiftem Rindfleisch und erlesenen Weinen",
    restaurant4Cuisine: "Amerikanisches Steakhouse",
    restaurant4Location: "3. Etage, Executive Level"
  }
};

export function getTranslation(language: string): Translations {
  return translations[language] || translations.en;
}