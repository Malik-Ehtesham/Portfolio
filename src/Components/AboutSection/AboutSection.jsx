
import ProfileImage from "../../utils/Pictures/profile.jpg";

const AboutSection = () => {
  return (
    <div className=" grid grid-cols-12 gap-4 space-y-3 p-2 ">
      <div className="flex justify-center col-span-12 sm:col-span-5">
        <img
          src={ProfileImage}
          className="w-40 rounded-md border-4 border-orange-300 sm:w-80 "
        />
      </div>
      <div className="flex flex-col sm:py-16 col-span-12 sm:col-span-6 ">
        <p className="text-center  text-md sm:text-lg">Welcome to my portfolio! I'm <strong>Ehtesham Zahid</strong> , a dedicated<strong>MERN stack developer</strong>  with a passion for crafting digital experiences that combine functionality and aesthetics. With a strong foundation in web development, I thrive on bringing ideas to life through code and creativity. Beyond my technical expertise, I find balance and inspiration in various interests. <strong>When I'm not immersed in programming, you'll likely find me at the gym,</strong> pushing my limits and striving for personal growth. My enthusiasm for learning extends beyond technology, as I'm also deeply engaged in <strong>studying and exploring the teachings of Islam.</strong>  This portfolio showcases not only my professional journey and accomplishments but also reflects my diverse interests that shape who I am. Join me on this digital adventure where code, curiosity, and personal pursuits converge.</p>
      </div>
    </div>
  )
}
export default AboutSection;