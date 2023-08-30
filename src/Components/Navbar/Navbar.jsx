import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center  p-2 text-xl  font-semibold text-neutral-100  lg:text-2xl">
      
    
        <ul className="flex space-x-4 sm:space-x-8 ">
          <li>
            <Link to="/" className=" cursor-pointer hover:underline hover:text-orange-400">Home</Link>
          </li>
          <li>
            <Link to="/projects" className=" cursor-pointer hover:underline  hover:text-orange-400">Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="cursor-pointer hover:underline  hover:text-orange-400">Skills</Link>
          </li>
        </ul>
      
    </nav>
  );
};

export default Navbar;
