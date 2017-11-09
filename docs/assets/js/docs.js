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
                toggleClass(codeSamle);
            });
        });
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
        };
        var allCodeToggler = document.getElementById('all-code-toggler');
        if (allCodeToggler) {
            allCodeToggler.addEventListener('click', function () {
                toggleClass(this);
            });
        }
    }

    codeSampleToggle();
    allCodeSample();

    var sidebar = document.getElementById('sidebar');
    [].forEach.call(document.querySelectorAll('[data-scroll]'), function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(el.getAttribute('href'));
            if (sidebar.classList.contains('open')) {
                smoothScroll.animateScroll(target, el, { speed: 0 });
                sidebar.classList.remove('open');
            } else {
                smoothScroll.animateScroll(target, el, { speed: 500, easing: 'easeInSine', offset: - 1 });
            }

            window.location.hash = el.getAttribute('href');
        });
    });

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
        };
    }

    activateMenu();
    document.addEventListener('resize', activateMenu);
    var openMenu = document.getElementById('open-menu');
    if (openMenu) {
        openMenu.addEventListener('click', function () {
            document.getElementById('sidebar').classList.toggle('open');
        });
    }

    function scrollLocationHash() {
        if (window.location.hash) {
            var anchor = document.querySelector(window.location.hash);
            if (anchor) {
                smoothScroll.animateScroll(anchor, false, { speed: 0 });
                document.getElementById('sidebar').classList.remove('open');
            }
        }
    }

    window.addEventListener('resize', scrollLocationHash);
    scrollLocationHash();
});
