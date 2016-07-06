module.exports = function(casper, scenario, vp) {

  function grayElementOut(selector) {
    var el = document.querySelector(selector);
    el.style.background = 'gray';
  }

  casper.waitForSelector('#brand-box-container', function() {
    casper.evaluate(grayElementOut, '#brand-box-container');
  });
};
