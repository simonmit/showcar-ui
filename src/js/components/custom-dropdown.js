let tagName = 'custom-dropdown';

try {
    document.registerElement(tagName, {
        prototype: Object.create(HTMLElement.prototype, {
            createdCallback: { value: createdCallback },
            attachedCallback: { value: attachedCallback }
        })
    });
} catch (e) {
    if (window && window.console) {
        window.console.warn('Failed to register CustomElement "' + tagName + '".', e);
    }
}

function createdCallback() {
    let el = $(this);
    let titleElement = el.find('p');
    let defaultTitle = titleElement.text();

    el.removeClass('sc-open');
    el.on('touchstart, mousedown', (e) => {
        e.stopPropagation();
    });

    if (null === el.attr('checkboxgroup')) {
        return;
    }

    // start
    if ("dropdowngroup" === el.attr('dropdowngroup')) {
        el.find('[type=hidden]').addClass('sc-input');
        let updateCaption = () => {
            let userChoice = el.find('[type=hidden]:selected');
            let texts = [];
            checkboxes.filter(":selected").forEach((element) => {
                texts.push(element.nextElementSibling.innerHTML);
            });

            let title = texts.join(', ') || defaultTitle;
            titleElement.html(title);
        };

        el.on('change', updateCaption);
        updateCaption();        
    }
    //end

    el.find('[type=checkbox]').addClass('sc-input');
    let updateCaption = () => {
        let checkboxes = el.find('[type=checkbox]:checked');
        let texts = [];
        checkboxes.filter(":checked").forEach((element) => {
            texts.push(element.nextElementSibling.innerHTML);
        });

        let title = texts.join(', ') || defaultTitle;
        titleElement.html(title);
    };

    el.on('change', updateCaption);
    updateCaption();
}

function attachedCallback() {
    this.querySelector('p').addEventListener('mousedown', () => {
        closeAllDropdowns(this);
        this.classList.toggle('sc-open');
    });

    attachEventListeners();
}

/**
 * @param {HTMLElement} exceptThisOne
 */
function closeAllDropdowns(exceptThisOne) {
    let allCds = document.querySelectorAll(tagName);
    for (let i = 0, l = allCds.length; i < l; i++) {
        if (allCds[i] !== exceptThisOne) {
            allCds[i].classList.remove('sc-open');
        }
    }
}

function attachEventListeners() {
    // this should only be done at most once
    // when the first of this element gets attached
    document.addEventListener('mousedown', closeAllDropdowns);
    attachEventListeners = () => {}; // so that we only attach at most once
}
