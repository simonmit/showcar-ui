export default () => {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.sc-tab--with-icon'), (tab) => {
            tab.addEventListener('click', () => {
                const currentActiveTab = document.querySelector('.sc-tab--with-icon--active');
                const sectionAttr = currentActiveTab.getAttribute('data-section');
                const currentSection = document.querySelector(".sc-tab-content[data-section='" + sectionAttr + "']"); // eslint-disable-line

                if (currentActiveTab) currentActiveTab.classList.remove('sc-tab--with-icon--active');
                if (currentSection) currentSection.classList.remove('sc-tab-content--visible');

                const sectionAttrNew = tab.getAttribute('data-section');
                const sectionNew = document.querySelector(".sc-tab-content[data-section='" + sectionAttrNew + "']"); // eslint-disable-line
                if (sectionNew) sectionNew.classList.add('sc-tab-content--visible');
                tab.classList.add('sc-tab--with-icon--active');
            });
        });
    });
};
