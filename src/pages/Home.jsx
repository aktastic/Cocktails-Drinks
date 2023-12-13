import { Link } from "react-router-dom";
import Header from "../components/headerComponents/Header";
import Footer from "../components/footerComponents/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Link to="/scotch"> SCOTCH</Link>
        <Link to="/randomdrink">Random DRINK</Link>
      </main>
      <Link to="/gin">Gin Seite</Link>
      <Link to="/vodka">Vodka Seite</Link>
      <Footer />
    </>
  );
};

export default Home;
