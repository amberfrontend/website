import { useContext } from 'react';
import styled from 'styled-components';

import useWindowWidth from '../../custom-hooks/useWindowWidth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '../ThemeContext/ThemeContext';
import { MODE } from '../../styles/theme';

import Flex from '../../components/Flex/Flex';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

import './Navigation.css';

interface NavigationProps {
  onToggleTheme(): void;
}

export default function Navigation({ onToggleTheme }: NavigationProps) {
  const isMobileWeb = useWindowWidth();
  const theme = useContext(ThemeContext);

  const StyledLeftLetter = styled.span`
    color: ${theme.TEXT.LOGO};
  `;

  const StyledNav = styled.nav`
    padding: 0;

    ul {
      display: flex;
      align-items: ${isMobileWeb ? 'flex-start' : 'center'};
      flex-direction: ${isMobileWeb ? 'column' : 'row'};
      justify-content: ${isMobileWeb ? 'flex-start' : 'space-around'};
      gap: ${isMobileWeb ? '1rem' : '0'};
      height: ${isMobileWeb ? '100vh' : '5rem'};
      list-style: none;
      padding-inline-start: 0;
      margin-block-end: 0;
      margin-block-start: 0;
      margin: 0;
      width: 100%;
    }
  `;

  const linksMarkup = (
    <StyledNav aria-label='main' className='NavMain'>
      <ul>
        <li>
          {isMobileWeb ? (
            <Link href={`/`} type='header' className='NavLink'>
              Home
            </Link>
          ) : (
            <Link href={`/`} type='header' className='NavLink Logo'>
              <span className='LogoWrapper'>
                <StyledLeftLetter className='LeftLetter'>A</StyledLeftLetter>
                <span aria-hidden={true}>/</span>
                <span className='RightLetter'>A</span>
              </span>
            </Link>
          )}
        </li>
        <li>
          <Link href={`/about`} type='header' className='NavLink'>
            About
          </Link>
        </li>
        <li>
          <Link href={`/qualifications`} type='header' className='NavLink'>
            Qualifications
          </Link>
        </li>
        <li>
          <Link href={`/contact`} type='header' className='NavLink'>
            Contact
          </Link>
        </li>
        {!isMobileWeb && (
          <li>
            <Button
              type='header'
              ariaLabel={theme.COPY.TOGGLE_BUTTON}
              onClick={onToggleTheme}
            >
              <FontAwesomeIcon
                icon={theme.MODE === MODE.DARK ? faLightbulb : faMoon}
              />
            </Button>
          </li>
        )}
      </ul>
    </StyledNav>
  );

  const menuMarkup = isMobileWeb ? (
    <div>
      <Flex justifyContent='space-between'>
        <Modal
          title='Main menu'
          isNav={true}
          triggerButton={{
            type: 'header',
            children: <FontAwesomeIcon icon={faBars} />,
          }}
        >
          {linksMarkup}
        </Modal>
        {isMobileWeb && (
          <Button
            type='header'
            ariaLabel={theme.COPY.TOGGLE_BUTTON}
            onClick={onToggleTheme}
          >
            <FontAwesomeIcon
              icon={theme.MODE === MODE.DARK ? faLightbulb : faMoon}
            />
          </Button>
        )}
      </Flex>
    </div>
  ) : (
    linksMarkup
  );

  return menuMarkup;
}
