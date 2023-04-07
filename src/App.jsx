import React from "react";
import Footer from "./Components/FooterDiv/Footer";
import Jobs from "./Components/JobDiv/Jobs";
import Navbar from "./Components/NavBar/Navbar";
import Search from "./Components/SearchDiv/Search";
import Value from "./Components/ValueDiv/Value";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
