import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Collections from './components/Collections';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Heritage />
      <Expertise />
      <Services />
      <Collections />
      <Gallery />
      <Appointment />
      <Footer />
    </div>
  );
}
