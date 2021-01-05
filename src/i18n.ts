import { createI18n } from 'vue-i18n'
import type { I18n, Locale, I18nOptions, Composer } from 'vue-i18n'
import en from './locales/en.yaml'


export const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en
    }
} as I18nOptions) as I18n

export function setI18nLanguage(i18n: I18n, locale: Locale): void {
    if (i18n.mode === 'legacy') {
        i18n.global.locale = locale
    } else {
        ; ((i18n.global as unknown) as Composer).locale.value = locale
    }
    /**
     * NOTE:
     * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
     * The following is an example for axios.
     *
     * axios.defaults.headers.common['Accept-Language'] = locale
     */
    document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: I18n, locale: Locale) {
    // load locale messages
    if (!i18n.global.availableLocales.includes(locale)) {
        const messages = await import(`./locales/${locale}.yaml`)
        i18n.global.setLocaleMessage(locale, messages.default)
    }
}
