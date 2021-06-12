describe('Seats tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('suggests random seats', () => {
    const seatsNumber = 4;

    cy.getBySel('seats-number-input').type(seatsNumber);
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');

    cy.get('[type="button"].selected').should('have.length', seatsNumber);
  });

  it('suggests adjacent seats', () => {
    cy.getBySel('seats-number-input').type('4');
    cy.getBySel('seats-adjacent-checkbox').check();
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');

    cy.get('[type="button"].selected')
      .next('[type="button"].selected')
      .next('[type="button"].selected')
      .next('[type="button"].selected');
  });

  it('shows warning if could not suggest seats', () => {
    cy.getBySel('seats-number-input').type('10');
    cy.getBySel('seats-adjacent-checkbox').check();
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');

    cy.get('[type="button"].selected').should('not.exist');
    cy.getBySel('alert').should('be.visible');
  });

  it('selects and deselects seats', () => {
    cy.getBySel('seats-number-input').type('4');
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');

    cy.get('[type="button"].selected').each(($seat) => {
      cy.wrap($seat).click().should('not.have.class', 'selected');
    });

    cy.get('[type="button"]')
      .not('.selected')
      .not('.reserved')
      .first()
      .click()
      .should('have.class', 'selected');
  });

  it('does not allow to select too many seats', () => {
    cy.getBySel('seats-number-input').type('4');
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');

    cy.get('[type="button"]')
      .not('.selected')
      .not('.reserved')
      .first()
      .click()
      .should('not.have.class', 'selected');

    cy.getBySel('alert').should('be.visible');
  });

  it('does not allow to proceed if no seats selected', () => {
    cy.getBySel('seats-number-input').type('4');
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');

    cy.get('[type="button"].selected').each(($seat) => {
      cy.wrap($seat).click();
    });

    cy.getBySel('seats-page-submit').click();
    cy.getBySel('seats-map').should('be.visible');
    cy.getBySel('alert').should('be.visible');
  });

  it('books selected seats', () => {
    cy.getBySel('seats-number-input').type('4');
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');

    cy.getBySel('seats-page-submit').click();
    cy.getBySel('summary').should('be.visible');
  });
});
