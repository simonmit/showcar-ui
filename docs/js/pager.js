$(function(){
    var pages = $('.sc-pagination li').not('.next-page').find('a');

    pages.on('click', function(e) {
        pages.removeClass('active');
        $(e.target).addClass('active');
    });
});
