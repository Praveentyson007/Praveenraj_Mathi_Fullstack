import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import "./App.css";
import { About } from "./Components/About/About";
import { Header } from "./Components/Header/Header";
import { ThemeContext } from "./Context/theme";
// import { Techstacks } from "./Components/About/Techstacks";
import { Github } from "./Components/About/Github";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <Github />
        {/* <section id="#projects">
          <Projects />
        </section> */}
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
