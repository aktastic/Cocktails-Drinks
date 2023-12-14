import { Link } from "react-router-dom";
import Header from "../components/headerComponents/Header";
import Footer from "../components/footerComponents/Footer";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Link to="/gin">
          <div className="gin_link">
            <h2>Gin</h2>
            <p>Discover all Drinks with Gin</p>
          </div>
        </Link>
        <Link to="/vodka">
          <div className="vodka_link">
            <h2>Vodka</h2>
            <p>Discover all Drinks with Vodka</p>
          </div>
        </Link>
        <Link to="/scotch">
          <div className="scotch_link">
            <h2>Scotch</h2>
            <p>Discover all Drinks with Vodka</p>
          </div>
        </Link>
        <Link to="/rum">
          <div className="rum_link">
            <h2>Rum</h2>
            <p>Discover all Drinks with Rum</p>
          </div>
        </Link>
        <Link to="/randomdrink">
          <div className="random_link">
            <h2>Random</h2>
            <p>Discover a random Cocktail</p>
          </div>
        </Link>
        <Link to="/alkFrei">
          <div className="alkFrei_link">
            <h2>Non-alcoholic</h2>
            <p>Discover delicious Drinks without alcohol</p>
          </div>
        </Link>

        <Link to="/localstorage">
          <div>
            <h2>Add own Cocktail</h2>
          </div>
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default Home;
