export default () => {
    document.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('sc-tab') && e.target.hasAttribute('data-section')) {
            const tabContainer = e.target.parentElement;
            const currentActiveTab = tabContainer.querySelector('.sc-tab--with-text--active');
            const sectionAttr = currentActiveTab.getAttribute('data-section');
            const currentSection = tabContainer.querySelector('.sc-tabs__content[data-section=' + sectionAttr + ']');

            if (currentActiveTab) currentActiveTab.classList.remove('sc-tab--with-text--active');
            if (currentSection) currentSection.classList.remove('sc-tabs__content--visible');
            e.target.classList.add('sc-tab--with-text--active');

            const sectionAttrNew = e.target.getAttribute('data-section');
            const sectionNew = tabContainer.querySelector('.sc-tabs__content[data-section=' + sectionAttrNew + ']');
            if (sectionNew) sectionNew.classList.add('sc-tabs__content--visible');
        }
    });
};
