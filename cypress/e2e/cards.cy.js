describe('Cards API Tests', () => {
  it('Deve criar um card, validar e excluir', () => {
    cy.createCard('Trello Card Test').then((cardId) => {
      cy.deleteCard(cardId);
    });
  });
});
