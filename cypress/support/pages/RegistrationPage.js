import BasePage from "./BasePage";
import user from "../../fixtures/user.json"

class RegistrationPage extends BasePage{

    constructor(){
        super();
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.confirmPasswordField = '#repeatPasswordControl';
        this.elements.securityDropdown = '.mat-form-field-infix.ng-tns-c119-14';
        this.elements.securityList = '#mat-select-2-panel';
        this.elements.securityAnswerField = '#securityAnswerControl';
        this.elements.registerButton = '#registerButton',
        this.elements.securityOption = `[id="mat-option-${user.securityOption}"]`,
        this.elements.emailNegativeTooltip = '#mat-error-0',
        this.elements.passwordNegativeTooltip = '#mat-error-1',
        this.elements.confirmPasswordNegativeTooltip = '#mat-error-2',
        this.elements.securityQuestionNegativeTooltip = '#mat-error-3',
        this.elements.answerNegativeTooltip = '#mat-error-4'


    }

    visit() {
        cy.log('Opening registar page...');
        cy.visit('/#/register');
    }

    getEmailField(){
        return cy.get(this.elements.emailField)
    }

    getPasswordField(){
        return cy.get(this.elements.passwordField)
    }

    getConfirmPasswordField(){
        return cy.get(this.elements.confirmPasswordField) 
    }

    getSecurityDropdown(){
        return cy.get(this.elements.securityDropdown)
    }

    getSecurityList(){
        return cy.get(this.elements.securityList)
    }

    getSecurityAnswerField(){
        return cy.get(this.elements.securityAnswerField)
    }

    getRegisterButton(){
        return cy.get(this.elements.registerButton)
    }

    getSecurityOption(){
        return cy.get(this.elements.securityOption)
    }

    getEmailNegativeTooltip(){
        return cy.get(this.elements.emailNegativeTooltip)
    }

    getPasswordNegativeTooltip(){
        return cy.get(this.elements.passwordNegativeTooltip)
    }

    getConfirmPasswordNegativeTooltip(){
        return cy.get(this.elements.confirmPasswordNegativeTooltip)
    }

    getSecurityQuestionNegativeTooltip(){
        return cy.get(this.elements.securityQuestionNegativeTooltip)
    }

    getAnswerNegativeTooltip(){
        return cy.get(this.elements.answerNegativeTooltip)
    }



    registrationNewUser(user){
        cy.log('Registration of a new user');
        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getConfirmPasswordField().type(user.password);
        this.getSecurityDropdown().click({force: true});
        this.getSecurityList().find(this.elements.securityOption).click();
        this.getSecurityAnswerField().type(user.pet);
        this.getRegisterButton().click();
        
    }
    leaveEmptyFields(){
        this.getEmailField().focus().blur();
        this.getPasswordField().focus().blur();
        this.getConfirmPasswordField().focus().blur();
        this.getSecurityDropdown().click({force: true});
        this.getSecurityAnswerField().focus().blur();
        
    }

}export default new RegistrationPage();



