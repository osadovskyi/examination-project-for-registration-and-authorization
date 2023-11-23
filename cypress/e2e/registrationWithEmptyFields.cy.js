import homePage from "../support/pages/HomePage";
import registrationPage from "../support/pages/RegistrationPage";



describe('Registration with empty fields', () => {

    before(() => {
        homePage.visit();
        homePage.closeWelcomPopup();
        homePage.closeCookiesPopup()
    })

    it('lieve all registration fields and check negative tooltips', () => {
        registrationPage.visit();
        registrationPage.leaveEmptyFields();
        registrationPage.getEmailNegativeTooltip().should('have.text', 'Please provide an email address.');
        registrationPage.getPasswordNegativeTooltip().should('have.text', 'Please provide a password. ');
        registrationPage.getConfirmPasswordNegativeTooltip().should('have.text', ' Please repeat your password. ');
        registrationPage.getSecurityQuestionNegativeTooltip().should('have.text', ' Please select a security question. ');
        registrationPage.getAnswerNegativeTooltip().should('have.text', ' Please provide an answer to your security question. ');
        registrationPage.getRegisterButton().should('have.attr', 'disabled');


    })

})




