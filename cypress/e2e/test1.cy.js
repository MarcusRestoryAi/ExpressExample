describe('Tester mot webb-app', () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  })

  it('Kontrollera h1 tag', () => {
    //cy.visit('https://example.cypress.io')

    //cy.visit("http://localhost:8080/");
    cy.get("h1").should("contain.text", "Välkommen");
  })

  it('Testa inputs i formulär', () => {
    //cy.visit("http://localhost:8080/");

    cy.get("#username").type("Adam");
    cy.get("#password").type("Friberg");
    cy.get("#age").type("30");

    cy.get("#btnSendForm").click();

    cy.get("#btnFetchUsers").click();

    //cy.get("#usersOutput").should("contain.element", "table");
  })

})