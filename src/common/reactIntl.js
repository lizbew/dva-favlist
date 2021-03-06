import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import zhMessages from '../assets/locales/zh-CN/default.json';
import enMessages from '../assets/locales/en-US/default.json';

class Intl {
    constructor() {
        this.i18nextInit();
    }

    i18nextInit() {
        const defaultConfig = {
            fallbackLng: 'zh-CN',
            ns: ['default'],
            defaultNS: 'default',

            // key分隔符
            keySeparator: false,
            // 命名空间分割符
            nsSeparator: ':',

            resources: {
                'zh-CN': {
                    'default': zhMessages,
                },
                'en-US': {
                    'default': enMessages,
                }
            },

            // for LanguageDetector
            detection: {
                lookupCookie: 'site_lng',
            }
        }

        i18next
            .use(XHR) // or any other backend implementation
            .use(LanguageDetector) // or any other implementation
            //.use(sprintf) // or any other post processor
            .init(defaultConfig);
    }

    get(key, options) {
        return i18next.t(key, options);
    }

    changLanguage(lang, callback) {
        i18next.changeLanguage(lang, callback);
    }

    getCurrentLanguage() {
        return i18next.language;
    }
}

const baseIntl = new Intl();

export {
    baseIntl
};
