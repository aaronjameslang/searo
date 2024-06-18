import { useState } from "react";
import { Recipe } from "../lib/Recipe";

export interface RecipeCardFormProps {
  onSave: (recipe: Recipe) => unknown
}

export const RecipeCardForm = (props: RecipeCardFormProps) => {
  const { onSave } = props;
  const [recipe, setRecipe] = useState<Recipe>({ title: "", body: "" });
  const setTitle = (title: string) => setRecipe({ ...recipe, title });
  const setBody = (body: string) => setRecipe({ ...recipe, body });
  return (
    <form>
      <input type="text" placeholder="Recipe Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Recipe Body" onChange={(e) => setBody(e.target.value)} />
      <button onClick={() => onSave(recipe)}>Save</button>
    </form>
  );
};
