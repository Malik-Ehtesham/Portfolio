import './SkillCard.css';

const SkillCard = (props) => {
  return (
    <div className="container  flex flex-col justify-center items-center w-36 h-56 sm:w-48 sm:h-60">
      <div className="box">
        <img src={props.image} className="m-auto" />
        <p className="text-xl text-bold text-center text-red-500 ">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
