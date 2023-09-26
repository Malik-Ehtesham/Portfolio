import ProfileImage from '../../utils/Pictures/profile.jpg';

import { Link } from 'react-scroll';
import './HomeSection.css';

const HomeSection = () => {
  return (
    <div
      id="hero"
      className=" justify-center sm:justify-evenly sm:flex-row space-y-3 p-2 flex flex-col overflow-auto text-neutral-50 min-h-screen  items-center my-5"
    >
      <div className="flex justify-center">
        <img
          src={ProfileImage}
          className="w-48  rounded-full border-4 border-red-500 sm:w-64 md:w-80 "
        />
      </div>
      <div className="flex flex-col sm:py-16">
        <div className="flex justify-center">
          <h1 className=" text-center text-xl sm:text-2xl lg:text-3xl ">
            Hi,my name is
          </h1>
          <strong className=" text-center text-xl sm:text-2xl lg:text-3xl mx-2 italic text-red-600 animate-bounce">
            Ehtesham Zahid
          </strong>
        </div>

        <p className="my-1 text-center text-xl sm:text-2xl lg:text-3xl ">
          I design and develop Web Apps
        </p>
        <div className="my-4 flex justify-center ">
          <button
            // href="../../utils/Files/EhteshamCv.pdf"
            // download="resume"
            // target="_blank"
            // rel="noreferrer"

            className="btn btn-outline btn-error rounded-full mx-3"
          >
            Download CV
          </button>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            className="btn btn-neutral text-white hidden md:inline  rounded-full btn-md p-4"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
