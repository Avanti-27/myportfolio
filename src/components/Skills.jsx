const Skills = () => {
  return (
    <div>
      <h1 className="text-6xl mx-12 p-2 text-center mt-32 mb-10">Skills</h1>
      <div
        id="skills"
        className="p-5 mx-10 grid grid-cols-3 gap-20 justify-items-center text-2xl"
      >
        <img
          src="https://store-images.s-microsoft.com/image/apps.9292.f7586ead-cd6c-4334-ab74-e72395afdcb9.4de59ba4-5981-4862-b898-709027028523.b9793569-c375-4a5b-81d9-e5f53d8c96fc"
          alt="React"
          className="w-40"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s"
          alt="HTML"
          className="w-40"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsHHeRClbIikov7gqkTfGt7Rfy9kBZDVmWiWA6FBrnQ&s"
          alt="CSS"
          className="w-60"
        />
        <img
          src="https://thesafety.us/images/articles/javascript-logo.png"
          alt="Javascript"
          className="w-80 ml-[600px] my-16"
        />
        <img
          src="https://assets.weforum.org/organization/image/y30KOUBM0ecOq2j35IHNv7ZGPyT5Qc5R2Vea4V1IDEQ.jpg"
          alt=""
          className="w-80 ml-[600px]"
        />
      </div>
    </div>
  );
};

export default Skills;
