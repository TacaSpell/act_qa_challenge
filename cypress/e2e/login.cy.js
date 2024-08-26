import { faker } from "@faker-js/faker";

describe("Login feature", () => {
    const LOGIN_URL =
        "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account";
    describe("Empty email", { testIsolation: false }, () => {
        it("Given I am on the login page", () => {
            cy.visit(LOGIN_URL);
        });
        it('When the "Sign in" button is clicked', () => {
            cy.get("#SubmitLogin > span").click();
        });
        it('Then an error message is displayed: "An email address required"', () => {
            cy.contains("An email address required");
        });
    });
    describe("Invalid email", { testIsolation: false }, () => {
        it("Given I am on the login page", () => {
            cy.visit(LOGIN_URL);
        });
        it("When the Email address field is filled with an invalid email", () => {
            cy.get("#email").type("lorem ipsum");
        });
        it('And the "Sign in" button is clicked', () => {
            cy.get("#SubmitLogin > span").click();
        });
        it('Then an error message is displayed: "Invalid email address"', () => {
            cy.contains("Invalid email address");
        });
    });
    describe("Authentication failure", { testIsolation: false }, () => {
        const email = faker.internet.email();
        const password = faker.internet.password();
        it("Given I am on the login page", () => {
            cy.visit(LOGIN_URL);
        });
        it("When the Email address field is filled correctly", () => {
            cy.get("#email").type(email);
        });
        it("and the Password field is filled correctly", () => {
            cy.get("#passwd").type(password);
        });
        it('And the "Sign in" button is clicked', () => {
            cy.get("#SubmitLogin > span").click();
        });
        it('Then an error message is displayed: "Authentication failed"', () => {
            cy.contains("Authentication failed");
        });
    });
});
