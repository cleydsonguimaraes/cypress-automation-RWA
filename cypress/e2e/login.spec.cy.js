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

   /* it("Login Failed - Invalid Username", () => {

    });

    it("Login Failed - Invalid Password", () => {

    });
    */
});
