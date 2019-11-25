export default () => {
    document.addEventListener('keydown', e => {
        const keyCode = e.which;
        const header = e.target.closest('.sc-navigation-v2');
        if (!header) {
            return;
        }
        if(keyCode === 9) {
            header.classList.add('sc-focus-visible-only');
        } else if(keyCode === 27) {
            e.target.closest('.sc-navigation-v2  nav li.open').classList.remove('open');
        }
    });

    document.addEventListener('click', e => {
        const header = e.target.closest('.sc-navigation-v2');

        if(!header) {
            return;
        }
        
        const menuOpener = e.target.closest('.sc-navigation-v2 nav li');
        if (menuOpener) {
            toggleSubmenu(menuOpener);
            return;
        }

        const menuItemOpener = e.target.closest('.sc-navigation-v2 .sc-btn-mobile-menu');
        if (menuItemOpener) {
            toggleMenu(header);
            return;
        }
    });

    const toggleMenu = (header) => {
        header.classList.toggle('open');
    };

    const toggleSubmenu = (menu) => {
        const activeMenu = document.querySelector('.sc-navigation-v2 nav li.open');
        if (activeMenu) {
            activeMenu.classList.remove('open');
        }
        if (activeMenu !== menu) {
            menu.classList.toggle('open');
        } 
    };
};
