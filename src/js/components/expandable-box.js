module.exports = () => {
    const titles = Array.prototype.slice.call(document.querySelectorAll('.as24-expandable-box__title'));
    titles.forEach(el => el.addEventListener('click', e => {
        const parent = e.target.parentNode;
        if (!parent.classList.contains('as24-expandable-box')) return;
        parent.classList.toggle('as24-expandable-box--opened')
    }));
};