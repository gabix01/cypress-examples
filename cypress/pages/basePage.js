import basePageSelectors from './basePageSelectors';
import { faker } from '@faker-js/faker';

const constpassword = faker.internet.password(10, true, /[A-Z]/);
const constemail = faker.internet.email();
const constusername = faker.internet.userName();

class BasePage{
    //TEST CASE 1

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
        const username = faker.internet.userName();
        cy.get(basePageSelectors.nameSignup).should('be.visible').type(username);
        const email = faker.internet.email();
        cy.get(basePageSelectors.emailSignup).should('be.visible').type(email);
        cy.get(basePageSelectors.signupButton).click();
        cy.get(basePageSelectors.titleSignup).click();
        //.select jest to akcja do wybrania z rozwijanej listy danego elementu
        cy.get(basePageSelectors.days).select(faker.datatype.number({ min: 1, max: 28 }));
        //tworzymy tablice z miesiącami
        const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        //funkcja Math.random() generuje losową liczbę z przediału monthsArray.lenght
        const randomIndex = Math.floor(Math.random() * monthsArray.length);
        //monthsArray[randomIndex] zwraca losowy indeks z miesiącem
        const randomMonth = monthsArray[randomIndex];
        cy.get(basePageSelectors.months).select(randomMonth);
        cy.get(basePageSelectors.years).select('1920');
        const password = faker.internet.password(10, true, /[A-Z]/);
        cy.get(basePageSelectors.password).type(password);
        cy.get(basePageSelectors.newsletter).click();
        cy.get(basePageSelectors.receviOfeers).click();
        cy.get(basePageSelectors.firstName).should('be.visible').type(faker.name.firstName());
        cy.get(basePageSelectors.lastName).should('be.visible').type(faker.name.lastName());
        cy.get(basePageSelectors.adressRegister).should('be.visible').type(faker.address.streetName());
        const countryArray = ['India','Canada','Australia','Israel','Singapore','United States','New Zealand'];
        const randomIndex2 = Math.floor(Math.random() * countryArray.length);
        const randomCountry = countryArray[randomIndex2];
        cy.get(basePageSelectors.country).select(randomCountry);
        cy.get(basePageSelectors.city).should('be.visible').type(faker.address.city());
        cy.get(basePageSelectors.zipCode).should('be.empty').type(faker.address.zipCode());
        cy.get(basePageSelectors.phoneNumber).should('be.visible').type(faker.phone.phoneNumber());
        cy.get(basePageSelectors.stateRegister).should('be.visible').type(faker.address.state());
        cy.get(basePageSelectors.createAccountButton).should('be.visible').click();
        cy.get(basePageSelectors.accountCreatedComment).should('have.text','Account Created!');
        cy.get(basePageSelectors.continueButton).should('be.visible').click();
        cy.get(basePageSelectors.loggedAsUser).should('contain.text',username);
        cy.get(basePageSelectors.deleteAccountButton).click();
        cy.get(basePageSelectors.deleteAccountComment).should('contain.text','Account Deleted!');
        cy.get(basePageSelectors.afterDeleteContinue).click();
    }
        //TEST CASE 2
        
    regiterBaseUser(){
        cy.visit(basePageSelectors.automationexercisePage);
        cy.url().should('include','automationexercise');
        cy.get(basePageSelectors.signupLoginButton).click();
        cy.get(basePageSelectors.newUserSignup).should('be.visible');
        cy.get(basePageSelectors.nameSignup).should('be.visible').type(constusername);
        cy.get(basePageSelectors.emailSignup).should('be.visible').type(constemail);
        cy.get(basePageSelectors.signupButton).click();
        cy.get(basePageSelectors.titleSignup).click();
        cy.get(basePageSelectors.days).select(faker.datatype.number({ min: 1, max: 28 }));
        const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const randomIndex = Math.floor(Math.random() * monthsArray.length);
        const randomMonth = monthsArray[randomIndex];
        cy.get(basePageSelectors.months).select(randomMonth);
        cy.get(basePageSelectors.years).select('1920');
        cy.get(basePageSelectors.password).type(constpassword);
        cy.get(basePageSelectors.newsletter).click();
        cy.get(basePageSelectors.receviOfeers).click();
        cy.get(basePageSelectors.firstName).should('be.visible').type(faker.name.firstName());
        cy.get(basePageSelectors.lastName).should('be.visible').type(faker.name.lastName());
        cy.get(basePageSelectors.adressRegister).should('be.visible').type(faker.address.streetName());
        const countryArray = ['India','Canada','Australia','Israel','Singapore','United States','New Zealand'];
        const randomIndex2 = Math.floor(Math.random() * countryArray.length);
        const randomCountry = countryArray[randomIndex2];
        cy.get(basePageSelectors.country).select(randomCountry);
        cy.get(basePageSelectors.city).should('be.visible').type(faker.address.city());
        cy.get(basePageSelectors.zipCode).should('be.empty').type(faker.address.zipCode());
        cy.get(basePageSelectors.phoneNumber).should('be.visible').type(faker.phone.phoneNumber());
        cy.get(basePageSelectors.stateRegister).should('be.visible').type(faker.address.state());
        cy.get(basePageSelectors.createAccountButton).should('be.visible').click();
        cy.get(basePageSelectors.accountCreatedComment).should('have.text','Account Created!');
        cy.get(basePageSelectors.continueButton).should('be.visible').click();
        cy.get(basePageSelectors.loggedAsUser).should('contain.text',constusername);
    }
    loginUser(){
        cy.visit(basePageSelectors.automationexercisePage);
        cy.url().should('include','automationexercise');
        cy.get(basePageSelectors.signupLoginButton).click();
        cy.get(basePageSelectors.loginEmailAdress).should('be.visible').type(constemail);
        cy.get(basePageSelectors.loginPassword).should('be.visible').type(constpassword);
        cy.get(basePageSelectors.loginButton).click();
        cy.get(basePageSelectors.loggedAsUser).should('contain.text',constusername);
        cy.get(basePageSelectors.deleteAccountButton).click();
        cy.get(basePageSelectors.deleteAccountComment).should('contain.text','Account Deleted!');
        cy.get(basePageSelectors.afterDeleteContinue).click();
    }
}
export default new BasePage();