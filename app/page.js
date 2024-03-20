import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Partners from "./components/Partners";
import Features from "./components/Features";
import About from "./components/About";
import ScrollTop from "./elements/ScrollTop";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <Partners/>
        <section id="about" className="pt-12 md:pt-16 xl:pt-32 scroll-mt-8 lg:scroll-mt-16">
          <div className="container">
            <About/>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <Features/>
          </div>
        </section>
        <section id='reviews' className="pt-12 md:pt-16 xl:pt-32">
          <div className="container lg:pr-0">
            <Reviews/>
          </div>
        </section>
        <section id="faq" className="py-12 md:py-16 xl:py-32 scroll-mt-8 lg:scroll-mt-16">
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
