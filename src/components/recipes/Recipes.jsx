import './Recipes.css';

export default function Recipes() {
  const getDataFromLS = () => {
    const data = localStorage.getItem('recipe');
    if (data) {
      return JSON.parse([data]);
    }
    return [];
  };
  const recipe = getDataFromLS();

  return (
    <div className="recipes" id="recipes">
      {recipe?.map((recipe) => {
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
