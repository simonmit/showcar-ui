<h2>Spy Navigation <span class="status refactor">Needs explaination</span></h2>

<script>
document.addEventListener('DOMContentLoaded', function() {
  (function ($, showcar) {
    const stickyYStartPosition = $('.sc-spy-navigation').offset().top + 280;

    showcar.spyNavigation({
      stickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop > stickyYStartPosition,
      unstickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop <= stickyYStartPosition
    });
  })(window.Zepto, window.showcar);
})
</script>
