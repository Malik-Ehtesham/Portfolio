import './ProjectCard.css';

import ProfileImage from '../../utils/Pictures/profile.jpg';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <div className="card flex flex-col  w-36 h-56 sm:w-48 sm:h-60">
      <img src={ProfileImage} className="z-10  w-32 sm:w-40 rounded-xl" />
      <Link className="text-red-100 text-center z-10 text-md text-semibold mt-3 hover:underline hover:text-red-500">
        E-Commerce Website
      </Link>
    </div>
  );
};

export default ProjectCard;
