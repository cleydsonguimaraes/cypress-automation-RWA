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
      errorMessage: ".MuiTextField-root",
    };
    return selectors;
  }
  registerPage() {
    cy.get(this.selectorsList().registerButton).click();
    cy.location("pathname").should("equal", "/signup");
    //cy.url().should("include", "/signup");
  }
  register(firstName, lastName, userName, password,confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().userNameField).type(userName);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword);
  }
  clickRegister() {
    cy.get(this.selectorsList().signUpButton).click();
  }
  errorMessage(field, errorMessage) {
    cy.get(this.selectorsList().errorMessage).eq(field).contains(errorMessage);
  }
}
export default registerPage;
