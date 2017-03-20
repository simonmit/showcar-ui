<h2>Spy Navigation <span class="status refactor">Needs explaination</span></h2>

<a name="section-1"></a>
<a name="section-2"></a>
<a name="section-3"></a>
<a name="section-4"></a>

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
