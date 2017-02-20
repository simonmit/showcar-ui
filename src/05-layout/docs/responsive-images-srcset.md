#### Usage:

In the resolution switching use case, when you need to select a different source of the same image because you need a different resolution.  
Use srcset attribute on the <img>.

#### Status: 

<p class="status review">Needs review</p>

CODE EXAMPLE NEEDED

The height and width of the image should remain fixed.
`<img src="images/space-needle.jpg" srcset="images/space-needle.jpg 200w, images/space-needle-2x.jpg 400w, images/space-needle-hd.jpg 600w">`

Сustom height and width of the image based on the viewport.
`<img src="images/space-needle.jpg" sizes="(max-width: 40em) 100vw, 50vw" srcset="images/space-needle.jpg 200w, images/space-needle-2x.jpg 400w, images/space-needle-hd.jpg 600w">`
