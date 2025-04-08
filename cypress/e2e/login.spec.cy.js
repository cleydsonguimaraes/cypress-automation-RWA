import userData from "../fixtures/userData.json";
import loginPage from "../pages/loginPage.js";

const LoginPage = new loginPage();

describe("Login Test - RWA", () => {
    it("Login Success - Valid Credentials", () => {
        LoginPage.accessPage();
        LoginPage.logIn(
            userData.loginSucces.username,
            userData.loginSucces.password);
    });

    it("Login Failed - Invalid Username", () => {
        LoginPage.accessPage();
        LoginPage.logIn(
            userData.loginUsernameFail.username,
            userData.loginUsernameFail.password);
        LoginPage.checkLoginInvalid();
    });

    it("Login Failed - Invalid Password", () => {
        LoginPage.accessPage();
        LoginPage.logIn(
            userData.loginPasswordFail.username,
            userData.loginPasswordFail.password);
        LoginPage.checkLoginInvalid();
    });
    
});
