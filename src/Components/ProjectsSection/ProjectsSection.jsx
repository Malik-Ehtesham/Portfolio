import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsSection = () => {
  //  grid grid-cols-2 sm:grid-cols-4  p-2
  return (
    <div className="flex justify-around  flex-wrap  gap-x-40 gap-y-5 ">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard /> <ProjectCard /> <ProjectCard />
    </div>
  );
};

export default ProjectsSection;
