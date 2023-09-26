import ContactSection from '../../Components/ContactSection/ContactSection';
import Footer from '../../Components/Footer/Footer';
import HomeSection from '../../Components/HomeSection/HomeSection';
import Navbar from '../../Components/Navbar/Navbar';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import SkillsSection from '../../Components/SkillsSection/SkillsSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
