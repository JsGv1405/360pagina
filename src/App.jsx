import React from "react";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Blogs from "./sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import Starter2 from "./sections/Starter2";
import Outsourcing from "./sections/Outsourcing";
import Entregables from "./sections/Entregables";
import Cotiza from "./sections/Cotiza";
import Nuestrosclientes from "./sections/Nuestrosclientes";
import Home from "./sections/Home";
import Outsourcing1 from "./pages/servicios/outsourcing/Outsourcing1";
import Landing from "./sections/Landing";
import Nosotros from "./pages/nosotros/Nosotros";
import Consultoria from "./pages/servicios/consultoria/Consultoria";
import Asesoria from "./pages/servicios/asesoria/Asesoria";
import { motion } from "framer-motion";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/outsourcing1" element={<Outsourcing1/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/consultoria" element={<Consultoria/>}/>
        <Route path="/asesoria" element={<Asesoria/>}/>
        <Route path="/landing" element={<Landing/>}/>
      </Routes>
{/* 
      <Starter />
      <About />
      <Why />
      <Starter2 />

      <Blogs />
      <Outsourcing/>
      <Entregables/>
      <Cotiza/>
      <Nuestrosclientes/>
      <Footer /> */}

    </motion.div>
  );
}

export default App;
