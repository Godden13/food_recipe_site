import './App.css';
import Landing from './components/LandingPage';
import meal1 from './assets/achu.png';
import Recipes from './components/recipes/Recipes';
import RecipeContext from './components/RecipeContext';
import { useState } from 'react';

const getDataFromLS = () => {
  const data = localStorage.getItem('meals');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [meals, setMeals] = useState(getDataFromLS);

  return (
    <RecipeContext.Provider value={{ wallets: meals, setMeals }}>
      <div className="App">
        <Landing />
      </div>
    </RecipeContext.Provider>
  );
}

export default App;
