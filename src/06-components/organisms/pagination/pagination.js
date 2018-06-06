class Pager {

    /**
     * @param {HTMLElement|String} root can be a selector
     * @param {Number} itemsPerPage
     * @param {Number} activePage
     * @param {Number} totalItems
     * @param {String} urlTemplate
     * @param {Boolean} unlimited
     */
    constructor (root, itemsPerPage, activePage, totalItems, urlTemplate, unlimited) {

        this.ETC          = '...';
        try {
            this.rootElement  = $(root);
        } catch (error) {
            window.onerror('showcar-ui-test. $ is not defined', 'showcar-ui');
        }
        this.itemsPerPage = parseInt(itemsPerPage);
        this.activePage   = parseInt(activePage);
        this.totalCount   = parseInt(totalItems);
        this.urlTemplate  = urlTemplate;
        this.unlimited = unlimited;
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

        const previousText = $(this.rootElement).data('previous-text') || 'Previous';
        const isFirstPage = 1 === this.activePage;

        li.addClass('previous-page');
        if (!isFirstPage) {
            a.attr('href', this.getPageUrl(this.activePage - 1));
        }

        a.text(' ' + previousText);
        icon.attr('type', 'arrow');

        if (isFirstPage) {
            a.addClass('disabled');
        }

        return li.append(a.prepend(icon));
    }

    /**
     * @returns {Object|Zepto}
     */
    get nextButton() {
        let li   = this.prototypeLi.clone(),
            a    = this.prototypeA.clone(),
            icon = this.prototypeIcon.clone();

        const nextText = $(this.rootElement).data('next-text') || 'Next';
        const isLastPage = this.maxPage === this.activePage;

        li.addClass('next-page');
        if (!isLastPage) {
            a.attr('href', this.getPageUrl(this.activePage + 1));
        }

        a.text(nextText + ' ');
        icon.attr('type', 'arrow');

        if (isLastPage) {
            a.addClass('disabled');
        }

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
            a.removeAttr('href');
            a.attr('rel','nofollow');
        }

        if (this.activePage === pageNumber) {
            a.addClass('active');
            a.removeAttr('href');
            a.attr('rel','nofollow');
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
        let leftNumber = activePage - 1,
            rightNumber = activePage + 1,
            maxPossibleTiles = this.getMaximumPossibleTiles(),
            usefulTiles = 0,
            countEtc = 0;

        // we always want to have an odd number of tiles to show
        if (maxPossibleTiles % 2 === 0 && this.maxPage > maxPossibleTiles) {
            maxPossibleTiles--;
        }

        let tiles = [activePage];

        // because we have our activePage, we have one possible tile less
        maxPossibleTiles--;

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

        // special case: we have enough space to show 'em all
        if (tiles.length === this.maxPage) {
            return tiles;
        }

        // special case: If we have less or equal to 7 pages/tiles in total, we show all or infopage
        if (this.maxPage <= 7 && tiles.length < this.maxPage) {
            return [];
        }

        // show dots on the left ( < 1 ... 7 8 9)
        if (1 !== tiles[0]) {
            tiles[0] = 1;
            tiles[1] = this.ETC;
            countEtc++;
            usefulTiles -= 1;
        }

        // show dots on the right ( 10 11 ... 20 >)
        if (this.maxPage !== tiles[tiles.length - 1]) {
            tiles[tiles.length - 1] = this.maxPage;
            tiles[tiles.length - 2] = this.ETC;
            countEtc++;
            usefulTiles -= 1;
        }

        // special case: show info page if less than 3 useful tiles
        if (countEtc >= 1 && usefulTiles <= 3) {
            return [];
        }

        // show only the info page tile
        if (usefulTiles <= 2 || this.maxPage <= 3) {
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

        if (this.unlimited) {
            return numberOfPages;
        }

        if (numberOfPages >= 20) {
            return 20;
        }

        return numberOfPages;
    }
}

export default Pager;
