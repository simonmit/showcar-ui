<h2>List with links<span class="status refactor">Needs review</span></h2>

Showcar-ui library delivers styles for links display and arrow on the left. All column positioning is up to the team who is implementing it.  

Responsive columns width could be achieved with flexbox or with `sc-grid-col-*` styling.

```html
<div class="sc-grid-row">
    <ul class="sc-link-list sc-grid-col-4 sc-grid-col-s-6">
        <li><a href="https://www.autoscout24.de/auto/audi/"><span>Audi</span></a></li>
        <li><a href="https://www.autoscout24.de/auto/bmw/"><span>BMW</span></a></li>
    </ul>
    <ul class="sc-link-list sc-grid-col-4 sc-grid-col-s-6">
        <li><a href="https://www.autoscout24.de/auto/porsche/"><span>Porsche</span></a></li>
    </ul>
    <ul class="sc-link-list sc-grid-col-4 sc-grid-col-s-6 sc-hidden-s">
        <li><a href="https://www.autoscout24.de/auto/renault/"><span>Renault</span></a></li>
        <li><a href="https://www.autoscout24.de/auto/skoda/"><span>Skoda</span></a></li>
        <li><a href="https://www.autoscout24.de/auto/tesla/"><span>Tesla</span></a></li>
    </ul>
</div>
```
