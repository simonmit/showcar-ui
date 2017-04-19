module.exports = function (frame, assert, browserWidth) {
    describe('Card group', function () {
        it('car element text is centered', function () {
            var cards = frame.getAll('#card-group .sc-card__image');
            var textModel = frame.getAll('#card-group .sc-card__label div:first-child');
            var textOffer = frame.getAll('#card-group .sc-card__label div:nth-child(2)');

            assert(cards.length() > 0, 'we have no cards on page');
            assert(textModel.length() > 0, 'we have no model texts on page');
            assert(textOffer.length() > 0, 'we have no offer texts on page');
            for (var i = 0; i < cards.length() - 1; i++) {
                textModel.at(i).assert({
                    center: cards.at(i).center,
                    top: cards.at(i).bottom.plus(16),
                });
                textOffer.at(i).assert({
                    center: cards.at(i).center,
                    top: textModel.at(i).bottom,
                });
            }
        });
        if (browserWidth < 640) {
            it('cars shown in two rows', function () {
                var cardList = frame.get('#card-group .sc-cards__list');
                var firstCard = frame.get('#card-group .sc-card:first-of-type');
                var secondCard = frame.get('#card-group .sc-card:nth-child(2)');
                var thirdCard = frame.get('#card-group .sc-card:nth-child(3)');
                var forthCard = frame.get('#card-group .sc-card:nth-child(4)');

                firstCard.assert({
                    top: cardList.top,
                    left: cardList.left
                });
                secondCard.assert({
                    top: cardList.top,
                    right: cardList.right,
                    left: firstCard.right
                });
                thirdCard.assert({
                    top: firstCard.bottom,
                    left: cardList.left
                });
                forthCard.assert({
                    top: secondCard.bottom,
                    right: cardList.right,
                    left: thirdCard.right
                });
            });
        } else if (640 <= browserWidth && browserWidth < 720) {
            it('3 cars are shown on top, 1 is on the bottom', function () {
                var cardList = frame.get('#card-group .sc-cards__list');
                var firstCard = frame.get('#card-group .sc-card:first-of-type');
                var secondCard = frame.get('#card-group .sc-card:nth-child(2)');
                var thirdCard = frame.get('#card-group .sc-card:nth-child(3)');
                var forthCard = frame.get('#card-group .sc-card:nth-child(4)');

                firstCard.assert({
                    top: cardList.top
                });
                secondCard.assert({
                    top: cardList.top,
                    left: firstCard.right,
                    right: thirdCard.left
                });
                thirdCard.assert({
                    top: cardList.top,
                    left: secondCard.right
                });
                forthCard.assert({
                    top: secondCard.bottom,
                    center: cardList.center
                });
            });
        } else if (720 <= browserWidth) {
            it('cars are shown in one row', function () {
                var cardList = frame.get('#card-group .sc-cards__list');
                var firstCard = frame.get('#card-group .sc-card:first-of-type');
                var secondCard = frame.get('#card-group .sc-card:nth-child(2)');
                var thirdCard = frame.get('#card-group .sc-card:nth-child(3)');
                var forthCard = frame.get('#card-group .sc-card:nth-child(4)');

                firstCard.assert({
                    top: cardList.top
                });
                secondCard.assert({
                    top: cardList.top,
                    left: firstCard.right,
                    right: thirdCard.left
                });
                thirdCard.assert({
                    top: cardList.top,
                    left: secondCard.right,
                    right: forthCard.left
                });
                forthCard.assert({
                    top: cardList.top
                });
            });
        }
    });
};
