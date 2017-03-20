<h2>Pagination <span class="status refactor">Needs refactoring</span></h2>

If you want to use the pagination component, you need to add the ul element with the .sc-pagination class as shown below and the corresponding javascript snippet.

You need the following properties to instantiate the "Pager":

* The name of the "root" element (in fact you can use document.querySelector('.sc-pagination') to obtain the right element)
* Number of items per page (itemsPerPage)
* The currently active page (activePage)
* Total number of items (totalCount)
* The url-template which is used for the a-tag (urlTemplate) with the {page} and the {size} placeholders.
* The {size} placeholder hold the value for the items per page. The {page} placeholder will be filled with the currently active page.

<script>
window.onload = function(){
 (function ($) {
   var paginationElement = document.querySelector('.sc-pagination'),
   itemsPerPage = 20,
   activePage = 1,
   totalCount = 800,
   urlTemplate = 'http://www.autoscout24.com/listWithPagination?page={page}&size={size}';

   if (paginationElement) {
   new Pager(paginationElement, itemsPerPage, activePage, totalCount, urlTemplate);
   }
 })(window.Zepto);
}
</script>
