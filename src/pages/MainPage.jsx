import React , {useEffect} from "react";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import Education from "../components/Education";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Project from "../components/Project";

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <Education />
      <Project />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
