import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Portfolio from "../components/portfolio/Portfolio";
import Qualification from "../components/qualification/Qualification";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";


export default function () {
    return (
        <main className="main">
              <Home />
              <About />
              <Skills />
              <Services />
              <Qualification />
              <Portfolio />
              {/* <Testimonials /> */}
              <Contact />
            </main>
    )
}