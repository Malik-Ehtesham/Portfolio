import EmailImage from '../../utils/Icons/Email.png';
import TelephoneImage from '../../utils/Icons/telephone.jpg';
import LocationImage from '../../utils/Icons/Location.png';
import XImage from '../../utils/Icons/X.png';
import InstaImage from '../../utils/Icons/Insta.png';
import FacebookImage from '../../utils/Icons/Facebook.png';
import GithubImage from '../../utils/Icons/Github.png';
import FiverrImage from '../../utils/Icons/Fiverr.png';
const ContactDetails = () => {
  return (
    <div className=" col-span-4 sm:col-span-2 lg:col-span-1 sm:my-20 mx-auto">
      <div className="flex my-3">
        <img
          src={EmailImage}
          className="w-10 rounded-full m-3 bg-red-500 p-1 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        />
        <p className="text-white mx-2 my-4 text-lg">
          ehteshamzahid313@gmail.com
        </p>
      </div>
      <div className="flex my-3">
        <img
          src={TelephoneImage}
          className="w-10 rounded-full m-3 bg-red-500 p-1 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        />
        <p className="text-white mx-2 my-4 text-lg">+92 3080554483</p>
      </div>
      <div className="flex my-3">
        <img
          src={LocationImage}
          className="w-10 rounded-full m-3 bg-red-500 p-1 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        />
        <p className="text-white mx-2 my-4 text-lg">Lahore, Pakistan</p>
      </div>

      <div className="flex">
        <a
          href="https://github.com/Malik-Ehtesham"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={GithubImage}
            className="w-10 rounded-full m-3 bg-red-500 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200"
          />
        </a>
        <a
          href="https://twitter.com/thedeveloperbo1"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={XImage}
            className="w-10 rounded-full m-3 bg-red-500 p-1 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/the_developer_boyy/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={InstaImage}
            className="w-10 rounded-full m-3 bg-red-500 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61551498785683"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={FacebookImage}
            className="w-10 rounded-full m-3 bg-red-500 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200"
          />
        </a>
        <a
          href="https://www.fiverr.com/s/VZedYz"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={FiverrImage}
            className="w-10 rounded-full m-3 bg-red-500 p-0.5 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
