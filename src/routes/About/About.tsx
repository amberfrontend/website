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
        <p>
          I've been working on the web for a couple of decades, so I'm a diverse
          and well-rounded developer. I once designed logos, websites, and
          company branding, but my love is programming, so I became a Frontend
          Developer.
        </p>
        <p>
          To be more versatile, I deliberately broadened my skillset by working
          in a few high impact roles, using cutting-edge tools and best
          practices. I've built enterprise-level software that millions of
          people use.
        </p>
        <p>
          When I was at{' '}
          <Link href='https://www.shopify.com/' external type='BODY'>
            Shopify
          </Link>
          , working on the{' '}
          <Link href='https://polaris.shopify.com/' external type='BODY'>
            Polaris design system
          </Link>
          , I discovered digital accessibility and decided to add it to my
          skillset. I strategically worked on projects that gave me hands-on
          accessibility experience. I'm now an expert at conformance testing,
          remediating, and building apps to WCAG standards.
        </p>
      </Block>
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
        <h2>Design Systems and UX Development</h2>
        <p>
          I absolutely love great UX, so I'm a great fit for design system
          engineering. I've worked on three component libraries, maturing and
          maintaining them, as well as remediating and building accessible
          components. I've built complex components, like responsive and
          sortable data tables, modals with focus trap, datepickers, filters
          &amp; search, animations, comboboxes, context, and more.
        </p>
        <p>
          Component libraries should be flexible and collaborative, without
          compromising on consistency, so I aim to expose the right configurable
          pieces, while installing guardrails and fallbacks. I employ systems
          design principles, like composability and scalability. I attempt to
          build iteratively in ways that avoid potential breaking changes in the
          future.
        </p>
        <p>
          I consider accessibility as a core component of UX. Design systems are
          the foundation of any piece of software, so they're a perfect place to
          define the standards that will affect the entire app.
        </p>
      </Block>
      <Block>
        <h2>Digital Accessibility</h2>
        <p>
          I'm strong on the technical side of accessibility. I understand how
          and when to use ARIA attributes and how to embed accessibility into
          modern design patterns, like animation, overlays, interactive
          components, drop and drop, forms, tables, and other dynamic content.
        </p>
        <hr aria-hidden='true' />
      </Block>

      <Block>
        <h2>Soft Skills</h2>
        <h3>As a Colleague</h3>
        <p>
          I'm a friendly and bubbly person who puts effort into gaining trust
          and building good rapport with my colleagues. I'm highly
          self-motivated and driven by impact. I prefer being held to high
          standards and being challenged in interesting ways. I thrive in a
          collaborative environment.
        </p>
        <p>
          I'm T-shaped, which means I have both a deep level of expertise in my
          craft and a broad understanding across a number of adjascent topics.
        </p>
        <h3>Communication</h3>
        <p>
          One of my passions is communication. I have {`${yearsNVC}`} years of
          experience with{' '}
          <Link href='https://www.cnvc.org/' external type='BODY'>
            empathic communication
          </Link>{' '}
          in addition to other communication and conflict resolution modalities.
          I also have strong writing skills from years as an English tutor and
          from writing classes.
        </p>

        <h3>As a Person</h3>
        <p>
          The first thing people usually notice about me is my enthusiasm. I
          have a zest for life with an endless sense of curiosity. The second
          thing is often my persistence. I've overcome many barriers with
          resilience and tenacity.
        </p>
        <p>
          I'm a go-getter who thrives on impact. My friends tell me, "You get
          sh*t done!". I like to find efficient, intelligent solutions to
          problems. I stretch beyond my comfort zone to constantly improve
          myself and what I'm working on.
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
