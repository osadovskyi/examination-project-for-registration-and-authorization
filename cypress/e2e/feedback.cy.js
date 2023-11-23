import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import user from "../fixtures/user.json";
import { faker } from "@faker-js/faker";
import feedBackPage from "../support/pages/FeedBackPage";
import feedBackComment from "../fixtures/feedBackComment.json"



user.email = faker.internet.email({ provider: 'gmail.com' });
user.pet = faker.animal.fish();
user.password = faker.internet.password({ length: 20 });




describe('Successful feedback', () => {

  before(() => {
    homePage.visit();
    homePage.closeWelcomPopup();
    homePage.closeCookiesPopup();
    registrationPage.visit();
    registrationPage.registrationNewUser(user);
    loginPage.login(user);
    loginPage.getBody().click();

  })

  it('navigate to the feedback page, writt and send geedback', () => {
    feedBackPage.visit();
    feedBackPage.leaveFeedBack(feedBackComment.comment);
    cy.log('Check confirmation message')
    feedBackPage.getConfirmationMessage().should('have.text', 'Thank you so much for your amazing 5-star feedback!');
  



  })
})

    
    
          



 






  