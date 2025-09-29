import { useState } from 'react';
import LanguageSelector from '../LanguageSelector';

export default function LanguageSelectorExample() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <LanguageSelector 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
    </div>
  );
}