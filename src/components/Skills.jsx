const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl m-10 md:text-6xl md:mx-12 p-2 text-center md:mt-32 mb-10 mx-auto">
        Skills
      </h1>
      <div
        id="skills"
        className="gap-8 md:p-5 mx-10 grid grid-cols-1 md:grid-cols-3 md:gap-20 justify-items-center text-2xl"
      >
        <img
          src="https://store-images.s-microsoft.com/image/apps.9292.f7586ead-cd6c-4334-ab74-e72395afdcb9.4de59ba4-5981-4862-b898-709027028523.b9793569-c375-4a5b-81d9-e5f53d8c96fc"
          alt="React"
          className="w-28 md:w-40"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s"
          alt="HTML"
          className="w-32 md:w-40"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsHHeRClbIikov7gqkTfGt7Rfy9kBZDVmWiWA6FBrnQ&s"
          alt="CSS"
          className="w-52 md:w-60"
        />
        <img
          src="https://thesafety.us/images/articles/javascript-logo.png"
          alt="Javascript"
          className="w-48 md:w-80 md:ml-[600px] md:my-16"
        />
        <img
          src="https://assets.weforum.org/organization/image/y30KOUBM0ecOq2j35IHNv7ZGPyT5Qc5R2Vea4V1IDEQ.jpg"
          alt=""
          className="w-48 md:w-80 md:ml-[600px]"
        />
      </div>
    </div>
  );
};

export default Skills;
