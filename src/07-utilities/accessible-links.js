export default () => {
    document.addEventListener('keydown', e => {
        const keyCode = e.which;
        if(keyCode === 9) {
            // TAB
            document.body.classList.add('sc-focus-visible-only');
        }
    });
};
