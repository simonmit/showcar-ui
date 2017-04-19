module.exports = function (frame, assert, browserWidth, helper) {
    describe('Collapse', function () {
        it('Toggle more-less', function () {
            var trigger = frame.getAll('#collapse-more-less .sc-collapse-target.in').at(0).toDomElement();
            helper.click(trigger);
            var content = frame.get('#collapse-more-less div.sc-collapse-target.in').toDomElement();
            assert.include(content.innerText, 'Lorem ipsum dolor sit amet', 'contains')
        });

         it('Toggle toggle', function () {
             var trigger = frame.getAll('[data-toggle="sc-collapse"]').at(0).toDomElement();
             helper.click(trigger);
             var content = frame.get('#collapse').toDomElement();
             assert.include(content.innerText, 'Lorem ipsum dolor sit amet', 'contains')
         });
    });
};
