import { Recipe } from "../lib/Recipe";

export interface RecipeCardProps {
  recipe: Recipe
}

export const RecipeCard = (props: RecipeCardProps) => {
  const { recipe } = props;
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.body}</p>
    </div>
  );
};

export interface RecipeCardListProps {
  recipes: Recipe[]
}

export const RecipeCardList = (props: RecipeCardListProps) => {
  const { recipes } = props;
  return (
    <div>
      {recipes.map((recipe: Recipe) => <RecipeCard recipe={recipe} />)}
    </div>
  );
};
