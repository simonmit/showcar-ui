
class Navigation {

    constructor(root) {
        this.rootElement = root;
        this.menuBtn     = this.rootElement.querySelector('.sc-btn-mobile-menu');

        this.initEvents();
    }

    initEvents() {
        this.rootElement.addEventListener('click', this.clickMenuItem.bind(this));
        this.menuBtn.addEventListener('click', this.toggleMenu.bind(this));
        document.body.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    toggleMenuItem(element) {
        element.classList.toggle('open');
    }

    clickMenuItem(event) {
        let open           = this.rootElement.querySelector('.open'),
            activeMenuItem = this.rootElement.querySelector('li.open li.active-item'),
            element        = event.target || event.srcElement;

        if (element.classList.contains('title') || 'span' === element.nodeName.toLowerCase()) {
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

    onKeyUp(event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        let keyCode = event.which,
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
            case 37: // left

                break;
            case 39: // right
                document.activeElement = event.srcElement.parentNode.nextElementSibling;
                this.handleKeyRight();
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

        if (!activeMenuItem) {
            this.clickMenuItem(event);
            this.toggleActiveMenuItem(element.nextElementSibling.querySelector('ul > li'));
        } else {
            let nextMenuItem = activeMenuItem.nextElementSibling;
            if (nextMenuItem) {
                this.toggleActiveMenuItem(activeMenuItem);
                this.toggleActiveMenuItem(nextMenuItem);
            }
        }
    }

    handleKeyLeft() {

    }

    handleKeyRight() {

    }

}

let navigationElement = document.querySelector('.sc-navigation'),
    navigation        = null;
if (navigationElement) {
    navigation = new Navigation(navigationElement);
}

module.exports = navigation;
