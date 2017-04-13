<h2>Responsive images - resolution switching<span class="status approved">Approved</span></h2>

Use `srcset` attribute in the `<img>` tag when you need to select a different source of the same image because you need a different resolution.

The height and width of the image should remain fixed.
```html
<img src="images/space-needle.jpg" srcset="images/space-needle.jpg 200w, images/space-needle-2x.jpg 400w, images/space-needle-hd.jpg 600w"> 
``` 

Сustom height and width of the image based on the viewport.
````html
<img src="images/space-needle.jpg" sizes="(max-width: 40em) 100vw, 50vw" srcset="images/space-needle.jpg 200w, images/space-needle-2x.jpg 400w, images/space-needle-hd.jpg 600w">
````

Also see demo page [here](https://scottjehl.github.io/picturefill/examples/demo-01.html)
