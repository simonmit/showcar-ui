import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
    function attachedCallback() {
        const el = this;
        const publicKey = el.dataset.public;
        const address = el.dataset.address;
        const htmlTag = document.querySelector('html');
        const lang = htmlTag.getAttribute('lang') || 'en';

        const url = `https://www.google.com/maps/embed/v1/place?language=${lang}&key=${publicKey}&q=${encodeURIComponent(address)}`;
    }

    registerElement({
        attachedCallback,
        tagName
    });
}
