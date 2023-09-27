import ProjectCard from '../ProjectCard/ProjectCard';

import ecommerce from '../../utils/ProjectsImages/e-commerce.png';
import Github from '../../utils/ProjectsImages/Github.svg';
import Portfolio from '../../utils/ProjectsImages/Portfolio.png';

import ButtonImage from '../../utils/Icons/Button.png';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <>
      <p
        className="text-red-600 font-black text-center text-4xl sm:text-5xl  mb-20 mt-5"
        id="About"
      >
        MY PROJECTS
      </p>
      <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  items-center my-5">
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
      </div>
      <div className="flex justify-center  md:justify-end px-7 my-3 md:me-14">
        <Link
          to="/projects"
          className="btn btn-lg btn-outline btn-error rounded-full  "
        >
          See All
          <img src={ButtonImage} className="w-14 ms-2" />
        </Link>
      </div>
    </>
  );
};

export default ProjectsSection;
