describe("User Interface", () => {
  it ('Home page contains h1', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').should('contain', '🍲 Searo')
  })
  it ('Create page contains button', () => {
    cy.visit('http://localhost:3000/create')
    cy.get('button').should('exist')
  })

  it(`Given I have a new recipe
      When I add the new recipe name
      And ingredients
      And measurements
      And cooking method
      Then the new recipe is saved for later`,
    () => {
      const recipe = genTestRecipe()
      cy.visit('http://localhost:3000')
      cy.get('#create-button').should('exist').click()
      cy.get('#title-input').type(recipe.title)
      cy.get('#body-input').type(recipe.body)
      cy.get('button').click()
      cy.get('body').should('contain', recipe.title)
    }
  );

  it(`Given I want to look for a recipe
      When I search by the name of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
      const recipe = genTestRecipe()
      cy.visit('http://localhost:3000')
      cy.get('#create-button').should('exist').click()
      cy.get('#title-input').type(recipe.title)
      cy.get('#body-input').type(recipe.body)
      cy.get('button').click()
      cy.get('input').type(recipe.title)
      cy.get('body').should('contain', recipe.title)
  });

  it(`Given I want to look for a recipe by ingredients
      When I search by the ingredient of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
      const recipe = genTestRecipe()
      cy.visit('http://localhost:3000')
      cy.get('#create-button').should('exist').click()
      cy.get('#title-input').type(recipe.title)
      cy.get('#body-input').type(recipe.body)
      cy.get('button').click()
      cy.get('input').type(recipe.body)
      cy.get('body').should('contain', recipe.title)
  });
});

// TODO add negative tests, i.e. what if we post a recipe without a title?

function genTestRecipe() {
  return {
    title: "Test Tajine #"+Math.random(),
    body: "Ingredients, etc "+Math.random()
  }
}

describe("Rest API", () => {
  it('POST returns 200', () => {
    cy.request("POST", "http://localhost:3080/recipes", genTestRecipe()) // TODO factor out base url?
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  });

  it('can retrieve all recipes', () => {
    cy.request("POST", "http://localhost:3080/recipes", genTestRecipe())
    .then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.request("GET", "http://localhost:3080/recipes")
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.results.length).to.be.greaterThan(0)
    })
  });

  it('can add and then retrieve a recipe', () => {
    const title = "Test Tajine #"+Math.random()
    const recipe = {title, body: "Ingredients, etc"}
    cy.request("POST", "http://localhost:3080/recipes", recipe)
    .then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.request("GET", "http://localhost:3080/recipes?search="+encodeURIComponent(title))// encode title?
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.results.length).to.equal(1)
      expect(response.body.results[0].title).equals(recipe.title)
      expect(response.body.results[0].body).equals(recipe.body)
    })
  });
});
