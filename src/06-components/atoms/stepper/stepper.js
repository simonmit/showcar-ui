export default () => {
    document.addEventListener('click', (e) => {
        if (e.target && e.target.matches && e.target.matches('.sc-stepper-button-decrement, .sc-stepper-button-increment')) {
            const stepperContainer = e.target.parentElement;
            const stepperEl = stepperContainer.querySelector('.sc-stepper-input');
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

            if (e.target.classList.contains('sc-stepper-button-decrement')) decrement();
            if (e.target.classList.contains('sc-stepper-button-increment')) increment();
        }
    });
};
