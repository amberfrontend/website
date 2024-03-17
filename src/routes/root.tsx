import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ThemeContext } from '../architecture/ThemeContext/ThemeContext';
import Header from '../architecture/Header/Header';
import Navigation from '../architecture/Navigation/Navigation';
import Main from '../architecture/Main/Main';

import { THEME } from '../styles/theme';

import '../architecture/GlobalStyles.css';

export default function Root() {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const location = useLocation();
  const pageTitle = location.pathname.substring(1);
  const pageTitleCase =
    pageTitle.charAt(0).toUpperCase() + pageTitle.substring(1);

  document.title = `Amber Armstrong | ${pageTitleCase}`;

  const handleToggleTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(() => newTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Header>
        <Navigation onToggleTheme={handleToggleTheme} />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </ThemeContext.Provider>
  );
}
