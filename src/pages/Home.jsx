import { Link } from "react-router-dom";
import Header from "../components/headerComponents/Header";
import Footer from "../components/footerComponents/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Link to="/scotch"> SCOTCH</Link>
        <Link to="/randomdrink">Random DRINK</Link>
        <Link to="/gin">Gin Seite</Link>
        <Link to="/vodka">Vodka Seite</Link>
        <Link to="/rum">Rum</Link>
        <Link to="/alkFrei">Alkohol Freie</Link>
        <Link to="/localstorage">Add own Cocktail</Link>
      </main>

      <Footer />
    </>
  );
};

export default Home;
