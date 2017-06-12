import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
    function createdCallback() {
        const el = this;
        if (! el.hasAttribute('checkboxgroup')) return;

        el.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        const titleElement = el.querySelector('p');
        const defaultTitle = titleElement.innerHTML;

        el.classList.remove('sc-open'); // TODO check do we need this?

        const checkboxes = el.querySelectorAll('[type=checkbox]'); // TODO check do we need this?
        Array.from(checkboxes).forEach((checkbox) => { // TODO check do we need this?
            checkbox.classList.add('sc-input'); // TODO check do we need this?
        }); // TODO check do we need this?

        const updateCaption = () => {
            const checkboxesChecked = el.querySelectorAll(':checked');

            const texts = Array.from(checkboxesChecked)
                .map((checkboxChecked) => {
                    return checkboxChecked.nextElementSibling.innerHTML;
                });

            const title = texts.join(', ') || defaultTitle;
            titleElement.innerHTML = title;
        };

        el.addEventListener('change', updateCaption);


        updateCaption();
    }

    function attachedCallback() {
        if (this.hasAttribute('checkboxgroup')) {
            this.querySelector('p').addEventListener('click', () => {
                closeAllDropdowns(this);
                this.classList.toggle('sc-open');
            });
            document.addEventListener('click', closeAllDropdowns(this));
        }
    }

    function closeAllDropdowns(exceptThisOne) {
        return () => Array.from(document.querySelectorAll(tagName))
            .filter((cdd) => cdd !== exceptThisOne)
            .forEach((cdd) => cdd.classList.remove('sc-open'));
    }

    registerElement({
        createdCallback,
        attachedCallback,
        tagName
    });
}