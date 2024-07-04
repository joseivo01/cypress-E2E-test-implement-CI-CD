const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    downloadsFolder: 'cypress/downloads',
    defaultCommandTimeout:	15000,
    baseUrl: 'https://teste-qa-devio.vercel.app',
    supportFile:	'cypress/support/commands.js',
  },
});
