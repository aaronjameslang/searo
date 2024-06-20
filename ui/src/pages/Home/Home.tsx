import { useEffect, useState } from "react";
import { RecipeCardList } from "../../components/RecipeCard";
import { Recipe } from "../../lib/Recipe";
import "./home.css";

export const Home = () => {
  const [term, setTerm] = useState<string>("")
  const [recipes, setRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch(`http://localhost:3080/recipes?search=${term}`)
    .then((response) => response.json())
    .then(rz => { setRecipes(rz.results) })
  }, [term])
  return (
    <div style={style}>
      <h1>🍲 Searo</h1>
      <p>Your recipes, hot to go</p>
      <div>
      <input type="text" placeholder="Search recipes" onChange={e => setTerm(e.target.value)} value={term}/>
      <button>🔎</button>
      <button>➕</button>
      </div>
      <RecipeCardList recipes={recipes} />
    </div>
  );
};

// TODO put a spinner here while the page is loading

const style = {
  maxWidth: "800px",
display: "flex",
justifyContent: "center",
 alignItems: "center",
 flexDirection: "column",
 margin: "auto",
} as const
