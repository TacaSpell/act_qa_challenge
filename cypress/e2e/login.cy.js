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
});
