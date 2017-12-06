export default () => {
    document.addEventListener('click', (e) => {
        if(e.target && e.target.matches && e.target.matches('[data-toggle="arrow"]')) {
            e.target.classList.contains('open') ? e.target.classList.remove('open') : e.target.classList.add('open');
        }
    });
};
