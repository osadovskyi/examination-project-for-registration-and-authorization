import BasePage from "./BasePage";

class LoginPage extends BasePage {

    constructor() {
        super();
        this.elements.emailField = '#email';
        this.elements.passwordField = '#password';
        this.elements.loginButton = '#loginButton';
        this.elements.accountButton = '#navbarAccount',
        this.elements.userProfileButton = 'button[aria-label="Go to user profile"]',
        this.elements.emailNegativeTooltip = '#mat-error-0',
        this.elements.passwordNegativeTooltip = '#mat-error-1'

    }

    visit() {
        cy.log('Opening login page...');
        cy.visit('/#/login');
    }

    getEmailField() {
        return cy.get(this.elements.emailField)
    }

    getPasswordField() {
        return cy.get(this.elements.passwordField)
    }

    getLoginButton() {
        return cy.get(this.elements.loginButton)
    }

    getAccountButton() {
        return cy.get(this.elements.accountButton)
    }

    getUserProfileButton() {
        return cy.get(this.elements.userProfileButton)
    }

    getEmailNegativeTooltip() {
        return cy.get(this.elements.emailNegativeTooltip)
    }

    getPasswordNegativeTooltip() {
        return cy.get(this.elements.passwordNegativeTooltip)
    }



    login(user) {
        cy.log('Logi as a user')
        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getLoginButton().click();
        cy.log('Checking if the user is logged in');
        this.getAccountButton().click();
        this.getUserProfileButton().should('have.text', ` account_circle  ${user.email} `);
        this.getBody().click();
    }

    loginWhithEmptyFields() {
        this.getEmailField().focus().blur();
        this.getPasswordField().focus().blur();
    }
}export default new LoginPage