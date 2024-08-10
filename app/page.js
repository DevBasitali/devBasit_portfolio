import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroBanner";
import About from "./_pages/About";
import CTA from "./_pages/CTA";
import Services from "./_pages/Services";
import Skill from "./_pages/Skill";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <Services />
      <Skill />
      <CTA/>
      <Footer />
    </>
  );
}
