import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import { Gents, Ladies } from "../data"; // Corrected import

import WomenCollection from "../components/WomenCollection"; // Ensure correct default import

const MainPage = () => {
  console.log(Gents);

  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [ladiesFashion, setLadiesFashion] = useState(Ladies); // Use 'Ladies' instead of 'ladies'

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomenCollection ladiesFashion={ladiesFashion} /> {/* Pass ladiesFashion prop correctly */}
      <Footer />
    </div>
  );
};

export default MainPage;
