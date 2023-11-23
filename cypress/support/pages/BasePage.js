export default class BasePage{

    constructor() {
        this.elements = {};
                this.elements.body = 'body'
        
    }

    getBody(){
        return cy.get(this.elements.body);
    }
}