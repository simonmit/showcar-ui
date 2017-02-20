#### Usage:

In case you need some responsive grid functionality, you need to use the responsive grid classes additionally. The best practice is to use the general `.sc-grid-col-*` class first and override it, depending on your needs with the necessary viewport specific grid class `.sc-grid-col-*-*`.  
Always keep in mind, that smaller viewport grid classes override bigger ones.

#### Status:

<p class="status refactor">Needs refactoring</p>

<table class="docs-table">
    <thead>
    <tr>
        <th>Grid column classes</th>
        <th>device<br>min-width</th>
        <th>device<br>max-width</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>.sc-grid-col-*</code><br>(default)</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>.sc-grid-col-xl-*</code></td>
        <td>1100px</td>
        <td>∞</td>
    </tr>
    <tr>
        <td><code>.sc-grid-col-l-*</code></td>
        <td></td>
        <td>1099px</td>
    </tr>
    <tr>
        <td><code>.sc-grid-col-m-*</code></td>
        <td></td>
        <td>1023px</td>
    </tr>
    <tr>
        <td><code>.sc-grid-col-s-*</code></td>
        <td></td>
        <td>767px</td>
    </tr>
    <tr>
        <td><code>.sc-grid-col-xs-*</code></td>
        <td></td>
        <td>320px</td>
    </tr>
    </tbody>
</table>

With the responsive grid column classes, you are able, to set the column width in dependency to the viewport. For Example if you define a grid with the classes `sc-grid-col-4 sc-grid-col-m-6 sc-grid-col-s-12` it will be 4 columns wide on devices larger than M-Viewport, 6 columns wide on devices with M-Viewport and 12 columns wide in devices with S-Viewport.  
You can simply check the behavior of the grid by resizing the current page.

ACHTUNG! Example is not working
