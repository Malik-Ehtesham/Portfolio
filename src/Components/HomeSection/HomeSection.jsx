import ProfileImage from "../../utils/Pictures/profile.jpg";
import "./HomeSection.css"
const HomeSection = () => {
  return (
    <div className=" justify-evenly space-y-3 p-2 sm:flex overflow-auto text-neutral-50">
      <div className="flex justify-center">
        <img
          src={ProfileImage}
          className="w-40 rounded-full border-4 border-red-500 sm:w-60 "
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
   
      </div>
    </div>
  );
};

export default HomeSection;0
