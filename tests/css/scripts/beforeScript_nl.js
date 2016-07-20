module.exports = function(casper, scenario, vp) {
    casper.echo("Setting AS24 visitor cookie");
    casper.then(function(){
        casper.page.addCookie({
            'name': 'as24Visitor',
            'value': 'f87cc2b2-41d1-4ef9-bea3-df9bc1fcd996',
            'path': '/',
            'domain': '.autoscout24.nl'
        });
    });
};