import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
    function attachedCallback() {
        const el = this;
        const publicKey = el.getAttribute('apikey');
        const address = el.getAttribute('query');
        const htmlTag = document.querySelector('html');
        const lang = htmlTag.getAttribute('lang') || 'en';
        const url = `https://www.google.com/maps/embed/v1/place?language=${lang}&key=${publicKey}&q=${encodeURIComponent(address)}`;
        const map = document.createElement('iframe');

        map.setAttribute('src', url);
        map.setAttribute('allowfullscreen', true);
        map.setAttribute('title', 'google-map');
        el.appendChild(map);
    }

    registerElement({
        attachedCallback,
        tagName
    });
}
