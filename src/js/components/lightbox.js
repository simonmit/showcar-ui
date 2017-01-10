(function() {
    Array.prototype.forEach.call(document.querySelectorAll('.sc-lightbox-trigger'), (lightboxTrigger) => {
        let subscription;
        function show() {
            const dataId = lightboxTrigger.getAttribute('data-id');
            const container = document.getElementById(dataId);
            const containerClone = container.cloneNode(true);
            const overlay = document.createElement('div');

            containerClone.className = containerClone.className
            .replace( /(?:^|\s)sc-hidden(?!\S)/g , ' sc-lightbox' );
            overlay.appendChild(containerClone);
            overlay.setAttribute('class', 'sc-lightbox-overlay sc-grid-row');

            const closeElements = overlay.querySelectorAll('.sc-lightbox-close');
            // Events
            subscription = subscribe(document, removeLightbox(overlay));
            Array.prototype.forEach.call(closeElements, (closeEl) => {
                closeEl.addEventListener('click', e => {
                    clean(overlay);
                    subscription.dispose();
                })
            });
            overlay.addEventListener('click', e => {
                if (!$(e.target).closest(containerClone).length) {
                    clean(overlay);
                    subscription.dispose();
                }
            });

            document.body.appendChild(overlay);
            document.documentElement.setAttribute('class', 'sc-lightbox-scroll');
        }

        const removeLightbox = (overlay) => {
            return function(e) {
                if ( e.keyCode == 27 ) {
                    clean(overlay);
                }
                if (subscription) {
                    subscription.dispose();
                }
            }
        }

        const subscribe = (elem, handler) => {
            elem.addEventListener('keydown', handler);
            return {
                dispose: () => elem.removeEventListener('keydown', handler)
            }
        }

        const clean = overlay => {
            document.body.removeChild(overlay);
            subscription.dispose();
            document.documentElement.className = '';
        }

        lightboxTrigger.addEventListener('click', show);
    });
}());
