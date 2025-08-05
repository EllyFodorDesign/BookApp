import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styled-components";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
