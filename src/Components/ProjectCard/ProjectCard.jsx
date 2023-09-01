import './ProjectCard.css';

import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <div className="card flex flex-col justify-around items-center w-36 h-56 sm:w-48 sm:h-60">
      <img
        src={props.image}
        className="z-10 bg-white  w-32 sm:w-40 rounded-xl"
      />
      <Link
        to={props.link}
        target="_blank"
        className="text-red-100 text-center z-10 text-md text-semibold mt-3 hover:underline hover:text-red-500"
      >
        {props.title}
      </Link>
    </div>
  );
};

export default ProjectCard;
