module.exports = () => {
    function init() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="sc-collapse"]'), (collapsable) => {
            collapsable.onclick = () => {
                let targetAttr = collapsable.getAttribute('data-target');
                let targets = document.querySelectorAll(targetAttr);

                Array.prototype.forEach.call(targets, (target) => {
                    target.classList.toggle('in');
                });

                let event = new CustomEvent('collapse', {
                    bubbles: true
                });
                document.dispatchEvent(event);
            }
        });
    };
    
    init();
    document.addEventListener('as24-collapse:update', init);
};
