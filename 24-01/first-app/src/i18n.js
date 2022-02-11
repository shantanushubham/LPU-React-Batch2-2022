import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          // Sentence to be translated: Sentence after translation
          "My name is Shantanu": "My name is Shantanu",
          "I eat an apple": "I eat an apple",
        },
      },
      fr: {
        translations: {
          "My name is Shantanu": "Mon nom es Shantanu",
          "I eat an apple": "Je mange une pomme.",
        },
      },
      de: {
        translations: {
          "My name is Shantanu": "Mein Name ist Shantanu",
          "I eat an apple": "ich esse einen Apfel",
        },
      },
    },
    fallbackLng: "en",

    ns: ["translations"],
    defaultNS: "translations",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
