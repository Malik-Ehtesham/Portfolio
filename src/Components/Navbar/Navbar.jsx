import { Link } from 'react-scroll';
import Hamburger from '../../utils/Icons/Hamburger.png';
const Navbar = () => {
  return (
    <div className="drawer  absolute top-0  sticky z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-end">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost drawer-label m-2"
        >
          <img
            src={Hamburger}
            fill="none"
            className="inline-block w-8 h-8 bg-slate"
          />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <li>
            <Link
              to="hero"
              activeClass="text-red-500"
              spy={true}
              smooth={true}
              // offset={-30}
              className=" cursor-pointer  text-2xl hover:underline hover:text-red-500 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              activeClass="text-red-500"
              spy={true}
              smooth={true}
              offset={-10}
              className=" cursor-pointer text-2xl hover:underline hover:text-red-500 "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="text-red-500"
              spy={true}
              smooth={true}
              offset={-60}
              className=" cursor-pointer text-2xl hover:underline hover:text-red-500 "
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
