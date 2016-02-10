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
      return  39;
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

    constructor(root) {
        this.rootElement = $(root);
        this.menuBtn     = $('.sc-btn-mobile-menu', root);
        this.activeMenu  = null;
        this.menuIsOpen  = false;
        this.document    = $(document);
        this.items       = [];
        this.activeItem  = null;

        this.initEvents();
    }

    initEvents() {
        this.rootElement.on('click', 'ul>li', $.proxy(this.toggleMenu, this));
        this.document.on('click', $.proxy(this.escapeMenu, this));
        this.document.on('keydown', $.proxy(this.onKeyDown, this));
        this.document.on('keyup', $.proxy(this.onKeyUp, this));
    }

    toggleMenu(event) {
        event.stopPropagation();
        let clickedMenu = $(event.target).closest('li');

        if (this.activeMenu && this.menuIsOpen) {
            this.closeMenu();
            if (clickedMenu[0] === this.activeMenu[0]) {
                return;
            }
        }

        this.setActiveMenu(clickedMenu);
        this.openMenu();
    }

    setActiveMenu(element) {
        this.activeMenu = $(element);
    }

    closeMenu() {
        this.activeMenu.removeClass('open');
        this.unsetInactiveMenuItems();
        this.items = [];
        this.menuIsOpen = false;
    }

    openMenu() {
        this.activeMenu.addClass('open');
        this.items = this.activeMenu.find('ul:not(.submenu) > li:not(.subheadline)');
        this.menuIsOpen = true;
    }

    escapeMenu(event) {
        this.activeMenu && this.menuIsOpen && this.closeMenu();
    }

    isNavigationKey(keyCode) {
        return [
            this.KEY_DOWN,
            this.KEY_LEFT,
            this.KEY_RIGHT,
            this.KEY_UP,
            this.KEY_TAB
        ].indexOf(keyCode) > -1;
    }

    // Prevent scrolling
    onKeyDown(event) {
        let keyCode = event.which;

        if (this.menuIsOpen && this.isNavigationKey(keyCode)) {
            event.preventDefault();
            return false;
        }

        return true;
    }

    onKeyUp(event) {
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
                !!event.shiftKey ? this.handleJumpLeft() : this.handleJumpRight();
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
        let menu = (false === this.menuIsOpen)
            ?  this.rootElement.find('ul > li').first()
            : this.activeMenu.next('li');

        this.selectMenu(menu);
    }

    handleJumpLeft() {
        this.selectMenu(this.activeMenu.prev('li'));
    }

    setActiveMenuItem(element) {
        this.unsetInactiveMenuItems();
        element = $(element);
        !element.hasClass('active-item') && element.addClass('active-item');
        this.activeItem = element[0];
    }

    unsetInactiveMenuItems() {
        this.rootElement.find('.active-item').removeClass('active-item');
        this.activeItem = null;
    }

    selectFirstItem() {
        this.setActiveMenuItem(this.items[0]);
    }

    selectMenu(element) {
        if (1 !== element.length) {
            return;
        }
        this.menuIsOpen && this.closeMenu();
        this.setActiveMenu(element);
        this.openMenu();
        this.selectFirstItem();
    }
}

let navigationElement = document.querySelector('.sc-navigation'),
    navigation        = null;
if (navigationElement) {
    navigation = new Navigation(navigationElement);
}

module.exports = navigation;
