import { RecipeCardList } from "../../components/RecipeCard";
import { DUMMY_RECIPES } from "../../lib/Recipe";
import "./home.css";

export const Home = () => {
  return (
    <div style={style}>
      <h1>🍲 Searo</h1>
      <p>Your recipes, hot to go</p>
      <div>
      <input type="text" placeholder="Search recipes" />
      <button>🔎</button>
      <button>➕</button>
      </div>
      <RecipeCardList recipes={DUMMY_RECIPES} />
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
