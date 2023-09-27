import EmailImage from '../../utils/Icons/Email.png';
import TelephoneImage from '../../utils/Icons/telephone.jpg';
import LocationImage from '../../utils/Icons/Location.png';
import SocialDetails from '../SocialDetails/SocialDetails';

const ContactDetails = () => {
  return (
    <div className=" col-span-4 sm:col-span-2 lg:col-span-1 sm:my-20 mx-auto">
      <div className="flex my-3">
        <img
          src={EmailImage}
          className="w-10 rounded-full m-3 bg-red-500 p-1 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        />
        <p className="text-white mx-2 my-4 text-lg truncate">
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
      <SocialDetails />
    </div>
  );
};

export default ContactDetails;
