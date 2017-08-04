<h2>Notifications<span class="status refactor">Needs refactoring</span><span class="status js">JS</span></h2>

To add notifications you need 3 elements on your page:
* target container element with uniq id below which notifications are shown  

* `<as24-notification>` element that contains notification message. Should have `type`, `id` and `target` attributes. `target` should match the id of target container element  

* clickable element, that triggers notification to show. Should have `data-trigger` that reference id of `<as24-notification>`

* `data-id` attribute in clickable element is deprecated, use `data-trigger` instead

Atributes of `<as24-notification>` element:  
<br>

<table class="docs-table">
   <thead>
      <tr>
         <th style="text-align:left">Attribute</th>
         <th style="text-align:left">Possible values</th>
         <th style="text-align:left">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td style="text-align:left">type</td>
         <td style="text-align:left">success/information/error/tip</td>
         <td style="text-align:left">defines notification color</td>
      </tr>
      <tr>
         <td style="text-align:left">id</td>
         <td style="text-align:left">any uniq value</td>
         <td style="text-align:left">uniq id of notification</td>
      </tr>
      <tr>
         <td style="text-align:left">target</td>
         <td style="text-align:left">id of target element</td>
         <td style="text-align:left">notification anchors below the target element</td>
      </tr>
      <tr>
         <td style="text-align:left">title</td>
         <td style="text-align:left">any text</td>
         <td style="text-align:left">notification title</td>
      </tr>
      <tr>
         <td style="text-align:left">close</td>
         <td style="text-align:left">true/false</td>
         <td style="text-align:left">defines close button for the notification</td>
      </tr>
      <tr>
         <td style="text-align:left">timeout</td>
         <td style="text-align:left">value in ms</td>
         <td style="text-align:left">closes notification after [timeout] ms</td>
      </tr>
   </tbody>
</table>
