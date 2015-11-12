module.exports = function() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="collapse"]'), function (collapsable) {
        collapsable.onclick = function () {
            var targetAttr = collapsable.getAttribute('data-target');
            var targets = document.querySelectorAll(targetAttr);

            Array.prototype.forEach.call(targets, function (target) {
                target.classList.toggle('in');
            });
        }
    });
};

