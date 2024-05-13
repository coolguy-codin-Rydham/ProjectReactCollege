import { createContext, useRef } from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import ParticlesComponent from "./Components/ParticlesContainer";
import Projects from "./Components/Projects";
import Reviews from "./Components/Reviews";
import Services from "./Components/Services";
export const RefCon = createContext(null);

function App() {
  const HeroRef = useRef(null);
  const ServicesRef = useRef(null);
  const ReviewsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const NewsRef = useRef(null);
  const ContactRef = useRef(null);
  const FooterRef = useRef(null);
  return (
    <RefCon.Provider
      value={{
        HeroRef,
        ServicesRef,
        ReviewsRef,
        ProjectsRef,
        NewsRef,
        ContactRef,
        FooterRef,
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        <ParticlesComponent id="main" />
        <Navbar />
        <Hero />
        <Services />
        <Reviews />
        <Projects />
        <News />
        <Contact />
        <Footer />
      </div>
    </RefCon.Provider>
  );
}

export default App;
