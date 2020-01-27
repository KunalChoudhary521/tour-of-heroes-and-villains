
describe('Tour of Heroes - E2E tests', () => {

  before(() => {
    cy.visit('http://localhost:4200');
  });

  describe('Initial Page', () => {

    it('displays title', () => {
      cy.get(`app-root h1`).contains('Tour of Heroes');
    });

    it(`displays heroes-app tabs`, () => {
      cy.get('nav').children().contains('Dashboard');
      cy.get('nav').children().contains('Heroes');
    });

    it('has dashboard as the active view', () => {
      cy.get('app-dashboard').should('exist');

      cy.get('app-heroes').should('not.exist');
    });

    it('displays fetched heroes message', () => {
      cy.get('app-messages div').contains('HeroService: fetched heroes');
    });

  });


  describe('Dashboard tests', () => {

    it('has 4 top heroes', () => {
      cy.get(`app-dashboard h3`).contains('Top Heroes');
      cy.get(`app-dashboard-ui div a`).children().should('have.length', 4);
    });

  });

  describe('Heroes tests', () => {

    it('can switch to Heroes view', () => {
      cy.get('app-root nav :nth-child(2)').click();
      cy.get('app-heroes').should('exist');
      cy.get('app-heroes h2').contains('My Heroes');

      cy.get('app-dashboard').should('not.exist');
    });

  });

});

