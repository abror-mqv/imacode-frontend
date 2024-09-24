import React from "react";
import SideLineText from "./components/SideLineText/SideLineText";
import Hero from "./components/Hero/Hero";

function Index() {
  return (
    <main>
      {/* <SideLineText /> */}
      {/* this classname was given when i was so upside to make mobile version so i decided to build an absolutely new Hero-loke component to make a mobile-friendly app  */}
      <Hero className="Desktop"/>
    </main>
  );
}

export default Index;
