module.exports = function (frame, assert, browserWidth, helper) {
    describe('Card group {LAYOUT}', function () {
        if (browserWidth < 640) {
            it('car element text is centered', function () {
                var cards = frame.getAll('#card-group .sc-card__image');
                var textModel = frame.getAll('#card-group .sc-card__label div:first-child');
                var textOffer = frame.getAll('#card-group .sc-card__label div:nth-child(2)');

                assert(cards.length() > 0, 'we have no cards on page');
                assert(textModel.length() > 0, 'we have no model texts on page');
                assert(textOffer.length() > 0, 'we have no offer texts on page');
                for (var i = 0; i < 3; i++) { // we only have 4 shown
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

            it('more link is shown', function () {
                var cardList = frame.get('#card-group .sc-cards__list');
                var link = frame.get('#card-group .sc-cards__show');
                link.assert({
                    rendered: true,
                    top: cardList.bottom.plus(28)
                })
            });

            it('only 4 first cars are shown', function () {
                var cardList = frame.get('#card-group .sc-cards__list');
                var firstCard = frame.get('#card-group .sc-card:first-of-type');
                var secondCard = frame.get('#card-group .sc-card:nth-child(2)');
                var thirdCard = frame.get('#card-group .sc-card:nth-child(3)');
                var forthCard = frame.get('#card-group .sc-card:nth-child(4)');
                var fifthCard = frame.get('#card-group .sc-card:nth-child(5)');

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
                fifthCard.assert({
                    rendered: false
                });
            });
        } else if (640 <= browserWidth && browserWidth < 720) {
            // we don't test such viewport
        } else if (720 <= browserWidth) {
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

            it('more link is hidden', function () {
                var link = frame.get('#card-group .sc-cards__show');
                link.assert({
                    rendered: false
                })
            });

            it('cars are shown in two rows', function () {
                var cardList = frame.get('#card-group .sc-cards__list');
                var firstCard = frame.get('#card-group .sc-card:first-of-type');
                var eighthCard = frame.get('#card-group .sc-card:nth-child(8)');

                firstCard.assert({
                    top: cardList.top,
                    left: cardList.left
                });
                eighthCard.assert({
                    top: firstCard.bottom
                });
            });
        }
    });

    describe('Card group {INTERACTION}', function () {
        if (browserWidth < 640) {

            beforeEach(function () {
                link = frame.get('#card-group .sc-cards__show').toDomElement();
            })

            afterEach(function (done) {
                helper.reload(frame, done)
            })

            it('shows hidden cards on click', function () {
                helper.click(link);
                var cardList = frame.get('#card-group .sc-cards__list');
                var forthCard = frame.get('#card-group .sc-card:nth-child(4)');
                var fifthCard = frame.get('#card-group .sc-card:nth-child(5)');
                var sixthCard = frame.get('#card-group .sc-card:nth-child(6)');

                fifthCard.assert({
                    rendered: true,
                    top: forthCard.bottom,
                    left: cardList.left
                });
                sixthCard.assert({
                    rendered: true,
                    top: forthCard.bottom,
                    right: cardList.right
                })
            });
        }
    });
};
