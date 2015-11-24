var tagName = 'custom-dropdown';

module.exports = document.registerElement(tagName, {
    prototype: Object.create(HTMLElement.prototype, {
        createdCallback: { value: createdCallback },
        attachedCallback: { value: attachedCallback }
    })
});


function createdCallback() {
    this.classList.remove('open');

    this.addEventListener('touchstart', function (e) {
        e.stopPropagation();
    });
    this.addEventListener('mousedown', function (e) {
        e.stopPropagation();
    });

    if (this.hasAttribute('checkboxgroup')) {
        var el = this;
        var titleElement = el.querySelector('p');
        var defaultTitle = titleElement.textContent;
        var updateCaption = function () {
            var checkboxes = el.querySelectorAll('[type=checkbox]:checked');
            var texts = [];
            for (var i = 0, l = checkboxes.length; i < l; i++) {
                texts.push(checkboxes[i].nextElementSibling.textContent);
            }

            var title = texts.join(', ') || defaultTitle;
            titleElement.textContent = title;
        };

        el.addEventListener('change', updateCaption);

        updateCaption();
    }
}

function attachedCallback() {
    var el = this;

    el.querySelector('p').addEventListener('mousedown', function (e) {
        closeAllDropdowns(el);
        el.classList.toggle('open');
    });

    attachEventListeners();
}

function closeAllDropdowns(exceptThisOne) {
    var allCds = document.querySelectorAll(tagName);
    for (var i = 0, l = allCds.length; i < l; i++) {
        if (allCds[i] !== exceptThisOne) {
            allCds[i].classList.remove('open');
        }
    }
}

function attachEventListeners() {
    // this should only be done at most once
    // when the first of this element gets attached
    document.addEventListener('touchstart', closeAllDropdowns);
    document.addEventListener('mousedown', closeAllDropdowns);
    attachEventListeners = function () {
    }; // so that we only attach at most once
}
