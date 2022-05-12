import React from "react";
// import useTranslation from "../customHooks/translations";

function ButtonTop() {
  function ScrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // const strings = useTranslation();

  return (
    <button onClick={ScrollTop} className="Scroll-top">
      ВГОРУ
    </button>
  );
}

export default ButtonTop;
