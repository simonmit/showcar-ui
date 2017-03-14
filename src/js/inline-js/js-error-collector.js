(function(navigator) {
    'use strict';

    function getPostUrl() {
        var url = location.host;
        var devUrl = 'https://2w6tdi5ifg.execute-api.eu-west-1.amazonaws.com/default/event';
        var prodUrl = 'https://5q1eumnb90.execute-api.eu-west-1.amazonaws.com/default/event';

        if (url.indexOf('dev-www.') > -1) {
            return devUrl;
        } else if (url.indexOf('www.') > -1) {
            return prodUrl;
        }

        return '';
    }

    function postError(data) {
        var http = new XMLHttpRequest();
        var url = getPostUrl();

        if (url !== '') {
            http.open('POST', url, true);
            http.setRequestHeader('Content-Type', 'application/json');
            http.send(data);
        }
    }

    function extractPagePathFromPath() {
        var pathArray = location.pathname.split('/');
        return pathArray[1];
    }

    window.onerror = function(errorMsg, sourceUrl, lineNumber, column, errorObj) {
        var data = {
            httpUri: location.href,
            httpReferrer: document.referrer,
            pagePath: extractPagePathFromPath(),
            jsSrc: sourceUrl || '',
            jsLine: lineNumber || '',
            jsColumn: column || '',
            browserOs: navigator.platform,
            browserUseragent: navigator.userAgent,
            errorStacktrace: errorObj ? errorObj.stack : '',
            errorMessage: errorMsg || ''
        };

        postError(JSON.stringify(data));
    };
})(navigator);
