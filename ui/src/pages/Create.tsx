import { RecipeCardForm } from "../components/RecipeCardForm";
import { Recipe } from "../lib/Recipe";

export const CreatePage = () => {
  // TODO clicking title should navigate to home
  async function onSave(recipe: Recipe) {
    await fetch("http://localhost:3080/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    })
    window.location.href = "/" // pre-search for just added entry?
  }
  return (
    <div style={style}>
      <h1>🍲 Searo</h1>
      <p>Save a new recipe</p>
      <RecipeCardForm onSave={onSave} />
    </div>
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
