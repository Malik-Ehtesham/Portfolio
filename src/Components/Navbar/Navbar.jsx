
const Navbar = () => {
  return (
    <nav className="flex justify-center  p-2 text-xl  font-semibold text-neutral-100  lg:text-2xl">
      
    
        <ul className="flex space-x-4 sm:space-x-8 ">
          <li>
            <a className=" cursor-pointer hover:underline hover:text-orange-400">Home</a>
          </li>
          <li>
            <a className=" cursor-pointer hover:underline  hover:text-orange-400">About</a>
          </li>
          <li>
            <a className=" cursor-pointer hover:underline  hover:text-orange-400">Contact Me</a>
          </li>
        </ul>
      
    </nav>
  );
};

export default Navbar;
