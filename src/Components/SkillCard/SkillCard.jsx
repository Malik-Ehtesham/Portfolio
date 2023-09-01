import './SkillCard.css';

const SkillCard = (props) => {
  return (
    <div className="container flex flex-col justify-around items-center  rounded-xl w-36 h-56 sm:w-48 sm:h-60">
      <div className="box  w-36 h-56 sm:w-48 sm:h-60">
        <img src={props.image} className="m-auto w-32 sm:w-40 rounded-xl" />
        <p className="text-xl text-bold text-center text-red-500 ">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
