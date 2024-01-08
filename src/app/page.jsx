import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import EventTime from "./components/EventTime.jsx";
import About from "./components/About.jsx";
import Participants from "./components/Participants.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <EventTime />
      <About />
      <Participants />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
