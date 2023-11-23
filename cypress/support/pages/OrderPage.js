import BasePage from "./BasePage";

class OrderPage extends BasePage {

    constructor() {
        super();
        //this.elements.addToBasketButton = cy.contains('Banana Juice (1000ml').parents('[class="mat-grid-tile-content"]').find('[aria-label="Add to Basket"]');
        this.elements.naviBasketButton = '[routerlink="/basket"]';
        this.elements.checkoutButton = '#checkoutButton';
        this.elements.addNewAddressButton = '[routerlink="/address/create"]';
        this.elements.countryField = '#mat-input-7';
        this.elements.nameField = '#mat-input-8';
        this.elements.mobileNumberField = '#mat-input-9';
        this.elements.zipCodeField = '#mat-input-10';
        this.elements.addressField = '#address';
        this.elements.cityField = '#mat-input-12';
        this.elements.stateField = '#mat-input-13';
        this.elements.submitButton = '#submitButton';
        this.elements.selectAnAddressRadioButton = '.mat-radio-outer-circle';
        this.elements.continueButton = '.mat-focus-indicator.btn.btn-next';
        this.elements.fastDeliverySpeedButton = '#mat-radio-42';
        this.elements.continueButton2 = '.mat-focus-indicator.btn.nextButton';
        this.elements.addNewCardDropdown = '#mat-expansion-panel-header-0';
        this.elements.addNewCardNameField = '#mat-input-14';
        this.elements.cardNumberField = '#mat-input-15';
        this.elements.expiryMonthDropdown = '#mat-input-16';
        this.elements.expiryYearDropdown = '#mat-input-17';
        this.elements.submitButtonAddNewCard = '#submitButton';
        this.elements.myPaymentOptionsRadio = '#mat-radio-44';
        this.elements.myPaymentOptionsContinueButton = '.mat-focus-indicator.btn.nextButton';
        this.elements.placeYourOrderAndPayButton = 'button#checkoutButton';
        this.elements.successfulOrderText = '.confirmation'


    }




    getNaviBasketButton() {
        return cy.get(this.elements.naviBasketButton)
    }

    getCheckoutButton() {
        return cy.get(this.elements.checkoutButton)
    }

    getAddNewAddressButton() {
        return cy.get(this.elements.addNewAddressButton)
    }

    getCountryField() {
        return cy.get(this.elements.countryField)
    }

    getNameField() {
        return cy.get(this.elements.nameField)
    }

    getMobileNumberField() {
        return cy.get(this.elements.mobileNumberField)
    }

    getZipCodeField() {
        return cy.get(this.elements.zipCodeField)
    }

    getAddressField() {
        return cy.get(this.elements.addressField)
    }


    getCityField() {
        return cy.get(this.elements.cityField)
    }

    getStateField() {
        return cy.get(this.elements.stateField)
    }

    getSubmitButton() {
        return cy.get(this.elements.submitButton)
    }

    getSelectAnAddressRadioButton() {
        return cy.get(this.elements.selectAnAddressRadioButton)
    }

    getContinueButton() {
        return cy.get(this.elements.continueButton)
    }

    getFastDeliverySpeedButton() {
        return cy.get(this.elements.fastDeliverySpeedButton)
    }

    getContinueButton2() {
        return cy.get(this.elements.continueButton2)
    }

    getAddNewCardDropdown() {
        return cy.get(this.elements.addNewCardDropdown)
    }

    getAddNewCardNameField() {
        return cy.get(this.elements.addNewCardNameField)
    }

    getCardNumberField() {
        return cy.get(this.elements.cardNumberField)
    }

    getExpiryMonthDropdown() {
        return cy.get(this.elements.expiryMonthDropdown)
    }

    getExpiryYearDropdown() {
        return cy.get(this.elements.expiryYearDropdown)
    }

    getSubmitButtonAddNewCard() {
        return cy.get(this.elements.submitButtonAddNewCard)
    }

    getMyPaymentOptionsRadio() {
        return cy.get(this.elements.myPaymentOptionsRadio)
    }

    getMyPaymentOptionsContinueButton() {
        return cy.get(this.elements.myPaymentOptionsContinueButton)
    }

    getPlaceYourOrderAndPayButton() {
        return cy.get(this.elements.placeYourOrderAndPayButton)
    }

    getSuccessfulOrderText() {
        return cy.get(this.elements.successfulOrderText)
    }

    successfulOrder(deliveryAddress) {
        cy.log('successful ordering');
        this.getCheckoutButton().click();
        this.getAddNewAddressButton().click();
        this.getCountryField().type(deliveryAddress.country);
        this.getNameField().type(deliveryAddress.name);
        this.getMobileNumberField().type(deliveryAddress.mobileNumber);
        this.getZipCodeField().type(deliveryAddress.zip);
        this.getAddressField().type(deliveryAddress.address);
        this.getCityField().type(deliveryAddress.city);
        this.getStateField().type(deliveryAddress.state);
        this.getSubmitButton().click();
        this.getSelectAnAddressRadioButton().click({ force: true });
        this.getContinueButton().click();
        this.getFastDeliverySpeedButton().click({ force: true });
        this.getContinueButton2().click();
        this.getAddNewCardDropdown().click();
        this.getAddNewCardNameField().type(deliveryAddress.name);
        this.getCardNumberField().type(deliveryAddress.cardNumber);
        this.getExpiryMonthDropdown().select('12');
        this.getExpiryYearDropdown().select('2080');
        this.getSubmitButtonAddNewCard().click();
        this.getMyPaymentOptionsRadio().click({ force: true });
        this.getMyPaymentOptionsContinueButton().click();
        this.getPlaceYourOrderAndPayButton().click();
        this.getSuccessfulOrderText().should('have.text', 'Thank you for your purchase!');
    }

    clickAddToBasketButton(productItem) {
        cy.contains(productItem).parents('[class="mat-grid-tile-content"]').find('[aria-label="Add to Basket"]').click();
    }

} export default new OrderPage();