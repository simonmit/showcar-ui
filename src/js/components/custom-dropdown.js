var tagName = 'custom-dropdown';

module.exports = document.registerElement(tagName, {
    prototype: Object.create(HTMLElement.prototype, {
        createdCallback: { value: createdCallback },
        attachedCallback: { value: attachedCallback }
    })
});


function createdCallback() {
    var el = $(this);
    var titleElement = el.find('p');
    var defaultTitle = titleElement.text();

    el.removeClass('sc-open');
    el.on('touchstart, mousedown', function(e) {
        e.stopPropagation();
    });

    if (null === el.attr('checkboxgroup')) {
        return;
    }

    var checkboxes = el.find('[type=checkbox]').addClass('sc-input');
    var updateCaption = function () {
        var box;
        var checkboxes = el.find('[type=checkbox]:checked');
        var texts = [];
        checkboxes.filter(":checked").forEach(function (element) {
            texts.push(element.nextElementSibling.innerHTML);
        });

        var title = texts.join(', ') || defaultTitle;
        titleElement.html(title);
    };

    el.on('change', updateCaption);
    updateCaption();
}

function attachedCallback() {
    var el = this;

    el.querySelector('p').addEventListener('mousedown', function (e) {
        closeAllDropdowns(el);
        el.classList.toggle('sc-open');
    });

    attachEventListeners();
}

function closeAllDropdowns(exceptThisOne) {
    var allCds = document.querySelectorAll(tagName);
    for (var i = 0, l = allCds.length; i < l; i++) {
        if (allCds[i] !== exceptThisOne) {
            allCds[i].classList.remove('sc-open');
        }
    }
}

function attachEventListeners() {
    // this should only be done at most once
    // when the first of this element gets attached
    document.addEventListener('mousedown', closeAllDropdowns);
    attachEventListeners = function () {
    }; // so that we only attach at most once
}
