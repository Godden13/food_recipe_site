import './Hero.css';
import achu from '../../assets/achu.png';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-writeUp">
        <h1>Try new recipes and create new ones from Pearl Recipes</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eaque
          dignissimos repellat distinctio, saepe in rem. A earum illo voluptatum
          sed sint necessitatibus dolorem dolores.
        </p>
      </div>
      <div className="hero-photo">
        <img src={achu} alt="achu" className="hero-img" />
      </div>
    </div>
  );
}
