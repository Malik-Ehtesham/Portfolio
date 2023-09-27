import ContactSection from '../../Components/ContactSection/ContactSection';
import Footer from '../../Components/Footer/Footer';
import HomeSection from '../../Components/HomeSection/HomeSection';
import Navbar from '../../Components/Navbar/Navbar';
import MUIDrawer from '../../Components/MUIDrawer/MUIDrawer';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import SkillsSection from '../../Components/SkillsSection/SkillsSection';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const Home = () => {
  return (
    <div className="static ">
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
