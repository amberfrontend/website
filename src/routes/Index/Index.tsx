import styled from 'styled-components';

import { COLORS } from '../../styles/theme';

import Layout from '../../architecture/Layout/Layout';
import Block from '../../components/Block/Block';
import headshot from '../../assets/images/AmberArmstrong.jpg';
import './Index.css';

export default function Index() {
  const StyledImg = styled.img`
    border-radius: 0.6rem;
    box-shadow: 0.2rem 0.2rem 0.6rem ${COLORS.GREY02};
  `;
  return (
    <>
      <Block>
        <h1 className='Index'>Hi, I'm Amber</h1>
        <Layout
          layout={{ left: '65%', right: '35%' }}
          left={
            <>
              <p>
                I'm a <strong className='Opt'>software developer</strong> and
                certified{' '}
                <strong className='Opt'>accessibility specialist</strong>, based
                in <strong className='Opt'>Ontario, Canada</strong>.
              </p>
              <p>
                I've been working on the web since the 90s. I'm a well-rounded
                developer, after several iterations of web development best
                practices.
              </p>
              <p>
                These days, I work as a Frontend Developer in React and I'm
                passionate about a11y.
              </p>
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
