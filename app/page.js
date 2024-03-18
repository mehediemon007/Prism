import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Mentors from "./components/Mentors";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <section id='mentors' className='pre-mentors bg-slate-600'>
          <div className="container pr-0">
            <Mentors/>
          </div>
        </section>
        <Faq/>
      </main>
      <Footer/>
    </>
    
  );
}