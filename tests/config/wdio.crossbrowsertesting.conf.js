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
        browserName : "internet explorer" // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
    }, {
        name : 'webdriverio test chrome48',

        browser_api_name : 'Chrome48x64',
        os_api_name : 'Win7x64-C1',

        screen_resolution : '1024x768',
        record_video : "true",
        record_network : "true",

        browserName : "chrome" // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
    }],
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", the base url gets prepended.
    baseUrl: 'http://as24-showcar-ui.aws.autoscout24.com'
}
