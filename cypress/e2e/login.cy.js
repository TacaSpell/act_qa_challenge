import { faker } from "@faker-js/faker";

describe("Login feature", () => {
    const LOGIN_URL =
        "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account";
    const LOGGED_URL =
        "http://www.automationpractice.pl/index.php?controller=my-account";
    beforeEach(() => {
        cy.clearAllCookies();
    });
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
        it("When the Email address field is filled with unregistered email", () => {
            cy.get("#email").type(email);
        });
        it("and the Password field is filled", () => {
            cy.get("#passwd").type(password);
        });
        it('And the "Sign in" button is clicked', () => {
            cy.get("#SubmitLogin > span").click();
        });
        it('Then an error message is displayed: "Authentication failed"', () => {
            cy.contains("Authentication failed");
        });
    });
    describe("Successful login", { testIsolation: false }, () => {
        it("Given I am on the login page", () => {
            cy.visit(LOGIN_URL);
        });
        it("When the Email address field is filled correctly", () => {
            cy.get("#email").type(Cypress.env("LOGIN_EMAIL"));
        });
        it("and the Password field is filled correctly", () => {
            cy.get("#passwd").type(Cypress.env("LOGIN_PASSWORD"));
        });
        it('And the "Sign in" button is clicked', () => {
            cy.get("#SubmitLogin > span").click();
        });
        it("Then the user's logged-in area is loaded", () => {
            cy.url().should("include", "index.php?controller=my-account");
        });
    });
    describe(
        "Access logged-in area by URL without authentication",
        { testIsolation: false },
        () => {
            it("Given I am an unauthenticated user", () => {
                cy.visit(LOGIN_URL);
            });
            it("When accessing the logged-in area by URL", () => {
                cy.visit(LOGGED_URL);
            });
            it("Then I am redirected to login page", () => {
                cy.url().should("equal", LOGIN_URL);
            });
        }
    );
});
