import React from "react";

import { HeaderComponents, MainComponents, FooterComponents } from "../index";

function Home() {
  return (
    <>
      <HeaderComponents.Header />
      <HeaderComponents.Menu />
      <MainComponents.Slider />
      <MainComponents.Main />
      <FooterComponents.Footer />
    </>
  );
}

export default Home;
