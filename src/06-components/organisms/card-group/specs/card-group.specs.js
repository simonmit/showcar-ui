module.exports = function (frame, assert, browserWidth) {
    describe('Card group', function () {
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

            it('3 cars are shown on top, 3 cars arein the middle, 2 are on the bottom', function () {
                var cardList = frame.get('#card-group .sc-cards__list');
                var firstCard = frame.get('#card-group .sc-card:first-of-type');
                var thirdCard = frame.get('#card-group .sc-card:nth-child(3)');
                var forthCard = frame.get('#card-group .sc-card:nth-child(4)');
                var sixthCard = frame.get('#card-group .sc-card:nth-child(6)');
                var seventhCard = frame.get('#card-group .sc-card:nth-child(7)');
                var eighthCard = frame.get('#card-group .sc-card:nth-child(8)');

                firstCard.assert({
                    top: cardList.top,
                    left: cardList.left
                });
                thirdCard.assert({
                    top: cardList.top,
                    right: cardList.right
                });
                forthCard.assert({
                    top: firstCard.bottom,
                    left: cardList.left
                });
                sixthCard.assert({
                    top: thirdCard.bottom,
                    right: cardList.right
                });
                seventhCard.assert({
                    top: forthCard.bottom,
                    right: cardList.center
                });
                eighthCard.assert({
                    top: forthCard.bottom,
                    left: cardList.center
                });
            });
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
                var thirdCard = frame.get('#card-group .sc-card:nth-child(3)');
                var fifthCard = frame.get('#card-group .sc-card:nth-child(5)');
                var sixthCard = frame.get('#card-group .sc-card:nth-child(6)');
                var seventhCard = frame.get('#card-group .sc-card:nth-child(7)');
                var eighthCard = frame.get('#card-group .sc-card:nth-child(8)');

                firstCard.assert({
                    top: cardList.top,
                    left: cardList.left
                });
                thirdCard.assert({
                    top: cardList.top,
                    center: cardList.center
                });
                fifthCard.assert({
                    top: cardList.top,
                    right: cardList.right
                });
                sixthCard.assert({
                    top: firstCard.bottom
                });
                seventhCard.assert({
                    top: firstCard.bottom,
                    center: cardList.center
                });
                eighthCard.assert({
                    top: firstCard.bottom
                });
            });
        }
    });
};
