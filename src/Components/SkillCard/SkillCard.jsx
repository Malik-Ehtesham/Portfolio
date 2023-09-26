import './SkillCard.css';

const SkillCard = (props) => {
  return (
    <div className="mx-10 h-40 transition ease-in hover:-translate-y-1 hover:scale-110 duration-150 bg-red-50 w-36 shadow-md shadow-red-400 p-2 rounded-lg flex justify-center  items-center flex-col ">
      <img
        src={props.image}
        className=" rounded-1 h-28 w-28"
        // style={{ width: '100%', height: '100%' }}
        alt="..."
      />
      <p className="text-black text-center my-2 font-bold ">{props.title}</p>
    </div>
  );
};

export default SkillCard;
