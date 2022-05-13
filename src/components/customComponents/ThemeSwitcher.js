import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import Switch from "react-switch";

localStorage.setItem("theme", "light");

const ThemeSwitcher = () => {
  const { switcher, themes } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setIsDarkMode((previous) => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  }
  return (
    <Switch
      uncheckedIcon={<div className="Switch-icon">🌑</div>}
      checkedIcon={<div className="Switch-icon">🌞</div>}
      onColor="#4d4d4d"
      onChange={toggleDarkMode}
      checked={isDarkMode}
    />
  );
};

export default ThemeSwitcher;
