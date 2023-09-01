import ProjectCard from '../ProjectCard/ProjectCard';

import ecommerce from '../../utils/ProjectsImages/e-commerce.png';
import Github from '../../utils/ProjectsImages/Github.svg';
import Portfolio from '../../utils/ProjectsImages/Portfolio.png';
import Weather from '../../utils/ProjectsImages/Weather.jpg';

const ProjectsSection = () => {
  return (
    <div className="flex justify-around  flex-wrap overflow-auto gap-x-40 gap-y-5 ">
      <ProjectCard
        image={ecommerce}
        title="E-Commerce App"
        link="https://e-commerce-shop-it.vercel.app/"
      />
      <ProjectCard
        image={Github}
        title="Github Profile Finder"
        link="https://voluble-fairy-094e6c.netlify.app/"
      />
      <ProjectCard
        image={Portfolio}
        title="Personal Portfolio"
        link="https://portfolio-ehtesham.vercel.app/"
      />
      <ProjectCard
        image={Weather}
        title="Simple Weather App"
        link="https://whimsical-klepon-62143a.netlify.app/"
      />
    </div>
  );
};

export default ProjectsSection;
