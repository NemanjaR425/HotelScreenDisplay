interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  className?: string;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange, className = '' }: LanguageSelectorProps) {
  const languages = [
    { code: 'me', name: 'Crnogorski' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
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
              ? 'bg-white text-black border border-gray-300'
              : 'bg-white text-black border border-gray-200'
          }`}
          data-testid={`language-button-${language.code}`}
        >
          {language.name}
        </button>
      ))}
    </div>
  );
}