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
        this.itemsPerPage = parseInt(itemsPerPage);
        this.activePage   = parseInt(activePage);
        this.totalCount   = parseInt(totalItems);
        this.urlTemplate  = urlTemplate;
        this.maxPage      = this.calculatePageCount();
        this.tileWidth    = 48;

        this.prototypeLi   = $('<li>');
        this.prototypeA    = $('<a>');
        this.prototypeIcon = $('<as24-icon>');

        $(window).on('resize', $.proxy(this.render, this));

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
     * Returns the maximum possible amount ot tiles between <PREV> and <NEXT>
     *
     * @returns {int}
     */
    getMaximumPossibleTiles() {
        const rootWidth = this.rootElement.width();

        // We assume that this is the minWidth for both buttons
        const prevNextWidth = 200;

        return Math.floor((rootWidth - prevNextWidth) / this.tileWidth);
    }

    /**
     * Returns an array with all page numbers in the correct order
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
        let leftNumber = activePage - 1;
        let rightNumber = activePage + 1;
        let maxPossibleTiles = this.getMaximumPossibleTiles();
        let tiles = [activePage];
        let usefulTiles = 0;

        while ((leftNumber > 0 || rightNumber <= this.maxPage) && maxPossibleTiles > 0) {

            if (leftNumber > 0) {
                tiles.unshift(leftNumber);
                usefulTiles++;
                maxPossibleTiles--;
                if (0 === maxPossibleTiles) {
                    break;
                }
            }

            if (rightNumber <= this.maxPage) {
                tiles.push(rightNumber);
                usefulTiles++;
                maxPossibleTiles--;
                if (0 === maxPossibleTiles) {
                    break;
                }
            }

            leftNumber--;
            rightNumber++;
        }

        // show dots on the left ( < 1 ... 7 8 9)
        if (1 !== tiles[0]) {
            tiles[0] = 1;
            tiles[1] = this.ETC;
            usefulTiles -= 1;
        }

        // show dots on the right ( 10 11 ... 20 >)
        if (this.maxPage !== tiles[tiles.length - 1]) {
            tiles[tiles.length -1] = this.maxPage;
            tiles[tiles.length -2] = this.ETC;
            usefulTiles -= 1;
        }

        // special case for having a maximum of 3 pages and enough space to show 'em all
        if ((usefulTiles >= 2 && this.maxPage === 3)) {
            return tiles;
        }

        // show only the infopage tile
        if ((usefulTiles <= 2 || this.maxPage <= 2) || (usefulTiles <= 3 && this.maxPage >= 7)) {
            return [];
        }

        return tiles;
    }

    /**
     * Render the pagination
     */
    render() {
        this.rootElement.children().remove();

        let pagination = this.getPageTiles(this.activePage),
            collection      = $();

        this.rootElement.append(this.previousButton);

        if (0 === pagination.length) {
            this.rootElement.append(this.infoPage);
        } else {
            pagination.forEach((page) => {
                collection = collection.add(this.createPage(page));
            });
            this.rootElement.append(collection);
        }

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
