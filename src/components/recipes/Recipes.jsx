import { useState } from 'react';
import './Recipes.css';

export default function Recipes() {
  const getDataFromLS = () => {
    const data = localStorage.getItem('recipe');
    console.log(data);
    if (data) {
      return JSON.parse([data]);
    }
    return [];
  };
  const [recipe, setRecipe] = useState(getDataFromLS);
  const meal = Object.keys(recipe);
  console.log(recipe.name);

  return (
    <div className="recipes" id="recipes">
      {meal?.map((recipe) => {
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
