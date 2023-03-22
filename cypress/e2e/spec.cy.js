import basePage from "../pages/basePage";
import { faker } from '@faker-js/faker';
beforeEach(() => {
  cy.viewport(1380, 800);
});


it('register to application', function () {
  basePage.registerUser();
});