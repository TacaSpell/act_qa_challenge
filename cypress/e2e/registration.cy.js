import { faker } from "@faker-js/faker";

describe("Registration feature", () => {
    beforeEach(() => {
        cy.clearAllCookies();
    });
    describe("Empty email", { testIsolation: false }, () => {
        it("Given I am on the login page", () => {
            cy.visit(Cypress.env("LOGIN_URL"));
        });
        it('When the "Create an account" button is clicked', () => {
            cy.get("#SubmitCreate > span").click();
        });
        it('Then an error message is displayed: "Invalid email address"', () => {
            cy.contains("Invalid email address");
        });
    });
    describe("Invalid email", { testIsolation: false }, () => {
        it("Given I am on the login page", () => {
            cy.visit(Cypress.env("LOGIN_URL"));
        });
        it("When the Email address field is filled with an invalid email", () => {
            cy.get("#email_create").type("lorem ipsum");
        });
        it('And the "Create an account" button is clicked', () => {
            cy.get("#SubmitCreate > span").click();
        });
        it('Then an error message is displayed: "Invalid email address"', () => {
            cy.contains("Invalid email address");
        });
    });
    describe("Email already registered", { testIsolation: false }, () => {
        it("Given I am on the login page", () => {
            cy.visit(Cypress.env("LOGIN_URL"));
        });
        it("When the Email address field is filled with an existing email", () => {
            cy.get("#email_create").type(Cypress.env("LOGIN_EMAIL"));
        });
        it('And the "Create an account" button is clicked', () => {
            cy.get("#SubmitCreate > span").click();
        });
        it("Then an error message is displayed", () => {
            cy.contains(
                "An account using this email address has already been registered. Please enter a valid password or request a new one"
            );
        });
    });
    describe("Create account", { testIsolation: false }, () => {
        const email = faker.internet.email();

        it("Given I am on the login page", () => {
            cy.visit(Cypress.env("LOGIN_URL"));
        });
        it("When the Email address field is filled with a valid email", () => {
            cy.get("#email_create").type(email);
        });
        it('And the "Create an account" button is clicked', () => {
            cy.get("#SubmitCreate > span").click();
        });
        it("Then the additional data form is loaded", () => {
            cy.url().should("equal", Cypress.env("DATA_FORM_URL"));
        });
    });
    describe("Missing required fields", { testIsolation: false }, () => {
        it("Given I am on the additional data page", () => {
            const email = faker.internet.email();
            cy.startSignup(email);
        });
        it('When the "Register" button is clicked', () => {
            cy.get("#submitAccount > span").click();
        });
        it("Then an error message is displayed listing the required fields", () => {
            cy.get(".alert").should("exist");
        });
    });
    describe("Missing required fields", { testIsolation: false }, () => {
        it("Given I am on the additional data page", () => {
            const email = faker.internet.email();
            cy.startSignup(email);
        });
        it('When the "Register" button is clicked', () => {
            cy.get("#submitAccount > span").click();
        });
        it("Then an error message is displayed listing the required fields", () => {
            cy.get(".alert").should("exist");
        });
    });
    describe("Invalid name", { testIsolation: false }, () => {
        it("Given I am on the additional data page", () => {
            const email = faker.internet.email();
            cy.startSignup(email);
        });
        it("When the name field is filled with an invalid name", () => {
            cy.get("#customer_firstname").type("n1ne");
        });
        it('And the "Register" button is clicked', () => {
            cy.get("#submitAccount > span").click();
        });
        it("Then an error message is displayed", () => {
            cy.contains("firstname is invalid");
        });
    });
    describe("Invalid password", { testIsolation: false }, () => {
        it("Given I am on the additional data page", () => {
            const email = faker.internet.email();
            cy.startSignup(email);
        });
        it("When the password field is filled with an invalid password", () => {
            cy.get("#passwd").type("0ne");
        });
        it('And the "Register" button is clicked', () => {
            cy.get("#submitAccount > span").click();
        });
        it("Then an error message is displayed", () => {
            cy.contains("passwd is invalid");
        });
    });
    describe("Invalid password", { testIsolation: false }, () => {
        it("Given I am on the additional data page", () => {
            const email = faker.internet.email();
            cy.startSignup(email);
        });
        it("When all required fields are filled out correctly", () => {
            cy.get("#customer_firstname").type("Vinoto");
            cy.get("#customer_lastname").type("Hashnicius");
            cy.get("#passwd").type("F1v3s");
        });

        it('And the "Register" button is clicked', () => {
            cy.get("#submitAccount > span").click();
        });
        it("Then the user's logged-in area is loaded", () => {
            cy.url().should("equal", Cypress.env("LOGGED_URL"));
        });
        it("And a success message of registration is displayed", () => {
            cy.contains("Your account has been created");
        });
    });
});
