// export default () => {
//     window.addEventListener('DOMContentLoaded', function () {
//         Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="arrow"]'), (arrow) => {
//             let arrowEl = $(arrow);
//             $(arrowEl.data('target')).on('click', () => {
//                 arrowEl.toggleClass('open');
//             });
//         });
//     }, true);
// };

export default () => {
    document.addEventListener('click', (e) => {
        if(e.target && e.target.matches && e.target.matches('[data-toggle="arrow"]')) {
            e.target.classList.contains('open') ? e.target.classList.remove('open') : e.target.classList.add('open');
        }
    });
};
