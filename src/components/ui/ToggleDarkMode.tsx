import { useState } from "react";

export const ToggleDarkMode = () => {
  const [dark, setDark] = useState<boolean>(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <button onClick={darkModeHandler} className="mt-2">
      {
        dark && <img src="/images/sun.svg" className="w-10" alt="icon sun" /> // render sunny when dark is true
      }
      {
        !dark && <img src="/images/moon.svg" className="w-10" alt="icon moon" /> // render moon when dark is false
      }
    </button>
  );
};
