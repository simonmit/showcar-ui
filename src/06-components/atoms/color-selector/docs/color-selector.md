<h2>Color selector radio<span class="status refactor">Needs refactoring</span></h2>

We created a special type of radio buttons and checkboxes for you to easily implement a color selection. In this case you have to write a little custom scss to define the background color of the elements. You can also choose the color of the checkmark. Therefor you have to use the `color-selector-color` mixin which takes the background color as first argument and the checkmark color as a second one. Please make sure you provided the second argument only as hex code.

### additional scss

<pre>
    @import "path/to/mixins/color-selector";
    .sc-color-selector {
        input.sc-input {
            &.red {
                @include color-selector-color(#ff0000, #fff);
            }
            -- gradient support --
            &.gold {
                @include color-selector-color(linear-gradient(brown, yellow, brown) gold);
            }
        }
    }
</pre>
