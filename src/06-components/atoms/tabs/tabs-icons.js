export default () => {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('[data-tabs]'), (navPanel) => {
            const nav = navPanel.getAttribute('data-tabs');
            Array.prototype.forEach.call(document.querySelectorAll('[data-tabs=' + nav + '] .sc-tab--with-icon'), (tab) => {
                tab.addEventListener('click', () => {
                    const currentActiveTab = document.querySelector('[data-tabs=' + nav + '] .sc-tab--with-icon--active');
                    const sectionAttr = currentActiveTab.getAttribute('data-section');
                    const currentSection = document.querySelector('[data-tabs=' + nav + '] .sc-tabs__content[data-section=' + sectionAttr + ']');

                    if (currentActiveTab) currentActiveTab.classList.remove('sc-tab--with-icon--active');
                    if (currentSection) currentSection.classList.remove('sc-tabs__content--visible');

                    const sectionAttrNew = tab.getAttribute('data-section');
                    const sectionNew = document.querySelector('[data-tabs=' + nav + '] .sc-tabs__content[data-section=' + sectionAttrNew + ']');
                    if (sectionNew) sectionNew.classList.add('sc-tabs__content--visible');
                    tab.classList.add('sc-tab--with-icon--active');

                    // ARIA tabs
                });
            });
        });
    });
};
