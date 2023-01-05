import {derived} from 'svelte/store'
import {dictionary, locale, _} from 'svelte-i18n'

const SITE_URL = 'https://privnote.a1call.me';
const MESSAGE_FILE_URL_TEMPLATE = SITE_URL + '/lang/{locale}.json'
// const MESSAGE_FILE_URL_TEMPLATE = '/lang/{locale}.json'

let cachedLocale

function setupI18n({withLocale: _locale, detectByIp: _detectByIp} = {withLocale: 'ru', detectByIp: false}) {
    const fetchLanguage = function (lang) {
        const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', lang)

        return fetch(messsagesFileUrl)
            .then((response) => response.json())
            .then((messages) => {
                dictionary.set({[lang]: messages})

                cachedLocale = lang

                locale.set(lang)
            })
    }

    if (!_detectByIp) {
        return fetchLanguage(_locale);
    }

    return fetch(SITE_URL + '/getLanguage').then(response => {
        return response.json();
    }).then(response => {
        return fetchLanguage(response?.lang);
    }).catch(() => {
        return fetchLanguage('ru');
    })

}

function formatDate(date, options) {
    return new Intl.DateTimeFormat(cachedLocale, options).format(new Date(date))
}

const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string')

export {_, locale, setupI18n, formatDate, isLocaleLoaded}
