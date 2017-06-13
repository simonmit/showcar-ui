import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
    function attachedCallback() {
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

        el.querySelector('p').addEventListener('click', () => {
            closeAllDropdowns(el);
            el.classList.toggle('sc-open');
        });

        attachEventListeners();
    }

    function closeAllDropdowns(exceptThisOne) {
        return () => Array.from(document.querySelectorAll(tagName))
            .filter((cdd) => cdd !== exceptThisOne)
            .forEach((cdd) => cdd.classList.remove('sc-open'));
    }

    function attachEventListeners() {
        // this should only be done at most once
        // when the first of this element gets attached
        document.addEventListener('click', closeAllDropdowns(this));
        attachEventListeners = () => {}; // eslint-disable-line no-func-assign
    }

    registerElement({
        attachedCallback,
        tagName
    });
}
