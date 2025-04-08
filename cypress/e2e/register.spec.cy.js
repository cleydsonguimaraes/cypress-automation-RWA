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
        "test123",
        "test123");
    RegisterPage.clickRegister();
  });

  it("Register Failed - Firstname Filled in", () => {
    LoginPage.accessPage();
    RegisterPage.registerPage();
    RegisterPage.register(
        "", 
        "Guimarares", 
        "Cleyds$0n", 
        "test123",
        "test123");
    RegisterPage.errorMessage(0, "First Name is required");
  });

  it("Register Failed - Lastname Not Filled in", () => {
    LoginPage.accessPage();
    RegisterPage.registerPage();
    RegisterPage.register(
        "Cleydson", 
        "", 
        "Cleyds$0n", 
        "test123",
        "test123");
    RegisterPage.errorMessage(1, "Last Name is required");
  });

  it("Register Failed - Username Not Filled in", () => {
    LoginPage.accessPage();
    RegisterPage.registerPage();
    RegisterPage.register(
        "Cleydson", 
        "Guimarares", 
        "", 
        "test123",
        "testt123");
    RegisterPage.errorMessage(2, "Username is required");
  });

  it("Register Failed - Password Not Filled in", () => {
    LoginPage.accessPage();
    RegisterPage.registerPage();
    RegisterPage.register(
        "Cleydson", 
        "Guimarares", 
        "Cleyds$0n", 
        "",
        "");
    RegisterPage.errorMessage(3, "Enter your password");
  });

  it("Register Failed - Password Invaled", () => {
    LoginPage.accessPage();
    RegisterPage.registerPage();
    RegisterPage.register(
        "Cleydson", 
        "Guimarares", 
        "Cleyds$0n", 
        "tes",
        "tes");
    RegisterPage.errorMessage(3, "Password must contain at least 4 characters");
  });

  it("Register Failed - Password does not match", () => {
    LoginPage.accessPage();
    RegisterPage.registerPage();
    RegisterPage.register(
        "Cleydson", 
        "Guimarares", 
        "", 
        "test123",
        "testt123");
    RegisterPage.errorMessage(4, "Password does not match");

  });
});
