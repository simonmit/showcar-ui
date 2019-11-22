class Navigation {
    /**
     * @param {HTMLElement} root
     */
    constructor(root) {
        this.document = $(document);
        this.rootElement = $(root);
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
        this.rootElement.on('click', 'ul>li, .sc-btn-mobile-menu', $.proxy(this.toggleMenu, this));
        this.document.on('click', $.proxy(this.escapeMenu, this));
        this.document.on('keydown', $.proxy(this.onKeyDown, this));
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
        closeTarget.children('button').attr('aria-expanded', 'false');
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
        this.activeMenu.children('button').attr('aria-expanded', 'true');
        this.items = this.activeMenu.find('ul:not(.submenu) > li:not(.subheadline)');
        this.menuIsOpen = true;
    }

    /**
     * @param {Object} event
     */
    onKeyDown(event) {
        const keyCode = event.which;
        if(keyCode === 9) {
            this.rootElement.addClass('sc-focus-visible-only');
        }
    }

    escapeMenu() {
        this.activeMenu && this.menuIsOpen && this.closeMenu();
    }

    unsetInactiveMenuItems() {
        this.rootElement.find('.active-item').removeClass('active-item');
        this.activeItem = null;
    }
}

export default function () {
    let navigationElements = document.getElementsByClassName('sc-navigation-v2');
    let navigationElementsArr = Array.prototype.slice.call(navigationElements);
    
    return navigationElementsArr.map(navigationElement => new Navigation(navigationElement));
}
