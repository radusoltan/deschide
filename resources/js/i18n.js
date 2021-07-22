import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import gb from './locales/gb/en-GB.json'
import ro from './locales/ro/ro-RO.json'
import ru from './locales/ru/ru-RU.json'

const resources = {
    gb: {
        translation: gb
    },
    ro: {
        translation: ro
    },
    ru: {
        translation: ru
    }
}
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        resources,
        lng: 'ro',
        supportedLngs: ['ro','gb','ru'],
        fallbackLng: 'ro',
        detection: {
            order: ['localStorage','htmlTag', 'cookie', 'sessionStorage', 'path', 'subdomain'],
            caches: []
        },
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {useSuspense:false}
    })

export default i18n
