export default () => {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.sc-search-tab'), (searchTab) => {
            searchTab.addEventListener('click', () => {
                const currentActiveTab = document.querySelector('.sc-search-tab--active');
                if (currentActiveTab) currentActiveTab.classList.remove('sc-search-tab--active');
                searchTab.classList.add('sc-search-tab--active');
            });
        });
    });
};
