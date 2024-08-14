
import Header from "./_components/Header";
import About from "./_pages/About";
import Services from "./_pages/Services";
import Skill from "./_pages/Skill";
import Footer from "./_components/Footer";
import Projects from "./_pages/Projects";
import HomePage from "./_pages/HomePage";
import Testimonal from "./_pages/Testimonal";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HomePage/>
      <About />
      <Services />
      <Skill />
      <Projects/>
      <Testimonal/>
      <Footer/>
    </div>
  );
}
