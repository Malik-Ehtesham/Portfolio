// import './ProjectCard.css';

import { Link } from 'react-router-dom';
// import Imagee from '../../utils/ProjectsImages/Portfolio.png';

const ProjectCard = (props) => {
  return (
    // <Link
    //   to={props.link}
    //   target="_blank"
    //   className="card flex flex-col justify-around items-center w-36 h-56 sm:w-48 sm:h-60"
    // >
    //   <img
    //     src={props.image}
    //     className="z-10 bg-white  w-32 sm:w-40 rounded-xl"
    //   />
    //   <div className="text-red-100 text-center z-10 text-md text-semibold mt-3 hover:underline hover:text-red-500">
    //     {props.title}
    //   </div>
    // </Link>
    <div className="card card-compact w-64 sm:w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={props.image} className="w-48" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{props.title}</h2>

        <div className="card-actions justify-end">
          <Link
            to={props.link}
            target="_blank"
            className="btn  btn-error hover:text-red-100"
          >
            See Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
