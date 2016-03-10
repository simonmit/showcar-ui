exports.config = {
    //
    // =====================
    // Server Configurations
    // =====================
    // Host address of the running Selenium server. This information is usually obsolete as
    // WebdriverIO automatically connects to localhost. Also if you are using one of the
    // supported cloud services like Sauce Labs, Browserstack or Testing Bot you also don't
    // need to define host and port information because WebdriverIO can figure that our
    // according to your user and key information. However if you are using a private Selenium
    // backend you should define the host address, port, and path here.
    //
    host: 'hub.crossbrowsertesting.com',
    port: 80,
    path: '/wd/hub',

    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack and Testing Bot (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    user: "mtrieba.ext@autoscout24.com",
    key: "u32928d5c6d81f47",

    //
    // If you are using Sauce Labs, WebdriverIO takes care to update the job information
    // once the test is done. This option is set to `true` by default.
    //
    updateJob: true,

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './tests/specs/**/*.spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        './tests/specs/test.spec.js'
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilties at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude option in
    // order to group specific specs to a specific capability.
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        name : 'webdriverio test ie11',

        browser_api_name : 'IE11',
        os_api_name : 'Win7x64-Base',
        screen_resolution : '1024x768',
        record_video : "true",
        record_network : "true",
        browserName : "internet explorer", // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
    }, {
        name : 'webdriverio test chrome48',

        browser_api_name : 'Chrome48x64',
        os_api_name : 'Win7x64-C1',

        screen_resolution : '1024x768',
        record_video : "true",
        record_network : "true",

        browserName : "chrome", // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './tests/errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", the base url gets prepended.
    baseUrl: 'http://as24-showcar-ui.aws.autoscout24.com',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 100000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as property. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specfic job you don't want to take care of. They enhance
    // your test setup with almost no self effort. Unlike plugins they don't add new
    // commands but hook themself up into the test process.
    // services: [],//
    // Framework you want to run your specs with.
    // The following are supported: mocha, jasmine and cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The following are supported: dot (default), spec and xunit
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['dot'],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
    ui: 'bdd'
},
//
// =====
// Hooks
// =====
// WedriverIO provides a several hooks you can use to intefere the test process in order to enhance
// it and build services around it. You can either apply a single function to it or an array of
// methods. If one of them returns with a promise, WebdriverIO will wait until that promise got
// resolved to continue.
//
// Gets executed once before all workers get launched.
// onPrepare: function (config, capabilities) {
// },
//
// Gets executed before test execution begins. At this point you can access to all global
// variables like `browser`. It is the perfect place to define custom commands.
before: function (capabilties, specs) {
    console.log('global before');

    var chai = require('chai');
    //var chaiAsPromised = require('chai-as-promised');

    chai.Should();
    //chai.use(chaiAsPromised);
    //chaiAsPromised.transferPromiseness = client.transferPromiseness;
},
//
// Hook that gets executed before the suite starts
// beforeSuite: function (suite) {
// },
//
// Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
// beforeEach in Mocha)
// beforeHook: function () {
// },
//
// Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
// afterEach in Mocha)
// afterHook: function () {
// },
//
// Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
// beforeTest: function (test) {
// },
//
// Runs before a WebdriverIO command gets executed.
// beforeCommand: function (commandName, args) {
// },
//
// Runs after a WebdriverIO command gets executed
// afterCommand: function (commandName, args, result, error) {
// },
//
// Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
// afterTest: function (test) {
// },
//
// Hook that gets executed after the suite has ended
// afterSuite: function (suite) {
// },
//
// Gets executed after all tests are done. You still have access to all global variables from
// the test.
// after: function (capabilties, specs) {
// },
//
// Gets executed after all workers got shut down and the process is about to exit. It is not
// possible to defer the end of the process using a promise.
// onComplete: function(exitCode) {
// }
}
