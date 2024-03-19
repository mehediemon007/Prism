import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Mentors from "./components/Mentors";
import Partners from "./components/Partners";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <Partners/>
        <section id="features">
          <div className="container">
            <Features/>
          </div>
        </section>
        <section id='mentors' className='pre-mentors bg-slate-600'>
          <div className="container pr-0">
            <Mentors/>
          </div>
        </section>
        <section id="fqa" className="py-40">
          <div className="container">
            <Faq/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
    
  );
}
