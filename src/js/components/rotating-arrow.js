module.exports = function() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="arrow"]'), function (arrow) {
        var arrowEl = $(arrow);
        $(arrowEl.data('target')).on('click', () => arrowEl.toggleClass('open'));
    });
};
