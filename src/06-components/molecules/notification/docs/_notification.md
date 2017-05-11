<h2>Notifications<span class="status refactor">Needs refactoring</span><span class="status js">JS</span></h2>

To add notifications you need 3 elements on your page:
* target container element with uniq id below which notifications are shown  

* `<as24-notification>` element that contains notification message. Should have `type`, `id` and `target` attributes. `target` should match the id of target container element  

* clickable element, that triggers notification to show. Should have `data-id` that reference id of `<as24-notification>`

Atributes of `<as24-notification>` element:  
<br>

| Attribute     | Possible values                  | Description                                  |
| :------------ | :------------------------------- | :------------------------------------------- |
| type          | success/information/error/tip    | defines notification color                   |
| id            | any uniq value                   | uniq id of notification                      |
| target        | id of target element             | notification anchors below the target element|
| title         | any text                         | notification title                           |
| close         | true/false                       | defines close button for the notification    |
| timeout       | value in ms                      | closes notification after [timeout] ms       |

<script>
document.querySelector('body').addEventListener('click', function (event) {
 try {
 if (event.target.className && event.target.className.toLowerCase().includes('notification-demo')) {
 const id = event.target.getAttribute('data-id');
 const el = document.querySelector('#' + id);
 el.classList.toggle('show');
 }
 }catch (e){};
 });
</script>
