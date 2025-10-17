import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/variables.css";
import Layout from "./Layout";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Books from "./components/Books";

import { GlobalStyle } from "./styles/GlobalStyle";
import Test from "./pages/Test";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
           <Route path="/hometest" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
