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
});
