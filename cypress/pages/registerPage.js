class registerPage {
  selectorsList() {
    const selectors = {
      registerButton: "[data-test='signup']",
      firstNameField: "#firstName",
      lastNameField: "#lastName",
      userNameField: "#username",
      passwordField: "#password",
      confirmPasswordField: "#confirmPassword",
      signUpButton: "[data-test='signup-submit']",
      errorMessage: "[data-test='signup-error']",
    };
    return selectors;
  }
  registerPage() {
    cy.get(this.selectorsList().registerButton).click();
    cy.location("pathname").should("equal", "/signup");
    //cy.url().should("include", "/signup");
  }
  register(firstName, lastName, userName, password) {
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().userNameField).type(userName);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().confirmPasswordField).type(password);
    cy.get(this.selectorsList().signUpButton).click();
  }
}
export default registerPage;
