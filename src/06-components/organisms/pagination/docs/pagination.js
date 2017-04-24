// This needs to be build in your webpack:

(function () {
    var paginationElement = document.querySelector('.sc-pagination'),
        itemsPerPage = 20,
        activePage = 1,
        totalCount = 800,
        urlTemplate = 'http://www.autoscout24.com/listWithPagination?page={page}&size={size}';
        unlimited = true;

        if (paginationElement) {
        new Pager(paginationElement, itemsPerPage, activePage, totalCount, urlTemplate, unlimited);
        }
})();
