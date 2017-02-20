#### Use case 1:

In the resolution switching use case, when you need to select a different source of the same image because you need a different resolution.  
Use srcset attribute on the <img>.

CODE EXAMPLE NEEDED

The height and width of the image should remain fixed.
<img src="images/space-needle.jpg" srcset="images/space-needle.jpg 200w, images/space-needle-2x.jpg 400w, images/space-needle-hd.jpg 600w">

Сustom height and width of the image based on the viewport.
<img src="images/space-needle.jpg" sizes="(max-width: 40em) 100vw, 50vw" srcset="images/space-needle.jpg 200w, images/space-needle-2x.jpg 400w, images/space-needle-hd.jpg 600w">

#### Use case 2:

Art direction - cropping the image differently on diffrent. E.g. hero image that contains text and providing a smaller version of the image won’t work because the text will be unreadable.  
Use `<picture>` tag.

CODE EXAMPLE NEEDED

<picture>
    <source srcset="https://placehold.it/468x150" media="(max-width: 468px)">
    <source srcset="https://placehold.it/780x150" media="(max-width: 780px)">
    <source srcset="https://placehold.it/1024x150" media="(max-width: 1024px)">
    <source srcset="https://placehold.it/1400x150">
    <img srcset="https://placehold.it/1400x150" alt="My default image">
</picture>
