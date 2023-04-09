import Hero from './hero/Hero';
import './LandingPage.css';
import NavBar from './NavBar/NavBar';
import Recipes from './recipes/Recipes';
import Reviews from './reviews/Reviews';

export default function Landing() {
  return (
    <div className="landing-page">
      <NavBar />
      <Hero />
      {/* <Reviews /> */}
      {/* <Recipes /> */}
    </div>
  );
}
