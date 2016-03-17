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
        this.tileWidth    = 48;

        this.prototypeLi   = $('<li>');
        this.prototypeA    = $('<a>');
        this.prototypeIcon = $('<as24-icon>');

        $(window).on('resize', this.render);

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
        let leftNumber = activePage-1;
        let rightNumber = activePage + 1;
        let maxPossibleTiles = this.getMaximumPossibleTiles();
        let tiles = [activePage];

        let willUnshift;

        while (leftNumber > 0 || rightNumber <= this.maxPage) {

            willUnshift = false;

            if (leftNumber > 0) {
                willUnshift = true;
                maxPossibleTiles--;
                if (0 === maxPossibleTiles) {
                    break;
                }
            }

            if (rightNumber <= this.maxPage) {
                if (true === willUnshift) {
                    tiles.unshift(leftNumber);
                }
                tiles.push(rightNumber);
                maxPossibleTiles--;
                if (0 === maxPossibleTiles) {
                    break;
                }
            }

            leftNumber--;
            rightNumber++;
        }

        if (1 !== tiles[0]) {
            tiles[0] = 1;
            tiles[1] = this.ETC;
        }

        if (this.maxPage !== tiles[tiles.length -1]) {
            tiles[tiles.length -1] = this.maxPage;
            tiles[tiles.length -2] = this.ETC;
        }

        return tiles;
    }


    xgetPageTiles(activePage) {
        let leftTiles  = [1],
            rightTiles = [this.maxPage],
            maxPossibleTiles = this.getMaximumPossibleTiles(),
            highestPage = this.maxPage;


        console.log('maxPossibleTile:', maxPossibleTiles, ' highestPage:', highestPage, ' activePage:', activePage);

        // Number of pages is lower or equal max. possible tiles
        // < 1 [2] 3 4 >
        if (maxPossibleTiles >= highestPage) {
            console.log('< 1 [2] 3 4 >');
            return Array.from(new Array(this.maxPage), (x, i) => i + 1);
        }

        // < 1 2 3 [4] 5 ... 20 >
        if (activePage <= Math.ceil(maxPossibleTiles / 2)){
            console.log('< 1 2 3 [4] 5 ... 20 >');
            return Array.from(new Array(maxPossibleTiles - 2), (x, i) => i + 1).concat([this.ETC, this.maxPage]);
        }

        leftTiles.push(this.ETC);

        // < 1 ... 16 [17] 18 19 20 >
        let unusedTiles = Math.ceil((maxPossibleTiles - leftTiles.length) / 2);
        console.log('< 1 ... 16 [17] 18 19 20 >');
        console.log('unusedTiles', unusedTiles);
        if (activePage > unusedTiles) {
            return leftTiles.concat(Array.from(new Array(this.maxPage), (_, i) => i + 1).slice(activePage - 1, this.maxPage));
        }

        rightTiles.unshift(this.ETC);

        // < 1 ... 6 [7] 8 ... 20 >


        //if (activePage > 5 && activePage < (this.maxPage - 4)) {
        //    leftTiles  = [1, this.ETC, activePage - 2, activePage - 1];
        //    rightTiles = [activePage + 1, activePage + 2, this.ETC, this.maxPage];
        //}
        //
        return leftTiles.concat([activePage].concat(rightTiles));
    }

    /**
     * Render the pagination
     */
    render() {
        let pagination = this.getPageTiles(this.activePage),
            collection      = $();

        this.rootElement.append(this.previousButton);
        // this.rootElement.append(this.infoPage);

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
