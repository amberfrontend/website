import React, { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

import { THEME } from "./styles/theme";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Qualifications from "./pages/Qualifications/Qualifications";
import Contact from "./pages/Contact/Contact";

import "./App.scss";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const [themeMode, setThemeMode] = useState(THEME.LIGHT);
  const toggleButtonLabel = useRef(THEME.LIGHT.COPY);
  const toggleIcon = useRef(<FontAwesomeIcon icon={faMoon} />);

  const handleThemeToggle = () => {
    setThemeMode(themeMode === THEME.DARK ? THEME.LIGHT : THEME.DARK);
    toggleButtonLabel.current =
      themeMode === THEME.DARK ? THEME.LIGHT.COPY : THEME.DARK.COPY;
    toggleIcon.current =
      themeMode === THEME.DARK ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faLightbulb} />
      );
  };

  const focusMain = () => {
    const mainElement = document.getElementsByTagName("main");
    mainElement[0]?.focus();
  };

  useEffect(() => {
    const toggleButton = document.getElementById("ToggleThemeButton");
    toggleButton?.focus();
  }, [themeMode]);

  return (
    <div className="App">
      <ThemeContext.Provider value={themeMode}>
        <Button className="Skip" onClick={focusMain} type="HEADER">
          Skip to main content
        </Button>
        <Header>
          <Navigation
            themeToggleButton={
              <Button
                ariaLabel={toggleButtonLabel.current}
                id="ToggleThemeButton"
                onClick={handleThemeToggle}
                type={"HEADER"}
              >
                {toggleIcon.current}
              </Button>
            }
          />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/qualifications" element={<Qualifications />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Main>
      </ThemeContext.Provider>
    </div>
  );
}
