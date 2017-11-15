export default () => {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('[data-tabs-text]'), (tabContainer) => {
            const tabs = tabContainer.querySelectorAll('.sc-tab');
            Array.prototype.forEach.call(tabs, (tab) => {
                tab.addEventListener('click', (e) => {
                    const currentActiveTab = tabContainer.querySelector('.sc-tab--with-text--active');
                    const sectionAttr = currentActiveTab.getAttribute('data-section');
                    const currentSection = tabContainer.querySelector('.sc-tabs__content[data-section=' + sectionAttr + ']');

                    e.target.classList.add('sc-tab--with-text--active');
                    if (currentActiveTab) currentActiveTab.classList.remove('sc-tab--with-text--active');
                    if (currentSection) currentSection.classList.remove('sc-tabs__content--visible');

                    const sectionAttrNew = e.target.getAttribute('data-section');
                    const sectionNew = document.querySelector('.sc-tabs__content[data-section=' + sectionAttrNew + ']');
                    if (sectionNew) sectionNew.classList.add('sc-tabs__content--visible');
                });
            });
        });
    });
};
