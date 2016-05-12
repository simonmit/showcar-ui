module.exports = (url, selectors) => {
    const request = require('request');
    return done => {
        request(url, (err, res, body) => {
            if (err) {
                return done(err);
            }

            if (res.statusCode !== 200) {
                return done(new Error('Status Code: ' + code));
            }

            return done();
        });
    };
};
