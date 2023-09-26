import './BlogCard.css';
const BlogCard = () => {
  return (
    <div className="">
      <div className="cardb bg-neutral-100">
        <img
          src="https://source.unsplash.com/user/frantic/300x200"
          alt="vitateach"
        />
        <div className="cardb-body">
          <h6>Vitateach</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sit?
            Nesciunt porro.adipisicing elit. Sed, sit? Nesciunt porro.
          </p>
          <div>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
