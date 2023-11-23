import BasePage from "./BasePage";

class FeedBackPage extends BasePage {

    constructor() {
        super();
        this.elements.commentField = '#comment';
        this.elements.ratingLine = '#rating';
        this.elements.captchaField = '#captchaControl';
        this.elements.confirmationMessage = '.mat-simple-snack-bar-content',
        this.elements.submitButton = '#submitButton';
        this.elements.captcha = '#captcha';



    }

    visit() {
        cy.log('Opening feedback page...');
        cy.visit('/#/contact');
    }

    getCommentField() {
        return cy.get(this.elements.commentField)
    }

    getRatingLine() {
        return cy.get(this.elements.ratingLine)
    }

    getCaptchaField() {
        return cy.get(this.elements.captchaField)
    }

    getSubmitButton() {
        return cy.get(this.elements.submitButton)
    }

    getConfirmationMessage() {
        return cy.get(this.elements.confirmationMessage)
    }


    getCaptcha() {
        return cy.get(this.elements.captcha)
    }


    solveCaptcha() {
        this.getCaptcha().then((captcha) => {
            let result = eval(captcha.text());
            this.getCaptchaField().type(result);
        })
    }



    leaveFeedBack(feedBackComment) {
        cy.log('Fill feed back form and send feed back');
        this.getCommentField().type(feedBackComment);
        this.getRatingLine().click('bottomRight');
        this.solveCaptcha();
        this.getSubmitButton().click();

    }


}export default new FeedBackPage