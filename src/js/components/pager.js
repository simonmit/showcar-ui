class Pager {

    /**
     * @param {HTMLElement|String} root can be a selector
     * @param {Number} itemsPerPage
     * @param {Number} activePage
     * @param {Number} totalItems
     * @param {String} urlTemplate
     */
    constructor (root, itemsPerPage, activePage, totalItems, urlTemplate) {

        this.ETC          = '...';
        this.rootElement  = $(root);
        this.itemsPerPage = itemsPerPage;
        this.activePage   = activePage;
        this.totalCount   = totalItems;
        this.urlTemplate  = urlTemplate;
        this.maxPage      = this.calculatePageCount();

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
        a.attr('href', this.getPageUrl(this.activePage - 1));
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
        a.attr('href', this.getPageUrl(this.activePage + 1));
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
        let template = this.urlTemplate.replace('{page}', pageNumber.toString());

        return template.replace('{size}', this.itemsPerPage.toString());
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
        let pagination = this.getPageTiles(this.activePage),
            collection      = $();

        this.rootElement.append(this.previousButton);
        this.rootElement.append(this.infoPage);

        pagination.forEach((page) => {
            collection = collection.add(this.createPage(page));
        });

        this.rootElement.append(collection);
        this.rootElement.append(this.nextButton);
    }

    /**
     * @returns {Number}
     */
    calculatePageCount() {
        let numberOfPages = Math.ceil(this.totalCount / this.itemsPerPage);

        if (numberOfPages >= 20) {
            return 20;
        }

        return numberOfPages;
    }
}

module.exports = Pager;
