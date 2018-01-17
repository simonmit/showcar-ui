const whiteList = [
    '_asga',
    '__gads',
    '_ga',
    '_gid',
    '_gat',
    'AMP_TOKEN',
    'as24-gtmSearchCrit',
    'as24Visitor',
    'culture',
    'testmode',
    'featurebee',
    'toguru',
    'cookieConsent',
    'User',
    'cmpatt',
    'cms_fbOFF',
    'S24UT',
    'webxtest',
    'testrun',
    '__utma',
    '__utmz',
    'optimizelySegments',
    'optimizelyBuckets',
    'optimizelyPendingLogEvents',
    'optimizelyEndUserId',
    '_asse',
    '_asga',
    '_asga_gid',
    '_gat_ALL',
    'optimizelyRedirectData',
    'optimizelyReferrer',
    'showTsmOnListPage',
    'isAdBlockerUsed'
];

export default () => {
    const regex = new RegExp('^(__ut)', 'i'); // regex to group all cookies that start with '__ut'
    const currentCookies = document.cookie.split(';');

    const _uts = currentCookies
        .filter(cookie => regex.test(getCookieName(cookie)))
        .map(cookie => getCookieName(cookie));

    const finalWhitelist = whiteList.concat(_uts);

    for(let i = 0; i < currentCookies.length; i ++) {   
        const cookieName = getCookieName(currentCookies[i]);

        if(!finalWhitelist.includes(cookieName)) {
            console.log('Cookie removed from memory:', cookieName);
            deleteCookieByName(cookieName);
        }
    }
};

const deleteCookieByName = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const getCookieName = function(cookie) {
    var cookieArray = cookie.split('=');
    return cookieArray[0].trim();
};