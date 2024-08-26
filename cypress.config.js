const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    LOGIN_EMAIL: 'teste1.testes@gmail.com',
    LOGIN_PASSWORD: '121212',
  },
});
