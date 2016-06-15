module.exports = function(casper) {

    function expandFilters(selector) {
        var el = document.querySelectorAll(selector);
        for(var i=0; i<el.length; i++) {
            el.classList.add('in');
        }
    }

    casper.waitForSelector('#filtersForm', function() {
        casper.evaluate(expandFilters, '.sc-collapse');
    });
};