const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://demoqa.com/",
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--load-extension=/caminho/para/ublock-origin');
        }
        return launchOptions;
      });
    },
  },
});
