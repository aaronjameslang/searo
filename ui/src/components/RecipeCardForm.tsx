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
    <form style={style}>
      <input id="title-input" type="text" placeholder="Recipe Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea id="body-input" style={textareaStyle} placeholder="Recipe details..." onChange={(e) => setBody(e.target.value)} />
      <button onClick={() => onSave(recipe)} type="button">Save</button>
    </form>
  );
};

const style = {
  maxWidth: "800px",
display: "flex",
justifyContent: "center",
 alignItems: "center",
 flexDirection: "column",
 margin: "auto",
} as const

const textareaStyle = {
  minWidth: "400px",
  minHeight: "200px",
}
