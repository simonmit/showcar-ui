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

    set previousButton(disabled) {
        let li = $('<li></li>'),
            a = $('<a></a>'),
            icon = $('<as24-icon></as24-icon>');

        li.addClass('previous-page')
        a.attr('href', '#previous-url');
        a.text(' Previous');
        icon.attr('type', 'arrow');

        if (disabled) {
            a.addClass('disabled');
        }

        return this._previousButton = li.append(a.prepend(icon));
    }

    get previousButton() {
        return this._previousButton;
    }

    set nextButton(disabled) {
        let li = $('<li></li>'),
            a = $('<a></a>'),
            icon = $('<as24-icon></as24-icon>');

        li.addClass('next-page')
        a.attr('href', '#next-url');
        a.text('Next ');
        icon.attr('type', 'arrow');

        if (disabled) {
            a.addClass('disabled');
        }

        return this._nextButton = li.append(a.append(icon));
    }

    get nextButton() {
        return this._nextButton;
    }

    constructor (root, elementsPerPage, activePage, totalCount) {

        this.rootElement     = $(root);
        this.elementsPerPage = elementsPerPage;
        this.activePage      = activePage;
        this.totalCount      = totalCount;
        this.maxPage         = this.calculatePageCount();

        this.initAllPageTiles();
        this.initEvents();
    }

    initEvents() {
        $('.previous-page').on('click', $.proxy(this.previous, this));
        $('.next-page').on('click', $.proxy(this.next, this));

        let pages = $('.sc-pagination li').not('.next-page').find('a');

        pages.on('click', $.proxy(this.togglePage, this));
        this.rootElement.has('id');
    }

    initAllPageTiles() {
        let paginationOrder = this.getPageTiles(this.activePage),
            collection = $();

        this.togglePrevious();
        this.rootElement.append(this.previousButton);

        paginationOrder.forEach((page) => {
            collection = collection.add(this.createNumberTile(page));
        });

        this.rootElement.append(collection);
        this.toggleNext();
        this.rootElement.append(this.nextButton);
    }

    createNumberTile(pageNumber) {
        let tile, a;

        tile = $("<li></li>", {
            id: 'page-' + pageNumber
        });

        a = $('<a></a>');
        a.attr('href', '#eineUrl');

        if (typeof pageNumber !== 'number') {
            tile.attr('id', 'etc');
            a.addClass('disabled');
        }

        if (this.activePage == pageNumber) {
            a.addClass('active');
        }

        a.text(pageNumber);

        return tile.append(a);
    }

    togglePrevious() {
        if (this.activePage === 1) {
            this.previousButton = true;
        } else {
            this.previousButton = false;
        }
    }

    toggleNext() {
        let pages = this.getPageTiles(this.activePage);

        if (this.activePage === pages[pages.length - 1]) {
            this.nextButton = true;
        } else {
            this.nextButton = false;
        }
    }

    togglePage(e) {
        //this.removeClass('active');
        $(e.target).addClass('active');
    }


    static range(from, to, interval = 1) {
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
            return [1, this.ETC].concat(Pager.range(this.maxPage - 6, this.maxPage));
        }

        let leftTiles  = [],
            rightTiles = [];

        if (activePage > 5 && activePage < (this.maxPage - 4)) {
            leftTiles  = [1, this.ETC, activePage - 2, activePage - 1];
            rightTiles = [activePage + 1, activePage + 2, this.ETC, this.maxPage];
        }

        return leftTiles.concat([activePage].concat(rightTiles));
    }

    setInfoPage() {

    }


    previous() {
        console.log('previous');


    }

    next() {
        console.log('next');
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
    let paginationElement = document.querySelector('.sc-pagination'),
        pagination        = null,
        elementsPerPage   = 20,
        activePage        = 15,
        totalCount        = 300,
        url               = 'http://www.autoscout24.lol/fim/fam/?blubb=7';

    if (paginationElement) {
        pagination = new Pager(paginationElement, elementsPerPage, activePage, totalCount);
    }
    module.exports = pagination;

})(window.Zepto);
