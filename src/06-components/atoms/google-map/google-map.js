import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
    let intersectionObserver;
    if(window.IntersectionObserver) {
        intersectionObserver = new IntersectionObserver(entries => { // eslint-disable-line
            // If intersectionRatio is 0, the sentinel is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRatio <= 0) {
                return;
            }

            loadMap(entries[0].target);
        });
    }

    function loadMap(el) {
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

        if(window.IntersectionObserver) {
            intersectionObserver.unobserve(el);
        } else {
            return;
        }
    }

    function attachedCallback() {
        const sentinel = this;

        if(window.IntersectionObserver) {
            console.log('here');
            window.addEventListener('load', function() {
                intersectionObserver.observe(sentinel);
            }, false);
        } else {
            loadMap(sentinel);
        }
    }

    registerElement({
        attachedCallback,
        tagName
    });
}
