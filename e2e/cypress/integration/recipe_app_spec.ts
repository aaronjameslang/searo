describe("Recipe tests", () => {
  it(`Given I have a new recipe
      When I add the new recipe name
      And ingredients
      And measurements
      And cooking method
      Then the new recipe is saved for later`, () => {
    cy.request("POST", "http://localhost:3080/recipes?search=Omelette")
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  });

  it(`Given I want to look for a recipe
      When I search by the name of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
    cy.request("GET", "http://localhost:3080/recipes?search=Omelette")
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.results).length.to.be.greaterThan(1)
    })
  });

  it(`Given I want to look for a recipe by ingredients
      When I search by the ingredient of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
    cy.request("GET", "http://localhost:3080/recipes?search=eggs")
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  });
});
