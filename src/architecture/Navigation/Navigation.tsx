import styled from 'styled-components';

import useWindowWidth from '../../custom-hooks/useWindowWidth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Flex from '../../components/Flex/Flex';
import Link from '../../components/Link/Link';
import Modal from '../../components/Modal/Modal';
import { THEME_LIGHT } from '../../styles/theme';
import './Navigation.css';

export default function Navigation() {
  const isMobileWeb = useWindowWidth();

  const StyledLeftLetter = styled.span`
    color: ${THEME_LIGHT.TEXT.LOGO};
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
      </ul>
    </StyledNav>
  );

  const menuMarkup = isMobileWeb ? (
    <div>
      <Flex justifyContent='flex-start'>
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
      </Flex>
    </div>
  ) : (
    linksMarkup
  );

  return menuMarkup;
}
