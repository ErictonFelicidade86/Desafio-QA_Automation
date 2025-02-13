const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://demoqa.com/",
    chromeWebSecurity:false,
    screenshots: false,
    video: false,
    setupNodeEvents(on, config) {},
  },
});
