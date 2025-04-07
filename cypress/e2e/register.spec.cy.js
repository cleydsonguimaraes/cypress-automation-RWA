import loginPage from "../pages/loginPage.js";
import registerPage from "../pages/registerPage.js";

const LoginPage = new loginPage();
const RegisterPage = new registerPage();


describe("Register Test - RWA", () => {
    it("Register Success - Valid Data", () => {
        LoginPage.accessPage();
        RegisterPage.registerPage();
        RegisterPage.register(
            "Cleydson",
            "Guimarares",
            "Cleyds$0n",
            "test123"
        );
        

    });

    /*it("Register Failed - Invalid Username", () => {

    });

    it("Register Failed - Invalid Password", () => {

    });*/
});