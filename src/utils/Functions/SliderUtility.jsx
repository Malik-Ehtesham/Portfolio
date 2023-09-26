import { SwiperSlide } from 'swiper/react';
import Marquee from 'react-fast-marquee';

export const SliderUtility = (image, title) => {
  return (
    <SwiperSlide className="h-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-red-50 w-40 shadow-lg shadow-red-500/50 p-2 rounded-lg flex justify-center  items-center flex-col ">
      <img
        src={image}
        className=" rounded-1 h-28 w-28"
        // style={{ width: '100%', height: '100%' }}
        alt="..."
      />
      <p className="text-black text-center my-2 font-bold ">{title}</p>
    </SwiperSlide>
  );
};
