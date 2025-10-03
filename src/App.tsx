import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Books from "./components/Books";
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      {/* 🚧 Banner at the top */}
      <div
        style={{
          background: "black",
          padding: "0.5rem",
          textAlign: "center",
          fontWeight: "normal",
          color: "white",
        }}
      >
        🚧 This site is under construction — more updates soon!
      </div>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
