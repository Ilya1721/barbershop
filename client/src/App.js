import React from "react";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Services from "./components/Services";
import Works from "./components/Works";
import Barbers from "./components/Barbers";
import Contacts from "./components/Contacts";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Image />
      <Services />
      <Works />
      <Barbers />
      <Contacts />
    </React.Fragment>
  );
}

export default App;
