describe('Boards API Tests', () => {
  it('Deve criar um board, validar e excluir', () => {
    cy.createBoard('Trello Board Test').then((boardId) => {
      cy.deleteBoard(boardId);
    });
  });
});
