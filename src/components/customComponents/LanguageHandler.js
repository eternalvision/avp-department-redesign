import React from "react";
import { useLanguageContext } from "../contexts/LanguageContext";

export default function LanguageHandler() {
  const { language, changeLanguage } = useLanguageContext();

  return (
    <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </select>
  );
}
