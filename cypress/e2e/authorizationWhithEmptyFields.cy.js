import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";


describe('unsuccessful authorization', () => {
    before(() => {
        homePage.visit();
        homePage.closeWelcomPopup();
        homePage.closeCookiesPopup();

    })

    it('unsuccessful authorization with empty fields', () => {
        loginPage.visit();
        loginPage.loginWhithEmptyFields();
        loginPage.getEmailNegativeTooltip().should('have.text', 'Please provide an email address.');
        loginPage.getPasswordNegativeTooltip().should('have.text', 'Please provide a password.');
        loginPage.getLoginButton().should('have.attr', 'disabled');

    })
})

