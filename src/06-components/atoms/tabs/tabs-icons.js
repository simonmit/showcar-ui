export default () => {
    const findElement = (el) => {
        while (!el.classList.contains('sc-tab--with-icon')) {
            el = el.parentElement;
        }
        return el;
    };

    document.addEventListener('click', (e) => {
        if (e.target && e.target.matches && e.target.matches('.sc-tab--with-icon, .sc-tab--with-icon *')) {
            const tab = findElement(e.target);
            const tabContainer = tab.parentElement;
            const currentActiveTab = tabContainer.querySelector('.sc-tab--with-icon--active');
            const currentSection = tabContainer.parentElement.querySelector('.sc-tabs__content--visible');
            
            if (currentActiveTab) currentActiveTab.classList.remove('sc-tab--with-icon--active');
            if (currentSection) currentSection.classList.remove('sc-tabs__content--visible');
            tab.classList.add('sc-tab--with-icon--active');
            
            const sectionAttrNew = tab.getAttribute('data-section');
            const sectionNew = tabContainer.parentElement.querySelector('.sc-tabs__content[data-section=' + sectionAttrNew + ']');
            if (sectionNew) sectionNew.classList.add('sc-tabs__content--visible');
        }
    });
};
