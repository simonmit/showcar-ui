<h2>Custom dropdown default<span class="status refactor">Needs refactoring</span><span class="status js">JS</span></h2>

If you want to use it in a react (or preact) project you might need to use `shouldComponentUpdate` method to avoid unexpected state changes.<br />Just add it as a method of you class:

`shouldComponentUpdate() {
    return false;
}`

More info & examples here: https://preactjs.com/guide/external-dom-mutations