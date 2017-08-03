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

    window.addEventListener('click', (e => {
        let target = e.target;

        while(target) {
            if (target.getAttribute && target.getAttribute('data-toggle') === 'sc-collapse') {
                return handleClick(target);
            }
            target = target.parentNode;
        }
    }));
};
