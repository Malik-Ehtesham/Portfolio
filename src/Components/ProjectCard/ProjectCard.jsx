import './ProjectCard.css';

import { Link } from 'react-router-dom';
// import Imagee from '../../utils/ProjectsImages/Portfolio.png';

const ProjectCard = (props) => {
  return (
    <div className="card cursor-pointer">
      <div className="card2 flex flex-col justify-center rounded-lg">
        <img src={props.image} className="h-40 m-2" />
        <p className="card-title text-white m-2">{props.title}</p>
        <div className="card-actions justify-end m-2">
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
