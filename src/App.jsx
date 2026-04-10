import './index.css';
import { useCart } from './hooks/useCart.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Locations from './components/Locations.jsx';
import Catalog from './components/Catalog.jsx';
import Conventions from './components/Conventions.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

/**
 * App — Root dell'applicazione Ortopedia Salute.
 * Il custom hook useCart viene istanziato qui e passato come prop
 * ai componenti che ne hanno bisogno (Catalog, Contact), garantendo
 * uno stato condiviso del preventivo su tutta la pagina.
 */
export default function App() {
  const cart = useCart();

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Locations />
        <Catalog cart={cart} />
        <Conventions />
        <Testimonials />
        <FAQ />
        <Contact cart={cart} />
      </main>
      <Footer />
    </>
  );
}
