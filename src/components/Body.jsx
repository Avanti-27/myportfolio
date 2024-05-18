import { SocialIcon } from "react-social-icons";
import Header from "./Header";

const Body = () => {
  return (
    <div className="text-center mx-auto md:p-5 text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <Header />
      <div className="mt-10 p-1 md:mt-52">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text animate-fadein font-sans">
          Hi, I am Avanti Tatwawadi
        </h1>
        <h3 className="text-xl md:text-2xl p-4 font-bold text-gray-700 animate-fadeout">
          Aspiring Frontend Developer
        </h3>
        <p className="text-lg md:text-xl w-full p-1 m-1 md:w-3/12 my-0 mx-auto text-justify py-5 font-serif body">
          I am an enthusiatic working professional with over 2 years 10 months
          of experience in IT industry. Please find me using the below links:
        </p>
      </div>
      <div className="mb-10 md:mb-32 p-2 my-0 mx-auto">
        <SocialIcon
          url="https://github.com/Avanti-27"
          className="m-4"
          target="_blank"
        />
        <SocialIcon
          url="https://linkedin.com/in/avanti-tatwawadi-918a661b2"
          bgColor="black"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Body;
