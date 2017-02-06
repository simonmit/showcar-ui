'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const request = require('request');

const getPageConfig = require('./page-config');

const pageids = ['home', 'list', 'detail'];
const locales = ['de-DE', 'de-AT', 'en-GB'];

for (var i = 0; i < 1; i++) {
    locales.forEach(locale => {
        pageids.forEach(pageid => {
            const config = getPageConfig(locale, pageid);

            console.log(config.url);
            request.get(config.url);
        });
    });
}