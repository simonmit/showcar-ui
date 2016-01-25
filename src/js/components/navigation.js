module.exports = function () {

    var navigation = document.querySelector('nav');

    if (navigation) {

        navigation.querySelector('.header-trigger').addEventListener('click', function () {
            navigation.classList.toggle('open');
        });

        navigation.addEventListener('click', function (e) {
            var elm = e.target || e.srcElement;

            if (elm.nodeName.toLowerCase() === 'li') {
                toggleMenu(elm);
                e.stopPropagation();
            } else if (elm.nodeName.toLowerCase() === 'span' || elm.classList.contains('subnav-title')) {
                toggleMenu(elm.parentNode);
                e.stopPropagation();
            }
        });

        var toggleMenu = function(menuItem)  {
            var openElement;

            var titleElm = menuItem.querySelector('span.subnav-title');
            if(titleElm) {
                openElement = navigation.querySelector('.open');
                if(openElement) {
                    openElement.classList.remove('open');
                }

                if(menuItem !== openElement) {
                    menuItem.classList.add('open');
                }
            }
        };

        var showMenu = function(e) {
            var elm = e.target;
            var openElement;
            var selectedLink;

            if (elm && elm.nodeName.toLowerCase() === 'span') {
                if(elm.classList.contains('subnav-title')) {
                    openElement = navigation.querySelector('.open');
                    if(openElement) {
                        selectedLink = openElement.querySelector('span.subnav-title');
                    }

                    if(elm !== selectedLink) {
                        elm.parentNode.classList.add('open');
                    }
                    e.stopPropagation();
                }
            }
        };

        navigation.addEventListener('keydown', function(e) {
            if (e.keyCode == 13) toggleMenu(e); //enter key
            if (e.keyCode == 9) showMenu(e); //tab key
        });

        navigation.addEventListener('click', function(e) {
            var target = e.target || e.srcElement;
            if (target && target.nodeName.toLowerCase() === 'a'){
                if (target.href){
                    var pageName = getPageName();
                    if(pageName.length > 0) {
                        var appendChar = (target.href.indexOf('?') > -1) ? '&' : '?';
                        window.location.href = target.href + appendChar + "genlnk=navi&genlnkorigin=" + pageName;
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }
            }
        });

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

        document.body.addEventListener('click', function(e) {
            var openElement = navigation.querySelector('.open');
            if(openElement) {
                openElement.classList.remove('open');
            }
        });
    }

};
