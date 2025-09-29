interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  className?: string;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange, className = '' }: LanguageSelectorProps) {
  const languages = [
    { code: 'me', name: 'CG', flag: '🇲🇪' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' },
    { code: 'de', name: 'DE', flag: '🇩🇪' }
  ];

  return (
    <div className={`flex flex-wrap gap-2 ${className}`} data-testid="language-selector">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => {
            console.log(`Language changed to ${language.name}`);
            onLanguageChange(language.code);
          }}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover-elevate ${
            currentLanguage === language.code
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-white/10 text-white/80 border border-white/20 hover:bg-white/15'
          }`}
          data-testid={`language-button-${language.code}`}
        >
          <span className="mr-1">{language.flag}</span>
          {language.name}
        </button>
      ))}
    </div>
  );
}