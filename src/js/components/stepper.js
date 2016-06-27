(function() {
    Array.prototype.forEach.call(document.querySelectorAll('.sc-stepper'), (stepperContainer) => {
        const stepperEl = stepperContainer.querySelector('.sc-stepper-input');
        const decrementEl = stepperContainer.querySelector(".sc-stepper-button-decrement");
        const incrementEl = stepperContainer.querySelector(".sc-stepper-button-increment");
        const minValue = parseInt(stepperEl.getAttribute('min'));
        const maxValue = parseInt(stepperEl.getAttribute('max'));

        // To make sure we can also calculate with the value the user typed in
        const getCurrentValue = _ => {
            return stepperEl.value !== "" ? parseInt(stepperEl.value, 10) : 0;
        };

        var currentValue = getCurrentValue();

        const increment = _ => {
            currentValue = getCurrentValue();

            if (currentValue < maxValue) {
                stepperEl.value = ++currentValue;
            }
        };

        const decrement = _ => {
            currentValue = getCurrentValue();

            if (currentValue > minValue) {
                stepperEl.value = --currentValue;
            }
        };

        decrementEl.addEventListener("click", decrement);
        incrementEl.addEventListener("click", increment);
    });
}());