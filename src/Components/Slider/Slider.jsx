// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

// Import Swiper React components
import { Swiper } from 'swiper/react';
import Marquee from 'react-fast-marquee';

// Import Swiper styles
import 'swiper/css';

import Html from '../../utils/Icons/Html.png';
import Css from '../../utils/Icons/Css.webp';
import Javascript from '../../utils/Icons/Javascript.png';
import Bootstrap from '../../utils/Icons/Bootstrap.png';
import TailwindCss from '../../utils/Icons/Tailwind.png';
import ReactJS from '../../utils/Icons/ReactJs.png';
import NextJS from '../../utils/Icons/NextJS.png';
import NodeJS from '../../utils/Icons/NodeJS.png';
import ExpressJS from '../../utils/Icons/ExpressJS.png';
import MongoDB from '../../utils/Icons/MongoDB.png';
import { SliderUtility } from '../../utils/Functions/SliderUtility';
import SkillCard from '../SkillCard/SkillCard';

const Slider = () => {
  return (
    <Marquee pauseOnHover className="h-64 pt-20 w-full my-10" speed={100}>
      <SkillCard image={Html} title="Html" />
      <SkillCard image={Css} title="Css" />
      <SkillCard image={Javascript} title="Javascript" />
      <SkillCard image={Bootstrap} title="Bootstrap" />
      <SkillCard image={TailwindCss} title="TailwindCss" />
      <SkillCard image={ReactJS} title="ReactJS" />
      <SkillCard image={NextJS} title="NextJS" />
      <SkillCard image={NodeJS} title="NodeJS" />
      <SkillCard image={ExpressJS} title="ExpressJS" />
      <SkillCard image={MongoDB} title="MongoDB" />
    </Marquee>
    // <Swiper
    //   modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
    //   spaceBetween={80}
    //   slidesPerView={'auto'}
    //   // loop={true}
    //   // autoplay={{
    //   //   delay: 1500,
    //   //   disableOnInteraction: false,
    //   // }}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   navigation={true}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   className="h-64 pt-20 w-full my-10"
    // >
    //   <Marquee play={true}>
    //     {SliderUtility(Html, 'Html')}
    //     {SliderUtility(Css, 'Css')}
    //     {SliderUtility(Javascript, 'Javascript')}
    //     {SliderUtility(Bootstrap, 'Bootstrap')}
    //     {SliderUtility(TailwindCss, 'TailwindCss')}
    //     {SliderUtility(ReactJS, 'ReactJS')}
    //     {SliderUtility(NextJS, 'NextJS')}
    //     {SliderUtility(NodeJS, 'NodeJS')}
    //     {SliderUtility(ExpressJS, 'ExpressJS')}
    //     {SliderUtility(MongoDB, 'MongoDB')}
    //   </Marquee>
    // </Swiper>
  );
};
export default Slider;
