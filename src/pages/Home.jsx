import Header from "../components/headerComponents/Header";
import Footer from "../components/footerComponents/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Link to="/rum">Rum</Link>
        <Link to="/alkFrei">Alkohol Freie</Link>
        <p>HIER KOMMT DIE MAIN SECTION</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
