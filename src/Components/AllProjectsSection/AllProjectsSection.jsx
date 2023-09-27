import ecommerce from '../../utils/ProjectsImages/e-commerce.png';
import Github from '../../utils/ProjectsImages/Github.svg';
import Portfolio from '../../utils/ProjectsImages/Portfolio.png';
import Weather from '../../utils/ProjectsImages/Weather.jpg';
import Home from '../../utils/Icons/Home.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';

const AllProjectsSection = () => {
  return (
    <>
      <div className="bg-rose-600 p-4 mb-10">
        <Link
          to="/"
          className="  btn btn-circle btn-error transition ease-in   hover:-translate-y-1 hover:scale-110 duration-150 "
        >
          <img src={Home} />
        </Link>
        <p className="text-white  font-black text-center text-4xl sm:text-5xl  mb-10">
          PROJECTS
        </p>
      </div>
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
        />{' '}
        <ProjectCard
          image={Weather}
          title="Wather App"
          link="https://whimsical-klepon-62143a.netlify.app/"
        />
      </div>
    </>
  );
};

export default AllProjectsSection;
