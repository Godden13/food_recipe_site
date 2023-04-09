import { useContext } from 'react';
import RecipeContext from '../RecipeContext';
import './Recipes.css';

export default function Recipes() {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const meal = Object.keys(recipes);

  return (
    <div className="recipes" id="recipes">
      {meal.map((recipe) => {
        return (
          <div className="recipe" key={recipe.name}>
            <img src={recipe.src} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
