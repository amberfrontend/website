import { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../architecture/ThemeContext/ThemeContext';

import Layout from '../../architecture/Layout/Layout';
import Block from '../../components/Block/Block';
import headshot from '../../assets/images/AmberArmstrong.jpg';
import './Index.css';

export default function Index() {
  const theme = useContext(ThemeContext);

  const StyledImg = styled.img`
    border-radius: 0.3rem;
    box-shadow: 0.1rem 0.1rem 0.4rem ${theme.IMG.BOX_SHADOW};
  `;

  const today = new Date();
  const yearBeganSoftware = 2016;
  const yearsOfSoftware = today.getFullYear() - yearBeganSoftware;
  const yearsOfA11y = yearsOfSoftware - 2;

  return (
    <>
      <Block>
        <h1 className='Index'>Hi, I'm Amber</h1>
        <Layout
          layout={{ left: '65%', right: '35%' }}
          left={
            <>
              <p>
                I'm a{' '}
                <strong className='Opt'>frontend software developer</strong> and
                certified{' '}
                <strong className='Opt'>accessibility specialist</strong>, based
                in <strong className='Opt'>Canada</strong>.
              </p>
              <p>
                I've been working in web development since I was a teenager.
                Tech is constantly changing and I love learning, so I keep
                evolving along with it. That's made me a pretty well-rounded
                developer.
              </p>

              <p>
                Early in my career, I designed custom websites for companies
                like La Senza (lingerie), Lasania (fashion), and David Suzuki
                Foundation. I moved over to CMS development (Drupal and
                WordPress) and did that for several years.
              </p>
              <p>
                Then, {yearsOfSoftware} years ago, I became a frontend software
                developer, mostly in React, and {yearsOfA11y} years ago, I did a
                deep dive into digital accessibility (a11y).
              </p>

              <p></p>
            </>
          }
          right={
            <StyledImg src={headshot} alt='Amber Armstrong' width='100%' />
          }
        />
      </Block>
    </>
  );
}
