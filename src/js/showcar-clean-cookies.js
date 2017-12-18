const whiteList = [
    // What are these?
    '_asga',
    '__gads',

    // Google Analytics
    '_ga',
    '_gid',
    '_gat',
    'AMP_TOKEN',
    'as24-gtmSearchCrit',

    // Standard AS24
    'as24Visitor',
    'culture',
    'testmode',
    'featurebee',
    'toguru',
    'cookieConsent',
    'User',
    'cmpatt',
    'cms_fbOFF',

    // S24 Universal Analytics
    'S24UT',

    // Team specific
    'webxtest'
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
            deleteCookieByName(cookieName);
        }
    }
    
    console.log('Clean up cookies');
};

const deleteCookieByName = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const getCookieName = function(cookie) {
    var cookieArray = cookie.split('=');
    return cookieArray[0].trim();
};