'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const argv = require('yargs').argv;

const getPageConfig = require('./config/page-config');

const check200 = require('./sanity/check200');
const checkForJsErrors = require('./sanity/checkForJsErrors');

const pageids = ['home', 'list', 'detail'];
const locales = argv.locale ? [argv.locale] : ['de-DE','de-AT','en-GB'];

const parallel = require('mocha.parallel');

parallel('Checking pages', function() {
    locales.forEach(locale => {
        pageids.forEach(pageid => {
            const config = getPageConfig(locale, pageid);
            if (!config) { return; }
            let url = config.url;
            if(process.env.CI_BUILD_REF_NAME === 'develop'){
                url = `${url}?sc_develop_ver=${process.env.CI_BUILD_REF}`;
            } else if (process.env.CI_BUILD_REF_NAME === 'master'){
                url = `${url}?sc_master_ver=${process.env.CI_BUILD_REF}`;
            }
            it(`URL must return 200 OK (${locale}; ${pageid})`, check200(url));
            it(`There must not be any JS error on the page (${locale}; ${pageid})`, checkForJsErrors(url));
        });
    });
});