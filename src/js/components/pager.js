class Pager {


    set setTotalPages(tp) {
        this.totalPages = tp;
    }

    set activeClass(ac) {
        this.activeElement = ac;
    }

    get activeClass() {
        return this.activeElement;
    }

    constructor (root, elementsPerPage, activePage, totalCount) {

        this.document       = $(document);
        this.rootElement    = $(root);
        this.previousButton = $('.previous-page', this.rootElement);
        this.nextButton     = $('.next-page', this.rootElement);
        this.page           = $('li[id]', this.rootElement);
        this.pageTiles      = $('li[id]', this.rootElement);

        this.elementsPerPage = elementsPerPage;
        this.activePage      = activePage;
        this.totalCount      = totalCount;

        this.initEvents();
        this.initPageTiles();
    }

    initEvents() {
        this.previousButton.on('click', $.proxy(this.previous, this));
        this.nextButton.on('click', $.proxy(this.next, this));
        this.page.on('click', $.proxy(this.pageClick, this));
    }

    initPageTiles() {

    }


    previous() {
        console.log('previous');


    }

    next() {
        console.log('next');
    }

    pageClick() {
        let tile = this.page;

        console.log(tile);
    }

    calculatePageCount() {
        let numberOfPages = this.totalCount / this.elementsPerPage;

        if (numberOfPages >= 20) {
            return 20;
        }

        return numberOfPages;
    }
}

(($) => {
    $(function () {
        let pages = $('.sc-pagination li').not('.next-page').find('a');

        pages.on('click', function (e) {
            pages.removeClass('active');
            $(e.target).addClass('active');
        });
    });

    let paginationElement = document.querySelector('.sc-pagination'),
        pagination        = null,
        elementsPerPage   = 20,
        activePage        = 3,
        totalCount        = 800;


    if (paginationElement) {
        pagination = new Pager(paginationElement, elementsPerPage, activePage, totalCount);
    }
    module.exports = pagination;

})(window.Zepto);
