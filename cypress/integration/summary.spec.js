describe('Summary tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows booked seats summary', () => {
    cy.getBySel('seats-number-input').type('4');
    cy.getBySel('seats-form-submit').click();
    cy.getBySel('seats-map').should('be.visible');

    const bookedSeats = [];
    cy.get('[type="button"].selected').each(($seat) => {
      const rowsNumber = $seat.parent().siblings().length + 1;
      bookedSeats.push({
        row: rowsNumber - $seat.parent().index() - 1,
        col: $seat.index(),
      });
    });

    cy.getBySel('seats-page-submit').click();
    cy.getBySel('summary').should('be.visible');

    cy.getBySel('seats-summary')
      .get('.list-group-item')
      .each(($item, index) => {
        cy.wrap($item)
          .children('strong')
          .eq(0)
          .should('contain', bookedSeats[index].row)
          .next()
          .should('contain', bookedSeats[index].col);
      });
  });
});
