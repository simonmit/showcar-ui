var chai        = require('chai'),
    assert      = chai.assert,
    webdriverio = require('webdriverio');

describe('my webdriverio tests', function(){

    this.timeout(99999999);
    var client = {};

    before(function(done){
        //client = webdriverio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        //client.init(done);

        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');

        chai.use(chaiAsPromised);
        expect = chai.expect;
        chai.Should();
    });

    it('Github test',function* () {
        browser.url('https://github.com/');
/*
        var size = yield browser.getElementSize('.header-logo-wordmarks');
        size.height.should.equal(26);
        size.width.should.equal(890);
*/
        var title = browser.getTitle();
        console.log(title);
        assert.equal(title, 'GitHub asdf· Where software is built');
        //title.should.equal('GitHub asdf· Where software is built');
/*
        var color = yield browser.getCssProperty('a[href="/plan"]', 'color');
        color.value.should.equal('rgba(64,120,192,1)');

            /*
            .getElementSize('.header-logo-wordmark', function(err, result) {
                //assert.equal(undefined, err);
                assert.strictEqual(size.height , 2600);
                assert.strictEqual(size.width, 89);
            })
            */
            /*
            .getCssProperty('a[href="/plansss"]', 'color', function(err, result){
                assert.equal(undefined, err);
                assert.strictEqual(result.value, 'rgba(64,120,192,1)');
            })
            */
            //.call(done);
    });

    after(function(done) {
        //browser.end(done);
    });
});
