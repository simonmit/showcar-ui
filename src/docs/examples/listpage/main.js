(function (document) {

    var render = function(templateName, contextArray) {
        var html = contextArray.reduce(function(result, element) {
            return result + ich[templateName](element)[0].outerHTML
        }, "");
        return html;
    };

    var takeItems = function(arr, num) {
        var result = [];
        while (--num > 0) result.push(arr[num % arr.length]);
        return result;
    };

    document.addEventListener('DOMContentLoaded', function () {
        var list = document.querySelector("ul#list");
        var context = takeItems(showcarDemoData.classifieds, 9);
        list.innerHTML = render("classified", context);
    });

})(document);
