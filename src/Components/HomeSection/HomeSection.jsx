import ProfileImage from "../../utils/Pictures/Profile.jpg";
const HomeSection = () => {
  return (
    <div className=" justify-evenly space-y-3 p-2 sm:flex">
      <div className="flex justify-center">
        <img
          src={ProfileImage}
          className="w-40 rounded-full border-4 border-orange-300 sm:w-60"
        />
      </div>
      <div className="flex flex-col sm:py-16">
        <h1 className=" text-center text-xl sm:text-2xl lg:text-3xl">
          Hi,my name is
          <strong className="mx-2 italic text-orange-400">
            Ehtesham Zahid
          </strong>
        </h1>
        <p className="my-1 text-center text-xl sm:text-2xl lg:text-3xl">
          I design and develop Web Apps
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
