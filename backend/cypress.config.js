const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://demoqa.com",
    baseNameUrl: 'https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01',
    screenshots: false,
    video: false,
    setupNodeEvents(on, config) {},
  },
});
