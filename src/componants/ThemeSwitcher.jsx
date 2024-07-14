import React from "react";

const ThemeSwitcher = ({ setTheme, theme }) => {
  return (
    <header className="flex between">
      <h1>Todo</h1>
      <button className="theme-switcher" onClick={() => setTheme((v) => !v)}>
        <img
          src={theme ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
          alt="icon-sun"
        />
      </button>
    </header>
  );
};

export default ThemeSwitcher;
