import basePageSelectors from './basePageSelectors';
import { faker } from '@faker-js/faker';

class BasePage{
    registerUser(){
        cy.visit(basePageSelectors.automationexercisePage);
        cy.url().should('include','automationexercise');
        cy.get(basePageSelectors.signupLoginButton).click();
        cy.get(basePageSelectors.newUserSignup).should('be.visible');
        cy.get(basePageSelectors.nameSignup).should('be.visible').type(faker.internet.userName());
        cy.get(basePageSelectors.emailSignup).should('be.visible').type(faker.internet.email());
        cy.get(basePageSelectors.signupButton).click();
        cy.get(basePageSelectors.titleSignup).click();
        cy.get(basePageSelectors.days).select(faker.datatype.number({ min: 1, max: 28 }));
        
    }
}
export default new BasePage();