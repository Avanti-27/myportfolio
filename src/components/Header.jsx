const Header = () => {
  return (
    <div className="flex justify-between text-white text-2xl bg-gradient-to-r from-sky-500 to-indigo-500">
      <div>
        <img
          src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
          alt="logo"
          className="w-32 p-4 m-4"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5">
          <li className="px-8 hover:text-3xl">
            <a href="#about">About Me</a>
          </li>
          <li className="px-8 hover:text-3xl">
            <a href="#projects">Projects</a>
          </li>
          <li className="px-8 hover:text-3xl">
            <a href="#skills">Skills</a>
          </li>
          <li className="px-8 hover:text-3xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
