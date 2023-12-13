import Header from "../components/headerComponents/Header";
import Footer from "../components/footerComponents/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <p>HIER KOMMT DIE MAIN SECTION</p>
      </main>
      <Link to="/gin">Gin Seite</Link>
      <Link to="/vodka">Vodka Seite</Link>
      <Footer />
    </>
  );
};

export default Home;
