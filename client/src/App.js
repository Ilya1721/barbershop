import React from "react";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Services from "./components/Services";
import Works from "./components/Works";
import Barbers from "./components/Barbers";
import Contacts from "./components/Contacts";
import Register from "./components/Register";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Image />
      <Services />
      <Works />
      <Barbers />
      <Contacts />
      <Register />
    </React.Fragment>
  );
}

export default App;
