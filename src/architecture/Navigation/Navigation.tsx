import styled from 'styled-components';
import Link from '../../components/Link/Link';
import { THEME_LIGHT } from '../../styles/theme';
import './Navigation.css';

export default function Navigation() {
  const StyledLeftLetter = styled.span`
    color: ${THEME_LIGHT.TEXT.LOGO};
  `;

  return (
    <nav aria-label='main' className='NavMain'>
      <ul>
        <li>
          <Link href={`/`} type='HEADER' className='NavLink Logo'>
            <span className='LogoWrapper'>
              <StyledLeftLetter className='LeftLetter'>A</StyledLeftLetter>
              <span aria-hidden={true}>/</span>
              <span className='RightLetter'>A</span>
            </span>
          </Link>
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
    </nav>
  );
}
