(function() {
    var stepperEl = document.querySelector(".sc-stepper-input");

    if (stepperEl) {
        var decrementEl = document.querySelector(".sc-stepper-button-decrement");
        var incrementEl = document.querySelector(".sc-stepper-button-increment");
        var minValue = parseInt(stepperEl.getAttribute('min'));
        var maxValue = parseInt(stepperEl.getAttribute('max'));

        // To make sure we can also calculate with the value the user typed in
        var getCurrentValue = function() {
            return stepperEl.value !== "" ? parseInt(stepperEl.value, 10) : 0;
        };

        var currentValue = getCurrentValue();

        var increment = function() {
            currentValue = getCurrentValue();

            if (currentValue < maxValue) {
                stepperEl.value = ++currentValue;
            }
        };

        var decrement = function(){
            currentValue = getCurrentValue();

            if (currentValue > minValue) {
                stepperEl.value = --currentValue;
            }
        };

        decrementEl.addEventListener("click", decrement);
        incrementEl.addEventListener("click", increment);
    }
}());