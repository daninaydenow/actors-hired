import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div class="hero-container">
        <video autoPlay muted loop id="heroVideo">
          <source src="./hero_video.webm" type="video/webm" />
        </video>
        <div class="hero-attributes">
          <div class="hero-heading">
            <h5>Welcome to Actors Hired</h5>
          </div>
          <div class="hero-description">
            <p>World's first "casting director-free" platform!</p>
          </div>

          <Link to="/portfolios" class="hero-button">
            <i class="fas fa-play"></i> Hire Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
