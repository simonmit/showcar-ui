class Pager {

    /**
     * @param {HTMLElement|String} root can be a selector
     * @param {Number} elementsPerPage
     * @param {Number} activePage
     * @param {Number} totalCount
     */
    constructor (root, elementsPerPage, activePage, totalCount) {
        this.ETC             = '...';
        this.rootElement     = $(root);
        this.elementsPerPage = elementsPerPage;
        this.activePage      = activePage;
        this.totalCount      = totalCount;
        this.maxPage         = this.calculatePageCount();

        this.prototypeLi   = $('<li>');
        this.prototypeA    = $('<a>');
        this.prototypeIcon = $('<as24-icon>');

        this.render();
    }

    /**
     * @returns {Number}
     */
    get maxPage() {
        return this._maxPage;
    }

    /**
     * @param {Number} pages
     */
    set maxPage(pages) {
        this._maxPage = pages;
    }

    /**
     * @returns {Object|Zepto}
     */
    get previousButton() {
        let li   = this.prototypeLi.clone(),
            a    = this.prototypeA.clone(),
            icon = this.prototypeIcon.clone();

        li.addClass('previous-page');
        a.attr('href', '#previous-url');
        a.text(' Previous');
        icon.attr('type', 'arrow');

        if (1 === this.activePage) a.addClass('disabled');

        return li.append(a.prepend(icon));
    }

    /**
     * @returns {Object|Zepto}
     */
    get nextButton() {
        let li   = this.prototypeLi.clone(),
            a    = this.prototypeA.clone(),
            icon = this.prototypeIcon.clone();

        li.addClass('next-page');
        a.attr('href', '#next-url');
        a.text('Next ');
        icon.attr('type', 'arrow');

        if (this.maxPage === this.activePage) a.addClass('disabled');

        return li.append(a.append(icon));
    }

    get infoPage() {
        return this.prototypeLi.clone().addClass('info-page').append(
            this.prototypeA.clone().addClass('disabled').attr('href', 'javascript:void(0)').text(
                this.activePage + ' / ' + this.maxPage
            )
        );
    }

    /**
     * @param {Number} pageNumber
     * @returns {String}
     */
    getPageUrl(pageNumber) {
        return '#eineUrl';
    }

    /**
     * Create a single page element
     *
     * @param {Number} pageNumber
     * @returns {Object|Zepto}
     */
    createPage(pageNumber) {
        let tile = this.prototypeLi.clone().data('page', pageNumber),
            a    = this.prototypeA.clone().attr('href', this.getPageUrl(pageNumber));

        if (this.ETC === pageNumber) {
            tile.data('page', 'etc');
            a.addClass('disabled');
        }

        if (this.activePage === pageNumber) {
            a.addClass('active');
        }

        a.text(pageNumber);

        return tile.append(a);
    }

    /**
     * Returns a array with all page numbers in the correct order
     *
     * Example:
     * activePage = 17
     * maxPage    = 20
     * Returns [1, "...", 14, 15, 16, 17, 18, 19, 20]
     *
     * @param {Number} activePage
     * @returns {Array}
     */
    getPageTiles(activePage) {
        if (this.maxPage < 10) {
            return Array.from(new Array(this.maxPage), (x, i) => i + 1);
        }

        if (activePage < 6) {
            return Array.from(new Array(7), (x, i) => i + 1).concat([this.ETC, this.maxPage]);
        }
        if (activePage > (this.maxPage - 5)) {
            return [1, this.ETC].concat(Array.from(new Array(this.maxPage), (_, i) => i + 1).slice(this.maxPage - 7, this.maxPage));
        }

        let leftTiles  = [],
            rightTiles = [];

        if (activePage > 5 && activePage < (this.maxPage - 4)) {
            leftTiles  = [1, this.ETC, activePage - 2, activePage - 1];
            rightTiles = [activePage + 1, activePage + 2, this.ETC, this.maxPage];
        }

        return leftTiles.concat([activePage].concat(rightTiles));
    }

    /**
     * Render the pagination
     */
    render() {
        let paginationOrder = this.getPageTiles(this.activePage),
            collection      = $();

        this.rootElement.append(this.previousButton);
        this.rootElement.append(this.infoPage);

        paginationOrder.forEach((page) => {
            collection = collection.add(this.createPage(page));
        });

        this.rootElement.append(collection);
        this.rootElement.append(this.nextButton);
    }

    /**
     * @returns {Number}
     */
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
        activePage        = 17,
        totalCount        = 800,
        url               = 'http://www.autoscout24.lol/fim/fam/?blubb=7';

    if (paginationElement) {
        pagination = new Pager(paginationElement, elementsPerPage, activePage, totalCount);
    }
    module.exports = pagination;

})(window.Zepto);
