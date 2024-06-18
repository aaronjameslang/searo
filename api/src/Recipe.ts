export interface Recipe {
  title: string;
  body: string;
}

export const DUMMY_RECIPES: Recipe[] = [
{
  title: "Omelette",
body: `Ingredients:
- 2 eggs
- 1/4 cup milk
- 1/4 cup shredded cheese
- 1/4 cup diced ham
- 1/4 cup diced onion
- 1/4 cup diced bell pepper

Instructions:
1. Whisk together eggs and milk in a bowl.
2. Stir in cheese, ham, onion, and bell pepper.
3. Pour mixture into a greased skillet over medium heat.
4. Cook until eggs are set, about 5 minutes.
5. Fold omelette in half and serve.`
},
{
  title: "Pancakes",
body: `Ingredients:
- 1 cup flour
- 1 tbsp sugar
- 1 tsp baking powder
- 1/2 tsp baking soda
- 1/2 tsp salt
- 1 cup buttermilk
- 1 egg
- 2 tbsp melted butter

Instructions:
1. In a bowl, whisk together flour, sugar, baking powder, baking soda, and salt.
2. In a separate bowl, whisk together buttermilk, egg, and melted butter.
3. Pour wet ingredients into dry ingredients and stir until just combined.
4. Heat a greased skillet over medium heat.
5. Pour 1/4 cup of batter onto skillet for each pancake.
6. Cook until bubbles form on the surface, then flip and cook until golden brown.
7. Serve with butter and syrup.`
},
{
  title: "Spaghetti",

  body: `Ingredients:
- 8 oz spaghetti
- 1/4 cup olive oil
- 4 cloves garlic, minced
- 1/2 tsp red pepper flakes
- 1/2 cup grated Parmesan cheese
- 1/4 cup chopped parsley
- Salt and pepper to taste

Instructions:
1. Cook spaghetti according to package instructions.
2. Heat olive oil in a skillet over medium heat.
3. Add garlic and red pepper flakes and cook until fragrant.
4. Drain spaghetti and add to skillet.
5. Toss spaghetti with garlic oil.
6. Add Parmesan cheese and parsley and toss to combine.
7. Season with salt and pepper.
8. Serve hot.`
}
]
