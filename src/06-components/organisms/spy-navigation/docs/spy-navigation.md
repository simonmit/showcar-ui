<h2>Spy Navigation <span class="status refactor">Needs explaination</span></h2>

<script>

window.onload = function() {
  (function ($, showcar) {
    const stickyYStartPosition = $('.sc-spy-navigation').offset().top;

    showcar.spyNavigation({
      stickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop > stickyYStartPosition,
      unstickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop <= stickyYStartPosition
    });
  })(window.Zepto, window.showcar);
}

</script>
