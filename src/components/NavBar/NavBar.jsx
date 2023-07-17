import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="app-title">
        <h3 id="name">
          PeArL <span>rEcIpEs</span>
        </h3>
      </div>
      <div className="app-nav">
        <a href="/">Home</a>
        <a href="#reviews">Reviews</a>
        <a href="#recipes">Recipes</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="signup">
        <p>search</p>
        <p>signUp</p>
      </div>
    </div>
  );
}
