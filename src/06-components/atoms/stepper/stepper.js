export default () => {
    // window.addEventListener('DOMContentLoaded', function() {
    //     Array.prototype.forEach.call(document.querySelectorAll('.sc-stepper'), (stepperContainer) => {
    //         const stepperEl = stepperContainer.querySelector('.sc-stepper-input');
    //         const decrementEl = stepperContainer.querySelector('.sc-stepper-button-decrement');
    //         const incrementEl = stepperContainer.querySelector('.sc-stepper-button-increment');
    //         const minValue = parseInt(stepperEl.getAttribute('min')) || 0;
    //         const maxValue = parseInt(stepperEl.getAttribute('max')) || 100;

    //         // To make sure we can also calculate with the value the user typed in
    //         const getCurrentValue = () => {
    //             return stepperEl.value !== '' ? parseInt(stepperEl.value, 10) : 0;
    //         };

    //         var currentValue = getCurrentValue();

    //         const increment = () => {
    //             currentValue = getCurrentValue();

    //             if (currentValue < maxValue) {
    //                 stepperEl.value = ++currentValue;
    //             }
    //         };

    //         const decrement = () => {
    //             currentValue = getCurrentValue();

    //             if (currentValue > minValue) {
    //                 stepperEl.value = --currentValue;
    //             }
    //         };

    //         decrementEl.addEventListener('click', decrement);
    //         incrementEl.addEventListener('click', increment);
    //     });
    // });

    document.addEventListener('click', (e) => {
        if (e.target && e.target.matches && e.target.matches('.sc-stepper')) {
            const stepperContainer = e.target;
            const stepperEl = stepperContainer.querySelector('.sc-stepper-input');
            const decrementEl = stepperContainer.querySelector('.sc-stepper-button-decrement');
            const incrementEl = stepperContainer.querySelector('.sc-stepper-button-increment');
            const minValue = parseInt(stepperEl.getAttribute('min')) || 0;
            const maxValue = parseInt(stepperEl.getAttribute('max')) || 100;

            // To make sure we can also calculate with the value the user typed in
            const getCurrentValue = () => {
                return stepperEl.value !== '' ? parseInt(stepperEl.value, 10) : 0;
            };

            var currentValue = getCurrentValue();

            const increment = () => {
                currentValue = getCurrentValue();

                if (currentValue < maxValue) {
                    stepperEl.value = ++currentValue;
                }
            };

            const decrement = () => {
                currentValue = getCurrentValue();

                if (currentValue > minValue) {
                    stepperEl.value = --currentValue;
                }
            };

            decrementEl.addEventListener('click', decrement);
            incrementEl.addEventListener('click', increment);
        }
    });
};
