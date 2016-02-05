class Navigation {

    constructor(root) {
        this.rootElement = root;
        this.menuBtn     = this.rootElement.querySelector('.sc-btn-mobile-menu');

        this.initEvents();
    }

    initEvents() {
        this.rootElement.addEventListener('click', this.clickMenuItem.bind(this));
        this.menuBtn.addEventListener('click', this.toggleMenu.bind(this));
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.body.addEventListener('keyup', this.onKeyUp.bind(this));
        document.addEventListener('click', this.closeMenuItem);
    }

    toggleMenuItem(element) {
        element.classList.toggle('open');
    }

    closeMenuItem() {
        var openMenuItem = document.querySelector('.open', this);
        if (null === openMenuItem) {
            return;
        }
        openMenuItem.classList.toggle('open', false)
    }


    clickMenuItem(event) {
        let open           = this.rootElement.querySelector('.open'),
            activeMenuItem = this.rootElement.querySelector('li.open li.active-item'),
            element        = event.target || event.srcElement;

        if (this.isTablableElementOfNavigation(element)) {
            element = element.parentNode;
        }

        if (activeMenuItem) {
            this.toggleActiveMenuItem(activeMenuItem);
        }

        if (open) {
            this.toggleMenuItem(open);
        }
        if ('li' === element.nodeName.toLowerCase() && open !== element) {
            this.toggleMenuItem(element);
        }

        event.stopPropagation();
    }

    toggleMenu() {
        this.rootElement.classList.toggle('open');
    }

    isTablableElementOfNavigation(element) {
        return element.classList.contains('title') || 'span' === element.nodeName.toLowerCase();
    }

    /**
     * Prevent scrolling
     *
     *      @param event
     * @returns {boolean}
     */
    onKeyDown(event) {
        let element = event.target || event.srcElement;

        if ([38, 40].indexOf(event.which) > -1 && this.isTablableElementOfNavigation(element)) {
            event.preventDefault();
            return false;
        }

        return true;
    }

    onKeyUp(event) {
        let keyCode        = event.which,
            activeMenuItem = this.rootElement.querySelector('li.open li.active-item');

        switch(keyCode) {
            case 9: // tab
                this.handleKeyTab(activeMenuItem);
                break;
            case 38: // top
                this.handleKeyTop(activeMenuItem);
                break;
            case 40: // bottom
                this.handleKeyBottom(event, activeMenuItem);
                break;
        }
    }

    toggleActiveMenuItem(element) {
        element.classList.toggle('active-item');
    }

    handleKeyTab(activeMenuItem) {
        if (activeMenuItem) { // close previous menu
            this.toggleActiveMenuItem(activeMenuItem);
            this.toggleMenuItem(this.rootElement.querySelector('li.open'));
        }
    }

    handleKeyTop(activeMenuItem) {
        if (activeMenuItem) {
            let previousMenuItem = activeMenuItem.previousElementSibling;
            if (previousMenuItem) {
                this.toggleActiveMenuItem(activeMenuItem);
                this.toggleActiveMenuItem(previousMenuItem);
            } else {
                this.toggleActiveMenuItem(activeMenuItem);
                this.toggleMenuItem(this.rootElement.querySelector('li.open'));
            }
        }
    }

    handleKeyBottom(event, activeMenuItem) {
        let element = event.target || event.srcElement;

        if (!element || !this.isTablableElementOfNavigation(element)) {
            return false;
        }

        if (!activeMenuItem) {
            this.clickMenuItem(event);
            this.toggleActiveMenuItem(element.nextElementSibling.querySelector('ul:not(.submenu) > li:not(.subheadline)'));
        } else {
            let nextMenuItem = activeMenuItem.nextElementSibling;
            if (nextMenuItem) {
                this.toggleActiveMenuItem(activeMenuItem);
                this.toggleActiveMenuItem(nextMenuItem);
            }
        }
    }

}

let navigationElement = document.querySelector('.sc-navigation'),
    navigation        = null;
if (navigationElement) {
    navigation = new Navigation(navigationElement);
}

module.exports = navigation;
