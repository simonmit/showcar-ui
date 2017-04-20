<h2>Lazy loading images<span class="status approved">Approved</span><span class="status js">JS</span></h2>

If you want to make you images lazy, you need to add `lazyload` class to your element. In the example we used ```<img>``` tag.  
Add `sc-lazy-image` class in order to have a background color while loading.  
Put your image source into `data-src` attribute.  
In `src` attribute in the example we added a incrypted 1x1 pixel gif. With it you won't get a border and broken image sign when js is not executed yet.
