(function() {
    Array.prototype.forEach.call(document.querySelectorAll('.sc-lightbox-trigger'), (lightboxTrigger) => {
        function show() {
            const dataId = lightboxTrigger.getAttribute('data-id');
            const container = document.getElementById(dataId);
            const containerClone = container.cloneNode(true);
            const overlay = document.createElement('div');

            containerClone.className = containerClone.className
            .replace( /(?:^|\s)sc-hidden(?!\S)/g , ' sc-lightbox sc-grid-col-6' );
            overlay.appendChild(containerClone);
            overlay.setAttribute('class', 'sc-lightbox-overlay sc-grid-row');

            const closeIcon = overlay.querySelector('.sc-lightbox-close');

            // Events
            if (closeIcon) {
                closeIcon.addEventListener('click', e => {
                    clean(overlay);
                });
            }
            overlay.addEventListener('click', e => {
                if (!$(e.target).closest(containerClone).length) {
                    clean(overlay);
                }
            });
            document.addEventListener('keydown', removeLightbox);

            document.body.appendChild(overlay);
            document.documentElement.setAttribute('class', 'sc-lightbox-scroll');
        }

        function removeLightbox(e) {
            const overlay = document.querySelector('.sc-lightbox-overlay');
            if ( e.keyCode == 27 && overlay) {
                clean(overlay);
            }
        }

        const clean = overlay => {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', removeLightbox);
            document.documentElement.className = '';
        }

        lightboxTrigger.addEventListener('click', show);
    });
}());
