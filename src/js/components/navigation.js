module.exports = function () {

    var toggleMenu = function(menuItem, navigationNode)  {
        var openElement;

        var titleElm = menuItem.querySelector('span.title');
        if(titleElm) {
            openElement = navigationNode.querySelector('.open');
            if(openElement) {
                openElement.classList.remove('open');
            }

            if(menuItem !== openElement) {
                menuItem.classList.add('open');
            }
        }
    };

    var showMenu = function(e, navigationNode) {
        var elm = e.elm;
        var openElement;
        var selectedLink;

        if (elm && elm.nodeName.toLowerCase() === 'span') {
            if(elm.classList.contains('title')) {
                openElement = navigationNode.querySelector('.open');
                if(openElement) {
                    selectedLink = openElement.querySelector('span.title');
                }

                if(elm !== selectedLink) {
                    elm.parentNode.classList.add('open');
                }
                e.stopPropagation();
            }
        }
    };

    var getPageName = function() {
        if(dataLayer) {
            for(var i=0;dataLayer.length;i++) {
                if(dataLayer[i].common_pageName) {
                    return dataLayer[i].common_pageName;
                }
            }
            return '';
        }
    };

    Array.prototype.forEach.call(document.querySelectorAll('.sc-navigation'), function (node) {
        if (node) {
            setupNavigation(node);
        }
    });

    function setupNavigation(node) {
        node.querySelector('.sc-btn-mobile-menu').addEventListener('click', function () {
            node.classList.toggle('open');
        });

        node.addEventListener('click', function (e) {
            var elm = e.elm || e.srcElement;

            if (elm.nodeName.toLowerCase() === 'li') {
                toggleMenu(elm, node);
                e.stopPropagation();
            } else if (elm.nodeName.toLowerCase() === 'span' || elm.classList.contains('title')) {
                toggleMenu(elm.parentNode, node);
                e.stopPropagation();
            }
        });

        node.addEventListener('keydown', function(e) {
            if (e.keyCode == 13) toggleMenu(e, node); //enter key
            if (e.keyCode == 9) showMenu(e, node); //tab key
        });

        document.body.addEventListener('click', function(e) {
            var openElement = node.querySelector('.open');
            if(openElement) {
                openElement.classList.remove('open');
            }
        });
    }

};
