let tagName = 'as24-lightbox';

try {
    document.registerElement(tagName, {
        prototype: Object.create(HTMLElement.prototype, {
            createdCallback: { value: createdCallback }
        })
    });
} catch (e) {
    if (window && window.console) {
        window.console.warn('Failed to register CustomElement "' + tagName + '".', e);
    }
}

function createdCallback() {
    this.classList.add('sc-hidden');
}

const clickHandler = e => {
    const openTrigger = e.target.closest('.sc-lightbox-trigger');
    const closeTrigger = e.target.closest('.sc-lightbox-close') || !e.target.closest('.sc-lightbox');
    if (!openTrigger && !closeTrigger) { return; }
    if (openTrigger) {
        show(openTrigger);
    } else {
        hide();
    }
};

const touchHandler = e => {
    const closeTrigger = e.target.closest('.sc-lightbox-close') || !e.target.closest('.sc-lightbox');
    if (!closeTrigger) { return; }
    hide();
};

document.body.addEventListener('touchstart', touchHandler);
document.body.addEventListener('click', clickHandler);

document.addEventListener('keydown', e => {
    if (e.keyCode == 27) {
        hide();
    }
});

const show = (lightboxTrigger) => {
    const dataId = lightboxTrigger.getAttribute('data-id');
    const overlay = document.getElementById(dataId);
    const container = overlay.firstElementChild;
    overlay.classList.remove('sc-hidden');
    overlay.classList.add('sc-lightbox-overlay');

    document.body.insertBefore(overlay, document.body.firstChild);

    container.classList.add('sc-lightbox');
    container.classList.remove('sc-hidden');
};

const hide = () => {
    [...document.querySelectorAll('.sc-lightbox-overlay')].forEach(el => {
        el.classList.add('sc-hidden');
    });
};
