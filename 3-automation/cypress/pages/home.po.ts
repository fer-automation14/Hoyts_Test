export class HomePage {
  public getLoginMenuButton() {
    return cy.get(".header__profile-button");
  }

  public getJoinNowButton() {
    return cy.get(".sign-in__note > :nth-child(3)");
  }

  public getExistingEmailAddressToastMessage() {
    return cy.get(".toast__text");
  }

  public getEmailAddressInput() {
    return cy.get(".form-placeholder__input").eq(0);
  }

  public getPasswordInput() {
    return cy.get(".form-placeholder__input").eq(1);
  }

  public getFirstNameInput() {
    return cy.get(".form-placeholder__input").eq(2);
  }

  public getLastNameInput() {
    return cy.get(".form-placeholder__input").eq(3);
  }

  public getMobileInput() {
    return cy.get(".form-placeholder__input").eq(4);
  }

  public getDateOfBirthInput() {
    return cy.get(".form-placeholder__input").eq(5);
  }

  public getPostCodeInput() {
    return cy.get(".form-placeholder__input").eq(6);
  }

  public getFemaleGenderRadioInput() {
    return cy.get("#form-radio__input--sign-in-female");
  }

  public getPreferredCinemaSelect() {
    return cy.get("#form-placeholder__select--preferredCinema");
  }

  public getSignInSubscribeCheckbox() {
    return cy.get("#form-checkbox__input--sign-in-subscribe");
  }

  public getSignInTermsCheckbox() {
    return cy.get("#form-checkbox__input--sign-in-terms");
  }

  public getContinueButton() {
    return cy.get(":nth-child(12) > .form-button");
  }
}
