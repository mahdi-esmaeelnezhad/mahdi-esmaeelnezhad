import { I18nProvider } from './i18n';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Desk } from './components/Desk';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { OpenSource } from './components/OpenSource';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="main">
        <Desk />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Experience />
        <Education />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
