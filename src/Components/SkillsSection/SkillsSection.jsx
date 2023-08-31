import SkillCard from '../SkillCard/SkillCard';
import MongoDb from '../../utils/Icons/MongoDb.png';
import nodeJs from '../../utils/Icons/nodeJs.png';
import Tailwind from '../../utils/Icons/Tailwind.png';
import ExpressJS from '../../utils/Icons/ExpressJS.png';
import reactJs from '../../utils/Icons/reactjs.png';
const SkillsSection = () => {
  return (
    <div className="flex justify-around  flex-wrap  gap-x-40 gap-y-5 ">
      <SkillCard logo={MongoDb} title="MongoDB" />
      <SkillCard logo={nodeJs} title="NodeJS" />
      <SkillCard logo={Tailwind} title="Tailwind" />
      <SkillCard logo={ExpressJS} title="ExpressJS" />
      <SkillCard logo={reactJs} title="ReactJS" />
    </div>
  );
};

export default SkillsSection;
