import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Mentors from "./components/Mentors";
import Partners from "./components/Partners";
import Features from "./components/Features";
import About from "./components/About";
import ScrollTop from "./elements/ScrollTop";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <Partners/>
        <section id="about" className="pt-32">
          <div className="container">
            <About/>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <Features/>
          </div>
        </section>
        <section id='mentors' className="pt-32">
          <div className="container pr-0">
            <Mentors/>
          </div>
        </section>
        <section id="fqa" className="py-32">
          <div className="container">
            <Faq/>
          </div>
        </section>
      </main>
      <Footer/>
      <ScrollTop/>
    </>
    
  );
}
