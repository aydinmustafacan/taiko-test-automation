/* globals gauge*/
'use strict'

const {
    $,
    click,
    evaluate,
    goto,
    dropDown,
    waitFor,
    currentURL,
} = require('taiko')

const desktopURL = "https://modanisa.com";

step('Given that I am on web <lang> homepage', async (lang) => {
    const strategyMap = {
        TR: {
            flag: 'Türkçe',
            shippingCountry: 'Türkiye',
            button: 'Devam Et',
        },
        EN: {
            flag: 'English',
            shippingCountry: 'United States of America',
            button: 'Continue',
        },
        FR: {
            flag: 'Français',
            shippingCountry: 'France',
            button: 'Continuez',
        },
        AR: {
            flag: 'العربية',
            shippingCountry: 'الإمارات العربية المتحدة',
            button: 'استمر',
        },
        DE: {
            flag: 'Deutsch',
            shippingCountry: 'Deutschland',
            button: 'Weiter',
        },
        ID: {
            flag: 'Bahasa',
            shippingCountry: 'Indonesia',
            button: 'Lanjutkan',
        },
    }

    await goto("www.modanisa.com")

    await click(strategyMap[lang].flag)
    await dropDown({ id: 'shipping-country-select' }).select(
        strategyMap[lang].shippingCountry
    )
    await click(strategyMap[lang].button)
    await click({ x: 0, y: 0 })
    await click({ x: 0, y: 0 })
    const exists = await $('.welcomePopupInfo-topCloseIcon').exists()
    if (exists) {
        await click($('.welcomePopupInfo-topCloseIcon'))
    }
})


