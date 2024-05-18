const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-white text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 header">
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <img
          src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
          alt="logo"
          className="w-32 p-2 m-2 md:w-56 md:m-4 md:p-4  logo"
        />
      </div>
      <div className="px-2 mx-2">
        <ul className="flex flex-col justify-center items-center text-center p-2 md:flex-row w-full m-5 md:w-auto">
          <li className="py-2 px-4 md:px-8 hover:text-3xl">
            <a href="#about">About Me</a>
          </li>
          <li className="py-2 px-4 md:px-8 hover:text-3xl">
            <a href="#projects">Projects</a>
          </li>
          <li className="py-2 px-4 md:px-8 hover:text-3xl">
            <a href="#skills">Skills</a>
          </li>
          <li className="py-2 px-4 md:px-8 hover:text-3xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
