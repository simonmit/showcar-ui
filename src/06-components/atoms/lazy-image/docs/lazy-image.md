<h2>Lazy loading images<span class="status approved">Approved</span><span class="status js">JS</span></h2>

If you want to make you images lazy, you need to add `lazyload` class to your element. Once image is lazyloaded this class changes to `lazyloaded`. 

You can add `sc-lazy-image` class in order to have a background color while image is loading.

Below are the examples to lazyload images within `<img>`, `<picture>` and as a `background-image`.

For responsive images, our recommendation is to use [LQIP](https://matthias-endler.de/2017/image-previews/) for page load and high resolution image should be lazyloaded. With this approach, the aspect-ratio of image is preserved and user never experience's a jank after image is lazyloaded.

To generate LQIP for your image you can use [imagemagick](https://imagemagick.org/) tool for instance like: `magick convert <image_name_with_ext> -resize 10% <image_name>_tn.<ext>`

To support lazyloading functionality, we rely on [lazysizes](https://github.com/aFarkas/lazysizes) library.
