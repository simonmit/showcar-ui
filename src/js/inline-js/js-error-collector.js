(function(navigator, location) {
    'use strict';

    function postError(url, data) {
        var http = new XMLHttpRequest();

        if (url !== "") {
            http.open("POST", url, true);
            http.setRequestHeader("Content-Type", "application/json");
            http.send(data);
        }
    }

    window.onerror = function(errorMsg, sourceUrl, lineNumber, column, errorObj) {
        
        if (location.host.indexOf('www.autoscout24') < 0) {
            return;
        }

        var data = {
            httpUri: location.href,
            httpReferrer: document.referrer,
            pagePath: location.pathname.split('/'),
            jsSrc: sourceUrl || '',
            jsLine: lineNumber || '',
            jsColumn: column || '',
            browserOs: navigator.platform,
            browserUseragent: navigator.userAgent,
            errorStacktrace: errorObj ? errorObj.stack : '',
            errorMessage: errorMsg || ''
        };
        
        var devUrl = 'https://2w6tdi5ifg.execute-api.eu-west-1.amazonaws.com/default/event';
        var prodUrl = 'https://5q1eumnb90.execute-api.eu-west-1.amazonaws.com/default/event';

        var url = (location.host.indexOf("dev-www.") > -1) ? devUrl : prodUrl;
        postError(url, JSON.stringify(data));

        var devShadowUrl = 'https://dev-js-error-logger.infinity.eu-west-1.s24cloud.net/log';
        var prodShadowUrl = 'https://js-error-logger.infinity.eu-west-1.s24cloud.net/log';
        var shadowUrl = (url.indexOf("dev-www.") > -1) ? devShadowUrl : prodShadowUrl;
        postError(shadowUrl, JSON.stringify(data));
    };
})(navigator, location);
