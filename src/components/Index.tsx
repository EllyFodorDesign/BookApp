import { Contact } from "lucide-react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
