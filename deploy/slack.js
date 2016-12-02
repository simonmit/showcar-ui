#!/usr/bin/env node

const https = require('https');
const URL = require('url');
const querystring = require('querystring');

const slackUrl = new URL(process.env.SLACK_HOOK_URL);

const req = https.request({
    hostname: slackUrl.hostname,
    port: slackUrl.port,
    path: slackUrl.pathname,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}, res =>{

    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

const data = {
    channel: '#as24_web_experience',
    usernane: 'showcar-release',
    text: `DEVELOP!!! New ShowCar UI release was done. See build here: <https://gitlab.com/web-experience/showcar-ui/pipelines/${process.env.CI_BUILD_ID}>`
};

req.write(querystring.stringify(data));
req.end();
