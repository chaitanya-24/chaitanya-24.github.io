import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Work />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
