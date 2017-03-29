<h2>Spy Navigation <span class="status refactor">Needs refactoring</span><span class="status complete">JS</span></h2>

Make sure you always set the target for each navigation link by providing the data-href attribute as shown in the code example below.
The target element itself needs to be an anchor tag with the name set to the value that you set in the data-href attribute.
The anchor tag defines the start of the section you want to jump to or select when scrolling there.


<script>
document.addEventListener('DOMContentLoaded', function() {
    (function($, showcar) {
        var stickyYStartPosition = $('.sc-spy-navigation').offset().top;
        if (document.querySelector('.markdown-sdf')) { //block temporary
            stickyYStartPosition += 275;
            var spyNavSample = document.querySelector('#spy-navigation .sample');
            var spyNavSampleOffsetBottom = spyNavSample.offsetTop + spyNavSample.offsetHeight;
            document.addEventListener('scroll', function() {
                if (window.pageYOffset > spyNavSampleOffsetBottom + 250) {
                    document.querySelector('.sc-spy-navigation').classList.remove('sc-spy-navigation--sticked');
                    document.querySelector('#page-subnav-stick').style.marginTop = '0px';
                    showcar.spyNavigation({
                        stickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop > 10000000000,
                        unstickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop <= 10000000000
                    });
                } else {
                    showcar.spyNavigation({
                        stickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop > stickyYStartPosition,
                        unstickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop <= stickyYStartPosition
                    });
                }
            })
        } else {
            showcar.spyNavigation({
                stickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop > stickyYStartPosition,
                unstickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop <= stickyYStartPosition
            });
        }
    })(window.Zepto, window.showcar);
})
</script>
