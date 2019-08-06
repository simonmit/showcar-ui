class Navigation {
    get KEY_DOWN() {
        return 40;
    }

    get KEY_UP() {
        return 38;
    }

    get KEY_LEFT() {
        return 37;
    }

    get KEY_RIGHT() {
        return 39;
    }

    get KEY_TAB() {
        return 9;
    }

    get KEY_RETURN() {
        return 13;
    }

    get KEY_ESCAPE() {
        return 27;
    }

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
        this.document.on('keydown', $.proxy(this.onKeyDown, this));
        this.document.on('keyup', $.proxy(this.onKeyUp, this));
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
     * @param {Number} keyCode
     * @returns {boolean}
     */
    isNavigationKey(keyCode) {
        return [
            this.KEY_DOWN,
            this.KEY_LEFT,
            this.KEY_RIGHT,
            this.KEY_UP,
            this.KEY_TAB
        ].indexOf(keyCode) > -1;
    }

    /**
     * Prevent scrolling
     *
     * @param {Object} event
     * @returns {boolean}
     */
    onKeyDown(event) {
        let keyCode = event.which;

        if (this.menuIsOpen && this.isNavigationKey(keyCode)) {
            event.preventDefault();
            return false;
        }

        return true;
    }

    /**
     * @param {Object} event
     * @returns {boolean}
     */
    onKeyUp(event) {
        if(this.menuIsOpen) {
            let keyCode = event.which;

            switch (keyCode) {
                case this.KEY_ESCAPE:
                    this.escapeMenu();
                    break;
                case this.KEY_DOWN:
                    this.handleJumpDown();
                    break;
                case this.KEY_UP:
                    this.handleJumpUp();
                    break;
                case this.KEY_TAB:
                    event.shiftKey ? this.handleJumpLeft() : this.handleJumpRight();
                    break;
                case this.KEY_RIGHT:
                    this.handleJumpRight();
                    break;
                case this.KEY_LEFT:
                    this.handleJumpLeft();
                    break;
            }

            event.preventDefault();
            return false;
        }
    }

    handleJumpDown() {
        // Expand the menu if closed
        if (false === this.menuIsOpen) {
            this.openMenu();
            this.selectFirstItem();
            return;
        }
        let position = this.items.indexOf(this.activeItem);
        this.items.length - 1 > position && position++;
        this.setActiveMenuItem(this.items[position]);
    }

    handleJumpUp() {
        if (false === this.menuIsOpen) {
            return;
        }
        let position = this.items.indexOf(this.activeItem);
        0 === position && this.closeMenu();
        0 < position && position--;
        this.setActiveMenuItem(this.items[position]);
    }

    handleJumpRight() {
        if (!this.activeMenu) {
            // quick fix when active menu doesn't exists because of any unknown reason
            // TODO: fix it properly
            return;
        }

        let current = this.menus.indexOf(this.activeMenu[0]);
        let newMenuIdx = this.menus.length - 1 > current ? newMenuIdx = current + 1 : 0;
        this.selectMenu(this.menus[newMenuIdx]);
    }

    handleJumpLeft() {
        if (!this.activeMenu) {
            // quick fix when active menu doesn't exists because of any unknown reason
            // TODO: fix it properly
            return;
        }

        let current = this.menus.indexOf(this.activeMenu[0]);
        let newMenuIdx = (0 < current) ? current - 1 : this.menus.length - 1;
        this.selectMenu(this.menus[newMenuIdx]);
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
    let navigationElement = document.querySelector('header[role=navigation]'),
        navigation = null;
    if (navigationElement) {
        navigation = new Navigation(navigationElement);
    }

    return navigation;
}
