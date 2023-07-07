import AddRecipe from './addRecipe/AddRecipe';
import Hero from './hero/Hero';
import './LandingPage.css';
import NavBar from './NavBar/NavBar';
import Recipes from './recipes/Recipes';

export default function Landing() {
  return (
    <div className="landing-page">
      <NavBar />
      <Hero />
      <Recipes />
      <AddRecipe />
    </div>
  );
}
