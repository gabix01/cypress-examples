import basePage from "../pages/basePage";
import { faker } from '@faker-js/faker';
beforeEach(() => {
  cy.viewport(1380, 800);
});

//wywołanie funkcji .regsiterUser która znajduje się w basePage
it('register to application', function () {
  basePage.registerUser();
});