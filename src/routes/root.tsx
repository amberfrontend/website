import { Outlet, useLocation } from 'react-router-dom';

import Header from '../architecture/Header/Header';
import Navigation from '../architecture/Navigation/Navigation';
import Main from '../architecture/Main/Main';

export default function Root() {
  const location = useLocation();
  const pageTitle = location.pathname.substring(1);
  const pageTitleCase =
    pageTitle.charAt(0).toUpperCase() + pageTitle.substring(1);

  document.title = `Amber Armstrong | ${pageTitleCase}`;

  return (
    <Header>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </Header>
  );
}
