class Pager {

    get ETC() {
        return '...';
    }

    get maxPage() {
        return this._maxPage;
    }

    set maxPage(pages) {
        this._maxPage = pages;
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
        this.pageTiles      = $('li', this.rootElement).not('[class]');

        console.log(this.pageTiles);

        this.elementsPerPage = elementsPerPage;
        this.activePage      = activePage;
        this.totalCount      = totalCount;
        this.maxPage         = this.calculatePageCount();

        this.initEvents();
        this.initPageTiles();
    }

    initEvents() {
        this.previousButton.on('click', $.proxy(this.previous, this));
        this.nextButton.on('click', $.proxy(this.next, this));
        this.page.on('click', $.proxy(this.pageClick, this));
    }

    initPageTiles() {
        console.log(this.getPageTiles(this.activePage));

        console.log()

    }

    range(from, to, interval = 1) {
        let range = [];
        for (let i = from; i <= to; i += interval) {
            range.push(i);
        }

        return range;
    }

    getPageTiles(activePage) {
        if (this.maxPage < 10) {
            return Array.from(new Array(this.maxPage), (x, i) => i + 1);
        }

        if (activePage < 6) {
            return Array.from(new Array(7), (x, i) => i + 1).concat([this.ETC, this.maxPage]);
        }
        if (activePage > (this.maxPage - 5)) {
            return [1, this.ETC].concat(this.range(this.maxPage - 6, this.maxPage));
        }

        let leftTiles  = [],
            rightTiles = [];

        if (activePage > 5 && activePage < (this.maxPage - 4)) {
            leftTiles  = [1, this.ETC, activePage - 2, activePage - 1];
            rightTiles = [activePage + 1, activePage + 2, this.ETC, this.maxPage];
        }

        return leftTiles.concat([activePage].concat(rightTiles));
    }

    setPage(number) {
        let tile;
    }

    setInfoPage() {

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
        let numberOfPages = Math.ceil(this.totalCount / this.elementsPerPage);

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
        activePage        = 1,
        totalCount        = 150;


    if (paginationElement) {
        pagination = new Pager(paginationElement, elementsPerPage, activePage, totalCount);
    }
    module.exports = pagination;

})(window.Zepto);
