import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SkillsSection from '../../Components/SkillsSection/SkillsSection';

const Skills = () => {
  return (
    <div className="font-balooBhai flex h-screen flex-col justify-between">
      <Navbar />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Skills;
