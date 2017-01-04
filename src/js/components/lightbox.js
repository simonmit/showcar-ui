(function() {
    Array.prototype.forEach.call(document.querySelectorAll('.sc-lightbox-trigger'), (lightboxTrigger) => {
        function show() {
            const dataId = lightboxTrigger.getAttribute("data-id");
            const container = document.getElementById(dataId);
            const containerClone = container.cloneNode(true);
            const overlay = document.createElement("div");

            containerClone.className = "sc-lightbox sc-grid-col-6";
            overlay.appendChild(containerClone);
            overlay.setAttribute('class', 'sc-lightbox-overlay');

            document.body.appendChild(overlay);
            console.log("test");

        }

        lightboxTrigger.addEventListener('click', show);
    });
}());

