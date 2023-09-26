import BlogCard from '../BlogCard/BlogCard';

const BlogSection = () => {
  return (
    <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  ">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogSection;
