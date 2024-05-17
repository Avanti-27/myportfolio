import pic1 from "../utils/images/food-ordering-app.png";
import pic2 from "../utils/images/netflix-1.png";
import pic3 from "../utils/images/JS-Accordian.png";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <h1 className="text-6xl mx-12 my-20 text-center" id="projects">
        Projects
      </h1>
      <Project
        title="Food Ordering App"
        src={pic1}
        description="Developed a food delivery application inspired by Swiggy.
              Leveraging live APIs, Redux for state management, Tailwind for
              styling, and React Router DOM for navigation"
      />
      <Project
        title="Netflix Clone"
        src={pic2}
        description="Created a movie application resembling Netflix, integrating TMDB APIs for movie data, Firebase for authentication, and utilizing Tailwind for styling and Redux for state management. Additionally, React Router DOM ensures seamless navigation throughout the app."
      />
      <Project
        title="Accordian"
        src={pic3}
        description="Developed a Accordian using HTML, CSS and Javascript to add interactivity."
      />
    </div>
  );
};

export default Projects;
