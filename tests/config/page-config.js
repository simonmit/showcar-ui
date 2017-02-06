const countryConfigs = [{
    locale: 'de-DE',
    baseUrl: 'https://www.autoscout24.de',
    pages: {
        home: '/'
    }
},{
    locale: 'de-AT',
    baseUrl: 'https://www.autoscout24.at',
    pages: {
        home: '/'
    }
},{
    locale: 'en-GB',
    baseUrl: 'https://www.autoscout24.com',
    pages: {
        home: '/',
        list: '/results',
        // TODO: find a better solution to refer detail page
        // detail: '/classified-detail/detail-page/4c990c2d-1f21-3d06-e053-e350040a6fdf'
        detail: '/offers/gmc-others-f250-apache-longbed-stepside-pick-up-gasoline-beige-40208542-caf6-9737-e053-e350040a6c79'
    }
}];

module.exports = (locale, pageid) => {
    const URL = require('url');
    const localeConfig = countryConfigs.filter(c => c.locale === locale)[0];

    if(localeConfig.pages.hasOwnProperty(pageid)){
        const url = URL.resolve(localeConfig.baseUrl, localeConfig.pages[pageid]);
        return { url };
    }

    return null;
};
