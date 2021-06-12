describe('Form tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows form', () => {
    cy.getBySel('seats-number-input').should('be.visible');
    cy.getBySel('seats-adjacent-checkbox').should('be.visible');
    cy.getBySel('seats-form-submit').should('be.visible');
  });

  it('submits form (random seats)', () => {
    cy.getBySel('seats-number-input').type('4');
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');
  });

  it('submits form (adjacent seats)', () => {
    cy.getBySel('seats-number-input').type('4');
    cy.getBySel('seats-adjacent-checkbox').check();
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');
  });

  it('does not submit form without seats number', () => {
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('alert').should('be.visible');
  });
});
