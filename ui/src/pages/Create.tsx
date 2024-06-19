import { RecipeCardForm } from "../components/RecipeCardForm";

export const CreatePage = () => {
  // TODO clicking title should navigate to home
  function onSave() {
    // post to backend
    // redirect to home with pre-loaded search term
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
