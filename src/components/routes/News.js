import React from "react";

import { HeaderComponents, FooterComponents } from "../index";

function News() {
  return (
    <>
      <HeaderComponents.Header />
      <HeaderComponents.Menu />
      <div>Новости</div>
      <FooterComponents.Footer />
    </>
  );
}

export default News;
