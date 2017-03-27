<h2>How To</h2>

#### How to include:
You can either include showcar-ui as a fragment or directly include the JS, CSS and inline HTML on your page. The library provides some HTML content that needs to be inlined on your page. Use the index.html in the dist folder as a template in order to include the inline HTML, CSS and JS on your page.

	<link rel="stylesheet" href="@@ASSET_PATH/showcar-ui.css">
	<script src="@@ASSET_PATH/showcar-ui.js"></script>
Make sure to replace the @@ASSET_PATH string with the path to the JS/CSS file.

#### How to run locally:
Download
```bash
git clone git@github.com:AutoScout24/showcar-ui.git
```

Setup  
```bash
brew install node # install node if you didn't do it before
brew install yarn # we use yarn instead of npm to manage node package dependencies
yarn global add gulp # install gulp globally
yarn install
```

Build and run
```bash
gulp build; gulp docs:generate; gulp docs:serve
```
