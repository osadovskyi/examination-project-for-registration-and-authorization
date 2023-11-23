import BasePage from "./BasePage";

class HomePage extends BasePage{

    constructor() {
        super();
        this.elements.dismissButton = '.mat-focus-indicator.close-dialog';
        this.elements.acceptCookiesButton = '.cc-btn.cc-dismiss';
        this.elements.logo = '[alt="OWASP Juice Shop"]'

    }

    visit() {
        cy.log('Opening home page...');
        cy.visit('/#');
    }

    getDismissButton(){
        return cy.get(this.elements.dismissButton)
    }

    closeWelcomPopup(){
        this.getDismissButton().click()
    }

    getAcceptCookiesButton(){
        return cy.get(this.elements.acceptCookiesButton)
    }

    closeCookiesPopup(){
        this.getAcceptCookiesButton().click()
    }
    getLogo(){
        return cy.get(this.elements.logo); 
    }



}
export default new HomePage();