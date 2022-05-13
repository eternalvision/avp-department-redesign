import React from "react";
import useTranslation from "../../customHooks/translations";

function ScrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function ButtonTop() {
  const strings = useTranslation();
  return (
    <button onClick={ScrollTop} className="Scroll-top">
      {strings.upButton}
    </button>
  );
}

export default ButtonTop;
