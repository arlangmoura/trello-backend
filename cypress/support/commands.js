import Ajv from 'ajv';

const ajv = new Ajv();

Cypress.Commands.add('createBoard', (boardName) => {
  return cy.fixture('data.json').then((data) => {
    return cy.request({
      method: 'POST',
      url: `/boards/?name=${boardName}&key=${data.APIKey}&token=${data.APIToken}&idOrganization=${data.idOrganization}`,
      headers: { Cookie: 'dsc=b3558bf6e7b91f268d0e5a71baed165' }
    }).then((response) => {
      console.log('Response Body POST board:', JSON.stringify(response.body));
      cy.log('Response Body POST board:', JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      cy.validateSchema('createBoardSchema', response.body).then(() => {
        expect(response.body.id).to.not.be.null;
        return response.body.id;
      });
    });
  });
});



Cypress.Commands.add('deleteBoard', (boardId) => {
  return cy.fixture('data.json').then((data) => {
    cy.request({
      method: 'DELETE',
      url: `/boards/${boardId}?key=${data.APIKey}&token=${data.APIToken}`
    }).then((response) => {
      console.log('Response Body DELETE board:', JSON.stringify(response.body));
      cy.log('Response Body DELETE board:', JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      cy.validateSchema('deleteBoardSchema', response.body);
    });
  });
});

Cypress.Commands.add('createCard', (cardName) => {
  return cy.fixture('data.json').then((data) => {
    return cy.request({
      method: 'POST',
      url: `/cards?idList=${data.idList}&key=${data.APIKey}&token=${data.APIToken}`,
      body: { name: cardName }
    }).then((response) => {
      console.log('Response Body POST cards:', JSON.stringify(response.body));
      cy.log('Response Body POST cards:', JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      cy.validateSchema('createCardsSchema', response.body);
      expect(response.body.id).to.not.be.null;
      return cy.wrap(response.body.id); // Use cy.wrap para encadear o valor
    });
  });
});

Cypress.Commands.add('deleteCard', (cardId) => {
  return cy.fixture('data.json').then((data) => {
    cy.request({
      method: 'DELETE',
      url: `/cards/${cardId}?key=${data.APIKey}&token=${data.APIToken}`
    }).then((response) => {
      console.log('Response Body DELETE cards:', JSON.stringify(response.body));
      cy.log('Response Body DELETE cards:', JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      cy.validateSchema('deleteCardsSchema', response.body);
    });
  });
});

Cypress.Commands.add('validateSchema', (schemaName, data) => {
  cy.fixture(`schemas/${schemaName}.json`).then((schema) => {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
      throw new Error(`Schema validation failed: ${JSON.stringify(validate.errors)}`);
    }
  });
});
