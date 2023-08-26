import ProfileImage from "../../utils/Pictures/profile.jpg";

const Navbar = () => {
  return (
    <nav className="flex justify-between  p-2 text-xl  font-semibold text-orange-400  lg:text-2xl">
      <div>
        <img src={ProfileImage} className="w-14 rounded-full  sm:w-16" />
      </div>
      <div className="m-auto">
        <ul className="flex space-x-4 sm:space-x-8 ">
          <li>
            <a className=" cursor-pointer hover:underline">Home</a>
          </li>
          <li>
            <a className=" cursor-pointer hover:underline">About</a>
          </li>
          <li>
            <a className=" cursor-pointer hover:underline">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
