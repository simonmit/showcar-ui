class Navigation {
    /**
     * @param {HTMLElement} root
     */
    constructor(root) {
        this.document = $(document);
        this.rootElement = $(root);
        this.menuBtn = $('.sc-btn-mobile-menu', this.rootElement);
        this.activeItem = null;
        this.activeMenu = null;
        this.menuIsOpen = false;
        this.menus = $('nav > ul > li', this.rootElement);
        this.items = [];
        this.initEvents();
    }

    /**
     * @event Navigation#toggleMenu
     * @event Navigation#escapeMenu
     * @event Navigation#onKeyDown
     * @event Navigation#onKeyUp
     */
    initEvents() {
        this.rootElement.on('click', 'ul>li', $.proxy(this.toggleMenu, this));
        this.menuBtn.on('click', $.proxy(this.toggleMenu, this));
        this.document.on('click', $.proxy(this.escapeMenu, this));
    }

    /**
     * @param {Object} event
     */
    toggleMenu(event) {
        event.stopPropagation();
        let clickedMenu = $(event.target).closest('li');

        if ($(event.target).closest('li').length === 0) {
            clickedMenu = this.rootElement;
        }

        if (this.activeMenu && this.menuIsOpen) {

            if (this.activeMenu[0] == clickedMenu[0]) {
                this.closeMenu();
                return;
            } else if (this.rootElement[0] == clickedMenu[0]) {
                this.closeMenu(this.rootElement.find('.open').add(this.rootElement));
                return;
            } else if (this.activeMenu[0] != this.rootElement[0]) {
                this.closeMenu();
            }
        }

        this.setActiveMenu(clickedMenu);
        this.openMenu();
    }

    /**
     * @param {HTMLElement} element
     */
    setActiveMenu(element) {
        this.activeMenu = $(element);
    }

    /**
     * @param {HTMLElement} element
     */
    closeMenu(menu) {
        let closeTarget = menu || this.activeMenu;
        closeTarget.removeClass('open');
        this.unsetInactiveMenuItems();
        this.items = [];
        this.menuIsOpen = false;
    }

    openMenu() {
        if (!this.activeMenu) {
            // quick fix when active menu doesn't exists because of any unknown reason
            // TODO: fix it properly
            return;
        }

        this.activeMenu.addClass('open');
        this.items = this.activeMenu.find('ul:not(.submenu) > li:not(.subheadline)');
        this.menuIsOpen = true;
    }

    /**
     * @param {Object} event
     */
    escapeMenu() {
        this.activeMenu && this.menuIsOpen && this.closeMenu();
    }

    /**
     * @param {HTMLElement} element
     */
    setActiveMenuItem(element) {
        this.unsetInactiveMenuItems();
        element = $(element);
        !element.hasClass('active-item') && element.addClass('active-item');
        this.activeItem = element[0];
        $('a', element).focus();
    }

    unsetInactiveMenuItems() {
        this.rootElement.find('.active-item').removeClass('active-item');
        this.activeItem = null;
    }

    selectFirstItem() {
        this.setActiveMenuItem(this.items[0]);
    }

    selectMenu(element) {
        if ('object' !== typeof element) {
            return;
        }
        this.menuIsOpen && this.closeMenu();
        this.setActiveMenu(element);
        this.openMenu();
        this.selectFirstItem();
    }
}

export default function () {
    let navigationElement = document.querySelector('.sc-navigation'),
        navigation = null;
    if (navigationElement) {
        navigation = new Navigation(navigationElement);
    }

    return navigation;
}
