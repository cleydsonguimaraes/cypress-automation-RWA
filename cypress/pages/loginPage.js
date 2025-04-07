class loginPage {
  selectorList() {
    const selectors = {
      accessPage: "body",
      usernameField: "#username",
      passwordField: "#password",
      loginButton: "[data-test='signin-submit']",
      errorMessage: "[data-test='signin-error']",
    };
    return selectors;
  }
  accessPage() {
    cy.visit("/signin");
    cy.get(this.selectorList().accessPage).click();
  }
  logIn(username, password) {
    cy.get(this.selectorList().usernameField).type(username);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().loginButton).click();
  }
  checkLoginInvalid() {
    cy.get(this.selectorList().errorMessage).contains("Username or password is invalid");
  }
}
export default loginPage;
