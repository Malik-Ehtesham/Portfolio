import SkillCard from '../SkillCard/SkillCard';
import MongoDb from '../../utils/Icons/MongoDb.png';
import nodeJs from '../../utils/Icons/nodeJs.png';
import Tailwind from '../../utils/Icons/Tailwind.png';
import ExpressJS from '../../utils/Icons/ExpressJS.png';
import reactJs from '../../utils/Icons/reactjs.png';
import Bootstrap from '../../utils/Icons/Bootstrap.png';
import Canva from '../../utils/Icons/Canva.png';
const SkillsSection = () => {
  return (
    <div className="flex justify-around  flex-wrap overflow-auto gap-x-40 gap-y-5  m-3">
      <SkillCard image={MongoDb} title="MongoDB" />
      <SkillCard image={ExpressJS} title="ExpressJS" />
      <SkillCard image={reactJs} title="ReactJS" />
      <SkillCard image={nodeJs} title="NodeJS" />
      <SkillCard image={Tailwind} title="Tailwind" />
      <SkillCard image={Bootstrap} title="Bootstrap" />
      <SkillCard image={Canva} title="Canva" />
    </div>
  );
};

export default SkillsSection;
