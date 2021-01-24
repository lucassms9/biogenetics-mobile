import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';
import * as Localization from 'expo-localization';

import en from '../localization/en';
import pt from '../localization/pt';
import ptBr from '../localization/pt';

export const AVAILABLE_LANGUAGES = {
  en,
  'pt-BR': ptBr,
};

// console.log(Localization.locale);

const languageDetector = {
  type: 'languageDetector',
  // If this is set to true, your detect function receives a callback function that you should call with your language,
  // useful to retrieve your language stored in AsyncStorage for example
  async: true,
  init: (_services, _detectorOptions, _i18nextOptions) => {
    /* use services and options */
  },
  detect: (callback) => {
    AsyncStorage.getItem('APP_LANG', (err, lng) => {
      // Error fetching stored data or no language was stored
      if (err || !lng) {
        if (err) {
          console.log('Error fetching "APP_LANG" from async store', err);
        } else {
          console.log(
            'No language is set, choosing the best available or English as fallback'
          );
        }
        // const bestLng = Localization.findBestAvailableLanguage(['en', 'hi']);
        const bestLng = Localization.locale;
        console.log(bestLng);
        callback(bestLng ?? 'en');
        return;
      }
      callback(lng);
    });
  },
  cacheUserLanguage: (lng) => {
    AsyncStorage.setItem('APP_LANG', lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: AVAILABLE_LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      format(value, format, lng) {
        switch (format) {
          case 'flags':
            if (
              typeof value !== 'number' ||
              value < 1 ||
              !Number.isInteger(value)
            ) {
              return value;
            }
            if (lng === 'pt-BR') {
              return [...Array(value)].map((_) => '🇮🇳').join(' ');
            }
            return [...Array(value)].map((_) => '🌎').join(' ');

          default:
            return value;
        }
      },
    },
    defaultNS: 'common',
  });
