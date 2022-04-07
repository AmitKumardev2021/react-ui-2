import React from "react";
import Cloud from "./components/cloud/Cloud";
import Data from "./components/data/Data";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero/>
      <Data />
      <Cloud />
      <Footer />
    </React.Fragment>
  );
}

export default App;
