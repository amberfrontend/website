import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Flex from '../../components/Flex/Flex';
import Link from '../../components/Link/Link';
import Modal from '../../components/Modal/Modal';
import { THEME_LIGHT } from '../../styles/theme';
import './Navigation.css';

export default function Navigation() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const responsizeWidth = 700;

  const handleResize = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setWindowSize(window.innerWidth);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const StyledLeftLetter = styled.span`
    color: ${THEME_LIGHT.TEXT.LOGO};
  `;

  const StyledNav = styled.nav`
    padding: 0;

    ul {
      display: flex;
      align-items: ${windowSize <= responsizeWidth ? 'flex-start' : 'center'};
      flex-direction: ${windowSize <= responsizeWidth ? 'column' : 'row'};
      justify-content: ${windowSize <= responsizeWidth
        ? 'flex-start'
        : 'space-around'};
      gap: ${windowSize <= responsizeWidth ? '1rem' : '0'};
      height: ${windowSize <= responsizeWidth ? '100vh' : '5rem'};
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
          {windowSize <= responsizeWidth ? (
            <Link href={`/`} type='HEADER' className='NavLink'>
              Home
            </Link>
          ) : (
            <Link href={`/`} type='HEADER' className='NavLink Logo'>
              <span className='LogoWrapper'>
                <StyledLeftLetter className='LeftLetter'>A</StyledLeftLetter>
                <span aria-hidden={true}>/</span>
                <span className='RightLetter'>A</span>
              </span>
            </Link>
          )}
        </li>
        <li>
          <Link href={`/about`} type='HEADER' className='NavLink'>
            About
          </Link>
        </li>
        <li>
          <Link href={`/qualifications`} type='HEADER' className='NavLink'>
            Qualifications
          </Link>
        </li>
        <li>
          <Link href={`/contact`} type='HEADER' className='NavLink'>
            Contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  );

  const menuMarkup =
    windowSize <= responsizeWidth ? (
      <div>
        <Flex justifyContent='flex-start'>
          <Modal
            title='Main menu'
            isNav={true}
            triggerButton={{
              type: 'HEADER',
              children: <FontAwesomeIcon icon={faBars} />,
            }}
          >
            {linksMarkup}
          </Modal>
        </Flex>
      </div>
    ) : (
      linksMarkup
    );

  return menuMarkup;
}
