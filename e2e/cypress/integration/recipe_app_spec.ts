describe("User Interface", () => {
  it ('Home page contains h1', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').should('contain', '🍲 Searo')
  })
  it ('Create page contains button', () => {
    cy.visit('http://localhost:3000/create')
    cy.get('button').should('exist')
  })
  // it(`Given I have a new recipe
  //     When I add the new recipe name
  //     And ingredients
  //     And measurements
  //     And cooking method
  //     Then the new recipe is saved for later`, () => {
  //   cy.request("POST", "http://localhost:3080/recipes?search=Omelette")
  //   .then((response) => {
  //     expect(response.status).to.eq(200)
  //   })
  // });

  // it(`Given I want to look for a recipe
  //     When I search by the name of the recipe
  //     Then I find the recipe
  //     And I can see the ingredients
  //     And I can see the cooking methods`, () => {
  //   cy.request("GET", "http://localhost:3080/recipes?search=Omelette")
  //   .then((response) => {
  //     expect(response.status).to.eq(200)
  //     expect(response.body.results).length.to.be.greaterThan(1)
  //   })
  // });

  // it(`Given I want to look for a recipe by ingredients
  //     When I search by the ingredient of the recipe
  //     Then I find the recipe
  //     And I can see the ingredients
  //     And I can see the cooking methods`, () => {
  //   cy.request("GET", "http://localhost:3080/recipes?search=eggs")
  //   .then((response) => {
  //     expect(response.status).to.eq(200)
  //   })
  // });
});

describe("Rest API", () => {
  it('POST returns 200', () => {
    cy.request("POST", "http://localhost:3080/recipes?search=Omelette")
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  });

  it('Searching for Omelette returns results', () => {
    cy.request("GET", "http://localhost:3080/recipes?search=Omelette")
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.results).length.to.be.greaterThan(1)
    })
  });

  it('Searching for eggs returns results', () => {
    cy.request("GET", "http://localhost:3080/recipes?search=eggs")
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  });
});
