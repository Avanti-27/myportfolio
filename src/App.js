import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="">
      <Header />
      <Body />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
