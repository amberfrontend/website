import Block from '../../components/Block/Block';
import Link from '../../components/Link/Link';

export default function About() {
  const today = new Date();
  const year = today.getFullYear();

  const yearsNVC = year - 2006;

  return (
    <>
      <h1>About</h1>
      <Block>
        <h2>Feature Development</h2>
        <p>
          I've built full features for enterprise apps with millions of users,
          mostly in the fintech and ecommerce space. Features that I've built
          include bulk payments, recent transactions (money transfers), sign up
          and onboarding, data displays, and integrations with other apps. I'm
          proficient with async API calls, complex state management, security,
          and performance.
        </p>
      </Block>
      <Block>
        <h2>Performance</h2>
        <p>
          Did you know that if an app takes more than 1 second to load, users
          perceive it to be slow and the delay can lower conversion by more than
          10%? Users expect fast and I believe it's a big component of
          delivering great UX. When I build on the frontend, I test the
          performance of my code. I implement techniques to increase
          performance, like preventing unnecessary re-renders, offloading tasks
          to the server, debouncing expensive tasks, memoizing values, and
          initializing objects in a performant way.
        </p>
      </Block>
      <Block>
        <h2>Design Systems and UX Development</h2>
        <p>
          I'm obsessed with great UX, so design systems and component libraries
          are one of my favorite aspects of software. I've worked on three
          component libraries, maturing and maintaining them, as well as
          remediating for accessibility and building new accessible components.
          I've built complex components, like responsive and sortable data
          tables, modals with focus trap, datepickers, filters &amp; search,
          animations, comboboxes, customizable theme engines, and more.
        </p>
        <p>
          Component libraries should be flexible and collaborative, without
          compromising on consistency, so I aim to expose the right configurable
          pieces, while installing guardrails and fallbacks. I think about
          composability, scalability and flexibility. I attempt to build
          iteratively in ways that avoid potential breaking changes in the
          future.
        </p>
      </Block>
      <Block>
        <h2>Digital Accessibility</h2>
        <p>
          When I was at{' '}
          <Link href='https://www.shopify.com/' external type='body'>
            Shopify
          </Link>
          , working on the{' '}
          <Link href='https://polaris.shopify.com/' external type='body'>
            Polaris design system
          </Link>
          , I discovered digital accessibility and fell in love with it. I
          consider accessibility as a core component of UX. I strategically
          worked on projects that gave me hands-on accessibility experience. I'm
          now an expert at conformance testing, remediating, and building apps
          to WCAG standards.
        </p>
        <p>
          I understand how and when to use ARIA attributes, labels, landmarks,
          focus management, and semantic markup. I can embed accessibility into
          modern design patterns, like animation, overlays, interactive
          components, drop and drop, forms, tables, and other dynamic content.
          I'm trained in assistive technology and accessibility tools.
        </p>
        <hr aria-hidden='true' />
      </Block>

      <Block>
        <h2>Soft Skills</h2>
        <h3>As a Colleague</h3>
        <p>
          I'm a go-getter, by nature. I'm highly self-motivated and thrive on
          making an impact. I'm insatiably curious and always want to improve
          things. I prefer being held to high standards and being challenged in
          ways that stretch me.
        </p>
        <p>
          I'm friendly and building good rapport with my colleagues is important
          to me. I love helping and thrive in a collaborative environment.
        </p>
        <p>
          I'm T-shaped, which means I have both a deep level of expertise in my
          craft and a broad understanding across a number of adjascent topics.
        </p>
        <h3>Communication</h3>
        <p>
          One of my passions is communication. I have {`${yearsNVC}`} years of
          experience with{' '}
          <Link href='https://www.cnvc.org/' external type='body'>
            empathic communication
          </Link>{' '}
          in addition to other communication and conflict resolution modalities.
          I also have strong writing skills from years as an English tutor and
          from writing classes.
        </p>
        <h3>As a Person</h3>
        <p>
          The first thing people usually notice about me is my enthusiasm and my
          zest for life. The second thing is often my persistence. I've broken
          through many glass ceilings with resilience and tenacity. I believe in
          a growth mindset.
        </p>
        <p>
          For fun, I have too many hobbies, like music, cooking, cake
          decorating, snowshoeing, canoeing, cycling, and board games. I'm the
          first to admit that I make terrible puns and laugh at my own jokes.
        </p>
      </Block>
    </>
  );
}
