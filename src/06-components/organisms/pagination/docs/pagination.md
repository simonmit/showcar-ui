If you want to use the pagination component, you just need to add the ul element with the .sc-pagination class as shown below and the corresponding javascript snippet.
You need following properties to instantiate the "Pager":
the name of the "root" element (in fact you can use document.querySelector('.sc-pagination') to obtain the right element)
number of items per page (itemsPerPage)
the currently active page (activePage)
total number of items (totalCount)
the url-template which is used for the a-tag (urlTemplate) with the {page} and the {size} placeholders.
The {size} placeholder hold the value for the items per page. The {page} placeholder will be filled with the currently active page.

#### Status:

<p class="status refactor">Needs refactoring</p>
