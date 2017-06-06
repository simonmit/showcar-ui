export default () => {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.sc-tag'), (tag) => {
            const tagClose = tag.querySelector('.sc-tag__close');
            const parentNode = tag.parentNode;

            const removeTag = () => {
                parentNode.removeChild(tag);
            };

            // Code for Chrome, Safari and Opera
            // https://www.w3schools.com/jsref/event_animationend.asp
            tag.addEventListener('webkitAnimationEnd', removeTag);

            tag.addEventListener('animationend', removeTag);

            tagClose.addEventListener('click', () => {
                tag.classList.add('closing');
            });
        });
    });
};
