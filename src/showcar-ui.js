// Todo: remove Zepto
if(!window.jQuery) window.$ = window.Zepto = require('zepto-browserify').$;

// Make sure these variables are initialized in case somebody uses them unintialized before they are loaded
window.ut = window.ut || [];
window.dataLayer = window.dataLayer || [];

let warn = (msg) => window.console && window.console.warn(msg);
let showcar = {};

// Dropdown
import dropdown from './06-components/atoms/custom-dropdown/custom-dropdown';
dropdown('custom-dropdown');

// Pager
import Pager from './06-components/organisms/pagination/pagination';
window.Pager = Pager;

// Spy-navigation
import spyNavigation from './06-components/organisms/spy-navigation/spy-navigation';
showcar.spyNavigation = spyNavigation;

// Sticky js
import sticky from './05-layout/sticky/sticky';
sticky();

// Rotating-arrow
import rotatingArrow from './06-components/atoms/rotating-arrow/rotating-arrow'; // Todo: Check usages and remove
rotatingArrow();

// Collapse
import collapse from './06-components/atoms/collapse/collapse';
collapse();

// stepper
import stepper from './06-components/atoms/stepper/stepper';
stepper();

// tooltip
import tooltip from './06-components/atoms/tooltip/tooltip';
tooltip();

// tooltip2
import tooltip2 from './06-components/atoms/tooltip-2/tooltip-2';
tooltip2('as24-tooltip');

// lightbox
import lightbox from './06-components/atoms/lightbox/lightbox';
lightbox('as24-lightbox');

// navigation
import navigation from './06-components/organisms/navigation/navigation';
navigation();

// notification
import notification from './06-components/molecules/notification/notification'; // TODO: question for the guild
// TODO do we still need it?
if (! window.notification) {
    window.notification = notification('as24-notification');
} else {
    warn('window.notification is already registered.');
}
// storage
window.Storage = require('showcar-storage');

//lazysizes
window.lazySizesConfig = { loadMode: 1, expFactor: 0, hFac:0 };
require('lazysizes');

window.showcar = window.showcar || showcar;

export default showcar;
