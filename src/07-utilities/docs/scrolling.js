// In case you want to trigger the smooth scrolling via JS
import { smoothScroll } from '07-utilities/scroll.js';

const target = document.querySelector('#target');
const duration = 300 //default

// Default call
smoothScroll(target, duration);

// Or add a callback for additional handling (like in spy navigation)
smoothScroll(target, duration, () => {
    // Your OPTIONAL callback code here
});
