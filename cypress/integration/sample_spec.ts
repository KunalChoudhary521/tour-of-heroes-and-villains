
describe('Tour of Heroes - E2E tests', () => {

  it('loads main page and displays title', () => {
    cy.visit('http://localhost:4200');
    cy.get('app-root h1').contains('Tour of Heroes');
  });
});

