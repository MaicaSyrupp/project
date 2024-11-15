import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <About/>
      <Education/>
      <Hobbies/>
      <Contact/>
      <Footer/>
    </>
  );
}
