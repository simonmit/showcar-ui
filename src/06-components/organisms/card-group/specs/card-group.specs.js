module.exports = (frame, assert, browserWidth, helper) => {
    describe('Card group {LAYOUT}', () => {
        let cards;
        let textModel;
        let textOffer;
        let cardList;
        let firstCard;
        let eighthCard;
        let link;

        beforeEach(() => {
            cards = frame.getAll('#card-group .sc-card__image');
            textModel = frame.getAll('#card-group .sc-card__label div:first-child');
            textOffer = frame.getAll('#card-group .sc-card__label div:nth-child(2)');
            cardList = frame.get('#card-group .sc-cards__list');
            firstCard = frame.get('#card-group .sc-card:first-of-type');
            eighthCard = frame.get('#card-group .sc-card:nth-child(8)');
            link = frame.get('#card-group .sc-cards__show');
        });

        if (browserWidth < 640) {
            it('car element text is centered', () => {
                assert(cards.length() > 0, 'we have no cards on page');
                assert(textModel.length() > 0, 'we have no model texts on page');
                assert(textOffer.length() > 0, 'we have no offer texts on page');

                for (var i = 0; i < 3; i ++) { // we only have 4 shown
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

            it('more link is shown', () => {
                link.assert({
                    rendered: true,
                    top: cardList.bottom.plus(28)
                })
            });

            it('only 4 first cars are shown', () => {
                const secondCard = frame.get('#card-group .sc-card:nth-child(2)');
                const thirdCard = frame.get('#card-group .sc-card:nth-child(3)');
                const forthCard = frame.get('#card-group .sc-card:nth-child(4)');
                const fifthCard = frame.get('#card-group .sc-card:nth-child(5)');

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

        } else if (720 <= browserWidth) {
            it('car element text is centered', () => {
                assert(cards.length() > 0, 'we have no cards on page');
                assert(textModel.length() > 0, 'we have no model texts on page');
                assert(textOffer.length() > 0, 'we have no offer texts on page');

                for (var i = 0; i < cards.length() - 1; i ++) {
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

            it('more link is hidden', () => {
                link.assert({
                    rendered: false
                })
            });

            it('cars are shown in two rows', () => {
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

    describe('Card group {INTERACTION}', () => {
        if (browserWidth < 640) {
            afterEach(done => {
                helper.reload(frame, done)
            })

            it('shows hidden cards on click', () => {
                const link = frame.get('#card-group .sc-cards__show').toDomElement();
                helper.click(link);
                const cardList = frame.get('#card-group .sc-cards__list');
                const forthCard = frame.get('#card-group .sc-card:nth-child(4)');
                const fifthCard = frame.get('#card-group .sc-card:nth-child(5)');
                const sixthCard = frame.get('#card-group .sc-card:nth-child(6)');

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
