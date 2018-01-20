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
    'showTsmOnListPage1',
    'isAdBlockerUsed1',
    'urugot-bucket',
    'PLAY_SESSION',
    'gaid',
    'asvid',
    'doi',
    'cid',
    'GUID',
    'oidcsaus',
    '.ASPXAUTH',
    '__RequestVerificationToken',
    'test-cookie',
    '__ut',
    'as24identity',
    'noauth'
];

export default () => {
    document.cookie.split(';').forEach(findUnneededCookies);
};

const findUnneededCookies = (cookie) => {
    const cookieName = getCookieName(cookie);
    let isNotWhitelisted = true;
    let i = 0;

    while(isNotWhitelisted && i < whiteList.length) {
        const regex = new RegExp(`^(${whiteList[i]})`, 'i');
        isNotWhitelisted = !regex.test(cookieName);
        i++;
    }
    
    if(isNotWhitelisted) {
        deleteCookieByName(cookieName);
    }
};

const deleteCookieByName = function(cookie) {
    document.cookie = cookie + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log('Cookie removed from memory:', cookie);
};

const getCookieName = function(cookie) {
    var cookieArray = cookie.split('=');
    return cookieArray[0].trim();
};
