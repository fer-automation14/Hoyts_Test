import { HelperMethods } from '../util/helper-methods';

const moment = require('moment');

const { HomePage } = require('../pages/home.po');

describe('Home', () => {
  beforeEach(function () {
    HelperMethods.testSetup();
  });

  it('should validate that the email address is already in use when creating a new account', () => {
    // act
    const homePage = new HomePage();
    const birthDate = moment('1997-12-14', 'YYYY-MM-DD').format('YYYY-MM-DD');

    cy.wait(500);

    // assert
    homePage.getLoginMenuButton().click();
    homePage.getJoinNowButton().click();
    homePage.getEmailAddressInput().type('mfarayaa@hotmail.com');
    homePage.getPasswordInput().type('pass123');
    homePage.getFirstNameInput().type('Maria Fernanda');
    homePage.getLastNameInput().type('Araya');
    homePage.getMobileInput().type('pass123');
    homePage.getDateOfBirthInput().type(birthDate);
    homePage.getPostCodeInput().type(30101);
    homePage.getFemaleGenderRadioInput().click();
    homePage.getPreferredCinemaSelect().select(1);
    homePage.getSignInSubscribeCheckbox().click();
    homePage.getSignInTermsCheckbox().click();

    homePage.getExistingEmailAddressToastMessage().should('contain.text', 'Sorry, that email address is already in use. Thanks, your enquiry has been sent');
    homePage.getContinueButton().should('be.disabled');
  });
});
