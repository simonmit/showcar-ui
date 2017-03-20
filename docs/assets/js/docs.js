window.addEventListener('load', function () {
    var codeSampes = document.querySelectorAll('.code-sample-toggle');

    function codeSampleToggle() {
        var toggleClass = function (codeSamle) {
            if (codeSamle.classList.contains('hide-sample') !== true) {
                codeSamle.classList.add('hide-sample');
                codeSamle.querySelector('span').innerHTML = 'Hide';
                codeSamle.parentNode.querySelector('.code').classList.add('show');
            } else {
                codeSamle.classList.remove('hide-sample');
                codeSamle.querySelector('span').innerHTML = 'Show';
                codeSamle.parentNode.querySelector('.code').classList.remove('show');
            }
            activateMenu();
        };

        [].forEach.call(codeSampes, function (codeSamle) {
            codeSamle.addEventListener('click', function () {
                toggleClass(codeSamle)
            })
        })
    }

    function allCodeSample() {
        var toggleClass = function (toggler) {
            if (toggler.classList.contains('active') !== true) {
                [].forEach.call(codeSampes, function (codeSamle) {
                    toggler.classList.add('active');
                    toggler.querySelector('span').innerHTML = 'Hide';
                    codeSamle.classList.add('hide-sample');
                    codeSamle.querySelector('span').innerHTML = 'Hide';
                    codeSamle.parentNode.querySelector('.code').classList.add('show');
                });
            } else {
                [].forEach.call(codeSampes, function (codeSamle) {
                    toggler.classList.remove('active');
                    toggler.querySelector('span').innerHTML = 'Show';
                    codeSamle.classList.remove('hide-sample');
                    codeSamle.querySelector('span').innerHTML = 'Show';
                    codeSamle.parentNode.querySelector('.code').classList.remove('show');
                });
            }
            activateMenu();
        }
        document.getElementById('all-code-toggler').addEventListener('click', function () {
            toggleClass(this);
        });
    }

    codeSampleToggle();
    allCodeSample();


    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInSine', // Easing pattern to use
        offset: -1, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function (anchor, toggle) {
        }
    });

    function animateOnLoad() {
        if (window.location.hash) {
            var anchor = document.querySelector(window.location.hash);
            smoothScroll.animateScroll(anchor);
        }
    }

    animateOnLoad();


    var positonAnchors = document.querySelectorAll('.positon-anchor');

    function activateMenu() {
        var section = {}, i = 0;
        window.onscroll = function () {
            [].forEach.call(positonAnchors, function (positonAnchor) {
                section[positonAnchor.id] = positonAnchor.offsetTop;
            });
            var windowPosition = document.body.scrollTop;
            for (i in section) {
                var sectionHeight = document.getElementById(i).offsetHeight;
                var target = document.querySelector('#left-menu a[href="#' + i + '"]');
                if (windowPosition >= section[i] && windowPosition < (section[i] + sectionHeight)) {
                    if (target.classList.contains('active') === true) {
                        continue;
                    }
                    target.classList.add('active');
                    history.replaceState(null, null, '#' + i);
                } else {
                    target.classList.remove('active');
                }
            }
        }
    }

    activateMenu();
    document.addEventListener('resize', activateMenu)
});
