Cypress.Commands.add('getBySel', (selector, ...args) => cy.get(`[data-test=${selector}]`, ...args));
Cypress.Commands.add('getBySelLike', (selector, ...args) => cy.get(`[data-test*=${selector}]`, ...args));
