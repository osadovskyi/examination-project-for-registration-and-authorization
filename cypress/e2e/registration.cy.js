import homePage from "../support/pages/HomePage";
import registrationPage from "../support/pages/RegistrationPage";
import user from "../fixtures/user.json";
import { faker } from "@faker-js/faker";
import loginPage from "../support/pages/LoginPage";

user.email = faker.internet.email({ provider: 'gmail.com' });
user.pet = faker.animal.fish();
user.password = faker.internet.password({ length: 20 });


describe('Succesfull registration and authorization', () => {
    before(() => {
        homePage.visit();
        homePage.closeWelcomPopup();
        homePage.closeCookiesPopup()
    })

    it('registration', () => {
        registrationPage.visit();
        registrationPage.registrationNewUser(user);
        cy.log('Authorization after Succesfull registration');
        loginPage.login(user);


    })

})