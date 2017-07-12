<h2>Lightbox<span class="status refactor">Needs refactoring</span><span class="status js">JS</span></h2>

In order to link a trigger element like a button that opens the lightbox you need to provide an `id` for the lightbox 
and add the `data-lightbox-open="ID"` to your trigger element.

For closing you can add the `data-lightbox-close` attribute to any element that should trigger closing of the lightbox. 

In case you need to disable closing when clicking outside the lightbox you can provide the `prevent-outsideclose` attribute
to the as24-lightbox element like so `<as24-lightbox class="sc-lightbox" id="lb1" prevent-outsideclose>`.

In case you need to disable opening lightbox when clicking button that opens the lightbox, you can provide the `data-lightbox-prevent-open="true"` attribute. And you can switch this to  `data-lightbox-prevent-open="false"` if you want to open it.
