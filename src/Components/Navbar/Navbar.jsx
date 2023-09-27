import { Link } from 'react-scroll';
import Hamburger from '../../utils/Icons/Hamburger.png';
import SocialDetails from '../SocialDetails/SocialDetails';
const Navbar = () => {
  return (
    <div className="drawer   top-0   fixed   z-40">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-end">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost drawer-label  m-2"
        >
          <img
            src={Hamburger}
            // eslint-disable-next-line react/no-unknown-property
            fill="none"
            className="inline-block w-8 h-8 bg-slate"
          />
        </label>
      </div>
      <div className="drawer-side  ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex justify-between">
          <div className="flex justify-between relative">
            <ul className=" ">
              {/* Sidebar content here */}

              <li>
                <Link
                  to="Home"
                  activeClass="text-red-500"
                  spy={true}
                  smooth={true}
                  className=" cursor-pointer text-2xl hover:underline hover:text-red-500 "
                >
                  {' '}
                  <div className=" drawer-toggle"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="About"
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
                  to="Contact"
                  activeClass="text-red-500"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  className=" cursor-pointer text-2xl hover:underline hover:text-red-500 "
                >
                  Contact Me
                </Link>
              </li>
            </ul>{' '}
            <label
              htmlFor="my-drawer"
              className="absolute top-0 right-0 drawer-overlay p-6 cursor-pointer"
            ></label>
            <button className="btn btn-square btn-outline ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <SocialDetails />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
