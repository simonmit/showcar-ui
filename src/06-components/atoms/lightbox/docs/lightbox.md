<h2>Lightbox<span class="status refactor">Needs refactoring</span><span class="status complete">JS</span></h2>

an overlay that requires the user to interact with it and designed to elicit a response from the user.

#### usage:

In order to use it add following elements to your html:

1. 1) link, button or any other clickable element which has `data-lightbox-trigger` attribute and `data-id` attribute, that points to the `as24-lightbox` container to show (lightbox-1 in example). To prevent link from jumping to the top of the page and appending chars to page's url use a element without href attribute. It's a valid html5 syntax.
2. 2) `as24-lightbox` container with appropriate id. Inside of the container you may paste div with content of your choice.
3. 3) div may contain closing elements. To close modal window by clicking on the element add `data-lightbox-close` attribute to it.
