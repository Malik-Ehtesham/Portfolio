import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';

const Projects = () => {
  return (
    <div className="font-balooBhai flex h-screen flex-col justify-between">
      <Navbar />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Projects;
