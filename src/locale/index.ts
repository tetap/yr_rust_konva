import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enUS from './langs/en-us.json'
import zhCN from './langs/zh-cn.json'

function useLocale() {
  i18n
    .use(Backend)
    .use(LanguageDetector) //嗅探当前浏览器语言
    .use(initReactI18next) //init i18next
    .init({
      resources: {
        en: {
          translation: enUS
        },
        zh: {
          translation: zhCN
        }
      },
      lng: navigator.language,
      preload: navigator.languages,
      fallbackLng: 'en_US',
      debug: false,
      interpolation: {
        escapeValue: false
      }
    })
}

export { useLocale }
