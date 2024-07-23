import loginPage from "./loginPage";
import mainPage from "./mainPage";

export class Login {
Login(){

    const mainPageObj = new mainPage();
    const loginpageObj = new loginPage();
 
    cy.visit('/');
    mainPageObj.hotFeaturClose();
    mainPageObj.clickEmailLogin();
    cy.url().should('include', 'en/login');
    loginpageObj.typeEmail();
    loginpageObj.typePassword();
    loginpageObj.logIn();
    mainPageObj.hotFeaturClose();
    cy.wait(15000);
    

}

}