const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    env: {
        LOGIN_EMAIL: "teste1.testes@gmail.com",
        LOGIN_PASSWORD: "121212",
        LOGIN_URL:
            "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account",
        LOGGED_URL:
            "http://www.automationpractice.pl/index.php?controller=my-account",
    },
});
