import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Mentors from "./components/Mentors";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <Partners/>
        <section id='mentors' className='pre-mentors bg-slate-600'>
          <div className="container pr-0">
            <Mentors/>
          </div>
        </section>
        <section id="fqa" className="py-40">
          <Faq/>
        </section>
      </main>
      <Footer/>
    </>
    
  );
}
