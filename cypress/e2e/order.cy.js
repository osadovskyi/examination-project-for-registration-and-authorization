import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import user from "../fixtures/user.json";
import { faker } from "@faker-js/faker";
import deliveryAddress from "../fixtures/deliveryAddress.json";
import productItem from "../fixtures/productItem.json"
import orderPage from "../support/pages/OrderPage";




user.email = faker.internet.email({ provider: 'gmail.com' });
user.pet = faker.animal.fish();
user.password = faker.internet.password({ length: 20 });
deliveryAddress.country = faker.location.country();
deliveryAddress.name = faker.person.firstName();
deliveryAddress.mobileNumber = faker.phone.number('########');
deliveryAddress.zip = faker.location.zipCode('####');
deliveryAddress.address = faker.location.streetAddress();
deliveryAddress.city = faker.location.city();
deliveryAddress.state = faker.location.state();
deliveryAddress.cardNumber = faker.finance.creditCardNumber('################');




describe('Successful order', () => {

    before(() => {
        homePage.visit();
        homePage.closeWelcomPopup();
        homePage.closeCookiesPopup();
        registrationPage.visit();
        registrationPage.registrationNewUser(user);
        loginPage.login(user);

    })

    it('Product selection and successful order', () => {
        homePage.getBody().click();
        cy.log('Add product to the basket')
        orderPage.clickAddToBasketButton(productItem.BananaJuice)
        orderPage.getNaviBasketButton().click();
        orderPage.successfulOrder(deliveryAddress)

    })

})

