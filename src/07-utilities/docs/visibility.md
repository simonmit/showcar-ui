<h2>Visible/hidden classes<span class="status approved">Approved</span></h2>

#### Usage:

Utility classes to show/hide elements based on the current viewport (media queries).  
IMPORTANT: Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each device's presentation.

THE OLD CLASSES (e.g. sc-visible-s) STILL WORK AS THEY USED TO.

#### Hidden attribute:

The `hidden` attribute may be applied to any element, and effectively hides elements similar to `display: none` in CSS.  
It is supported by all major browsers.

<table class="docs-table docs-table-visibility">
    <thead>
    <tr>
        <th></th>
        <th>S Viewport</th>
        <th>M Viewport</th>
        <th>L Viewport</th>
        <th>XL Viewport</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>.sc-visible-at-xl</code></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="cell-visible">Visible</td>
    </tr>
    <tr>
        <td><code>.sc-visible-at-l</code></td>
        <td></td>
        <td></td>
        <td class="cell-visible">Visible</td>
        <td></td>
    </tr>
    <tr>
        <td><code>.sc-visible-at-m</code></td>
        <td></td>
        <td class="cell-visible">Visible</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>.sc-visible-at-s</code></td>
        <td class="cell-visible">Visible</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>.sc-hidden</code></td>
        <td class="cell-hidden">Hidden</td>
        <td class="cell-hidden">Hidden</td>
        <td class="cell-hidden">Hidden</td>
        <td class="cell-hidden">Hidden</td>
    </tr>
    <tr>
        <td><code>.sc-hidden-at-xl</code></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="cell-hidden">Hidden</td>
    </tr>
    <tr>
        <td><code>.sc-hidden-at-l</code></td>
        <td></td>
        <td></td>
        <td class="cell-hidden">Hidden</td>
        <td></td>
    </tr>
    <tr>
        <td><code>.sc-hidden-at-m</code></td>
        <td></td>
        <td class="cell-hidden">Hidden</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>.sc-hidden-at-s</code></td>
        <td class="cell-hidden">Hidden</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
</table>
