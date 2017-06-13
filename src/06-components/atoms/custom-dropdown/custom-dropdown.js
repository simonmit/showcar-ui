import registerElement from '../../../07-utilities/helpers.js';

export default function(tagName) {
    function createdCallback() {
        let el = $(this);
        let titleElement = el.find('p');
        let defaultTitle = titleElement.text();

        el.removeClass('sc-open');
        // TODO: rewrite to click
        el.on('touchstart, mousedown', (e) => {
            e.stopPropagation();
        });

        if (null === el.attr('checkboxgroup')) {
            return;
        }

        if (this.hasAttribute('checkboxgroup')) {
            el.find('[type=checkbox]').addClass('sc-input');
            let updateCaption = () => {
                let checkboxes = el.find(':checked');
                let texts = [];
                checkboxes.filter(':checked').forEach((element) => {
                    texts.push(element.nextElementSibling.innerHTML);
                });

                let title = texts.join(', ') || defaultTitle;
                titleElement.html(title);
            };

            el.on('change', updateCaption);
            updateCaption();
        }
    }

    function attachedCallback() {
        if (this.hasAttribute('checkboxgroup')) {
            this.querySelector('p').addEventListener('click', () => {
                closeAllDropdowns(this);
                this.classList.toggle('sc-open');
            });

            attachEventListeners();
        }
    }

    /**
     * @param {HTMLElement} exceptThisOne
     */
    function closeAllDropdowns(exceptThisOne) {
        return () => Array.from(document.querySelectorAll(tagName))
            .filter((cdd) => cdd !== exceptThisOne)
            .forEach((cdd) => cdd.classList.remove('sc-open'));
    }

    function attachEventListeners() {
        // this should only be done at most once
        // when the first of this element gets attached
        document.addEventListener('mousedown', closeAllDropdowns(this));
        attachEventListeners = () => {}; // eslint-disable-line no-func-assign
    }

    registerElement({
        createdCallback,
        attachedCallback,
        tagName
    });
}
