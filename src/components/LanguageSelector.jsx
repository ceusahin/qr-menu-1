import { useState } from "react";

const languages = [
  { code: "TR", label: "Türkçe" },
  { code: "ENG", label: "English" },
  { code: "RUS", label: "Русский" },
];

function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (lang) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // Burada seçili dili global state ya da i18n dil ayarına aktarmalısın.
    console.log("Seçilen Dil:", lang.code);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none"
      >
        {currentLang.label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.356a.75.75 0 111.02 1.098l-4 3.621a.75.75 0 01-1.02 0l-4-3.621a.75.75 0 01.02-1.098z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang)}
                className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
