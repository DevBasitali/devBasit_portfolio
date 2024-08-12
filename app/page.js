
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroBanner";
import About from "./_pages/About";
import Services from "./_pages/Services";
import Skill from "./_pages/Skill";
import Footer from "./_components/Footer";
import Projects from "./_pages/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <Services />
      <Skill />
      <Projects/>
      <Footer/>
    </>
  );
}
