module.exports = function(casper) {

    function expandFilters(selector) {
        var elements = document.querySelectorAll(selector);

        for(var i=0; i < elements.length; i++) {
            elements[i].classList.add('in');
        }
    }

    casper.waitForSelector('#filtersForm', function() {
        casper.evaluate(expandFilters, '.sc-collapse');
    });
};