import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HomeSection from "../../Components/HomeSection/HomeSection";

const Home = () => {
  return (
    <div className="font-balooBhai flex h-screen flex-col justify-between">
      <Navbar />
      <HomeSection />
      <Footer />
    </div>
  );
};

export default Home;
