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
      </main>
      <Footer />
    </>
  );
};

export default Home;
