export default () => {
    const handleClick = (collapsable) => {
        let targetAttr = collapsable.getAttribute('data-target');
        let targets = document.querySelectorAll(targetAttr);

        Array.prototype.forEach.call(targets, (target) => {
            target.classList.toggle('in');
        });

        let event = new CustomEvent('collapse', {
            bubbles: true
        });
        document.dispatchEvent(event);
    };

    document.addEventListener('click', (e => {
        let target = e.target;

        while(target) {
            if (target.getAttribute('data-toggle') === 'sc-collapse') {
                return handleClick(target);
            }
            target = target.parentNode;
        }
    }));

    function reInit() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="sc-collapse"]'), (collapsable) => {
            collapsable.addEventListener('click', () => {handleClick(collapsable);});
        });
    }

    document.addEventListener('as24-collapse:update', reInit);
};
