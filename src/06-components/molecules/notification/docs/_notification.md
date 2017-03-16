<div class="sc-content-container example-notification-target" id="example-notification-target">
    Notification Target container
</div>
<style>
.example-notification-target {
    border-bottom: 1px solid #dcdcdc;
    background-color: #c4c4c4;
    padding: 16px;
    margin-bottom: 30px;
}
</style>
<script>
document.querySelector('body').addEventListener('click', event => {
 try {
 if (event.target.className && event.target.className.toLowerCase().includes('notification-demo')) {
 const id = event.target.getAttribute('data-id');
 const el = document.querySelector('#' + id);
 el.classList.toggle('show');
 }
 }catch (e){};
 });
</script>
