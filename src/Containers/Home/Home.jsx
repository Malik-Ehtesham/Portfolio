import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HomeSection from "../../Components/HomeSection/HomeSection";
// import  AboutSection  from "../../Components/AboutSection/AboutSection";
const Home = () => {
  return (
    <div className="font-balooBhai flex h-screen flex-col justify-between">
      <Navbar />
      <HomeSection />
      {/* <AboutSection /> */}
      <Footer />
    </div>
  );
};

export default Home;
