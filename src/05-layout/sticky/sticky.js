module.exports = () => {

    /**
     * add an class to the given dom element
     * ToDo: move it to utils or use a polyfill
     * @param {string} className
     * @param {HTMLElement} domEl
     * @returns {HTMLElement}
     */
    function addClass(className, domEl) {
        let classList = [], classesString = domEl.getAttribute('class');
        if (classesString) {
            classList = classesString.split(' ');
            if (classList.indexOf(className) === -1) {
                classesString = classList.concat(className).join(' ');
            }
        } else {
            classesString = className
        }
        domEl.setAttribute('class', classesString);
        return domEl;
    }

    /**
     * remove an class to the given dom element
     * ToDo: move it to utils or use a polyfill
     * @param {string} className
     * @param {HTMLElement} domEl
     * @returns {HTMLElement}
     */
    function removeClass(className, domEl) {
        let classList = [], classesString = domEl.getAttribute('class');
        if (classesString) {
            classList = classesString.split(' ');
            if(classList.indexOf(className) !== -1){
                classList.splice(classList.indexOf(className), 1);
            }
            domEl.setAttribute('class', classList.join(' '));
        }
        return domEl;
    }

    /**
     * gets the current document height.
     * @returns {number}
     */
    function getDocumentHeight() {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    /**
     * gets the current client height.
     * @returns {number}
     */
    function getWindowHeight() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    /**
     * handler for positioning the sticky elements.
     */
    function handleStickies() {

        // get some basic values element like: scroll position, document and window height and the sticky elements
        let scrollPosition  = document.body.scrollTop || document.documentElement.scrollTop;
        let stickies        = document.querySelectorAll('[data-sticky]');
        let bodyOffset      = document.body.getBoundingClientRect().top;
        let documentHeight  = getDocumentHeight();
        let windowHeight    = getWindowHeight();

        [].forEach.call(stickies, stickyElement => {

            // Get the dock and un-dock element by the id of sticky
            let id              = stickyElement.getAttribute('data-sticky');
            let undockElement   = document.querySelector(`[data-sticky-undock="${id}"]`);
            let dockElement     = document.querySelector(`[data-sticky-dock="${id}"]`);

            // If device height is to small don't stick!
            if(windowHeight < 320){
                removeClass('sc-sticky', stickyElement);
                return;
            }

            // If there is no dock or un-dock element just stick!
            if (!undockElement && !dockElement) {
                addClass('sc-sticky', stickyElement);
                return;
            }

            // Get dock and un-dock element positions
            let undockPosition  = undockElement ? undockElement.getBoundingClientRect().top - bodyOffset : 0;
            let dockPosition    = dockElement ? dockElement.getBoundingClientRect().top - bodyOffset : documentHeight;

            // Decide based on the position to stick or not stick
            if (scrollPosition + windowHeight > undockPosition &&
                scrollPosition < dockPosition - windowHeight + stickyElement.getBoundingClientRect().height * 1.5) {
                addClass('sc-sticky', stickyElement);
            } else {
                removeClass('sc-sticky', stickyElement);
            }
        });
    }

    /**
     * initial positioning of the sticky
     */
    handleStickies();

    /**
     * adding several event listeners needed for updating the positions of the stickies
     */
    window.addEventListener("deviceorientation", () => handleStickies());
    window.addEventListener("resize", () => handleStickies());
    window.addEventListener("pageSizeChanged", () => handleStickies());
    document.addEventListener('scroll', () => handleStickies());
    document.addEventListener('collapse', () => handleStickies());
};
