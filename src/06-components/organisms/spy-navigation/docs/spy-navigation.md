<h2>Spy Navigation <span class="status refactor">Needs refactoring</span><span class="status js">JS</span></h2> Make sure you always set the target for each navigation link by providing the data-href attribute as shown in the code example below. The target element itself needs to be an anchor tag with the `id` set to the value that you set in the data-href attribute.
The anchor tag defines the start of the section you want to jump to or select when scrolling there.

Important note: old links with `name` attribute are still valid, but we suggest you to use `id` instead as a HTML5 compatible.


<script>
  document.addEventListener('DOMContentLoaded', function() {

    function offset(el) {
      var rect = el.getBoundingClientRect();
      var posTop = rect.top + (document.body.scrollTop || document.documentElement.scrollTop);
      return {
        top: posTop,
        bottom: posTop + rect.height
      };
    }

    var subnav = document.querySelector('#page-subnav-stick');
    var subnavOffsetTop;
    var lastElement = document.querySelector('#spy-navigation #section-5');
    var lastElementOfsetBottom;


    window.showcar.spyNavigation({
      stickPosFn: function(scrollTop, stickToElem) {
        containerOffsetTop = offset(subnav).top;
        lastElementOfsetBottom = offset(lastElement).bottom +150;

        return scrollTop > containerOffsetTop && scrollTop < lastElementOfsetBottom;
      },

      unstickPosFn: function(scrollTop, stickToElem, componentElem) {
        containerOffsetTop = offset(subnav).top;
        lastElementOfsetBottom = offset(lastElement).bottom +150;

        return scrollTop < containerOffsetTop || scrollTop > lastElementOfsetBottom;

      }
    });
  })
</script>
