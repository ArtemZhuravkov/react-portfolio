import { useRef, useLayoutEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import detectDarkMode from "../../utils/detectDarkMode";
import "./style.css";

export function BtnDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currVal) => {
      return currVal === "light" ? "dark" : "light";
    });
  };
  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode} ref={btnRef}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
