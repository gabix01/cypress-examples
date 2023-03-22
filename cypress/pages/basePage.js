import basePageSelectors from './basePageSelectors';
import { faker } from '@faker-js/faker';

class BasePage{
    registerUser(){
        //cy.visit umożliwia nam otworzenie strony w przeglądarce
        cy.visit(basePageSelectors.automationexercisePage);
        // cy.url().should sprawdzamy czy link url strony zawiera daną fraze
        cy.url().should('include','automationexercise');
        //cy.get pobiera nam element który zawiera wskazany przez nas selektor 
        //.click jest to akcja do kliknięcia w dany  selektor
        cy.get(basePageSelectors.signupLoginButton).click();
        //.should('be.visible'); sprawdza czy dany selektor jest widoczny na stronie
        cy.get(basePageSelectors.newUserSignup).should('be.visible');
        //.type jest to akcja do wprowadzanie danych
        cy.get(basePageSelectors.nameSignup).should('be.visible').type(faker.internet.userName());
        cy.get(basePageSelectors.emailSignup).should('be.visible').type(faker.internet.email());
        cy.get(basePageSelectors.signupButton).click();
        cy.get(basePageSelectors.titleSignup).click();
        //.select jest to akcja do wybrania z rozwijanej listy danego elementu
        cy.get(basePageSelectors.days).select(faker.datatype.number({ min: 1, max: 28 }));
        
    }
}
export default new BasePage();