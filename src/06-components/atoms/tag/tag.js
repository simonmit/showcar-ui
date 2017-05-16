export default () => {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.sc-tag'), (tag) => {
            const tagClose = tag.querySelector('.sc-tag__close');
            const parentNode = tag.parentNode;

            tag.addEventListener('animationend', () => {
                if (parentNode) {
                    parentNode.removeChild(tag);
                } else {
                    console.warn('No parentNode found for tag element - ', tag);
                }
            });

            tagClose.addEventListener('click', () => {
                tag.classList.toggle('closing');
            });
        });
    });
};
