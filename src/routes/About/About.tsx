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
          I've been working on the web for a couple of decades, since the days
          of static website development. My background includes logo design and
          branding, but my love is programming, so I focus on frontend UX
          development.
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
          , I discovered digital accessibility and decided to become an a11y
          subject matter expert. I strategically worked on projects that
          involved accessibility, learning how to audit and remediate web and
          mobile apps.
        </p>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h2>Digital Accessibility</h2>
        <p>
          My main strength is on the technical side of accessibility. I provide
          guidance and creative solutions for some of the trickier accessibility
          challenges that come with modern design patterns, like animation,
          interactivity, and dynamic content.
        </p>
        <p>
          I can remediate almost anything you throw at me, whether it's in a
          framework like React, Angular, or Vue, in a CMS like WordPress or AEM,
          in an MVC framework like Rails, Django, or ASP.NET, or in a JavaScript
          framework like backbone.js, knockout.js. But I prefer to build it
          right the first time.
        </p>
        <hr aria-hidden='true' />
      </Block>

      <Block>
        <h2>Frontend</h2>
        <h3>Features</h3>
        <p>
          I've built full features for enterprise apps with millions of users.
          Much of my experience has been in the fintech and ecommerce space.
          Features that I've built include bulk payments, recent transactions
          (money transfers), sign up and onboarding, data displays, and
          integrations with other apps. I can handle API calls, state
          management, and performance.
        </p>
        <p>
          As a frontend developer, I'm a determined problem solver and lifelong
          learner. I'm a fan of mobile-first, DRY (Don't Repeat Yourself), and
          TDD (Test-Driven Development). I secretly love writing unit tests.
        </p>

        <hr aria-hidden='true' />
        <h3>Design Systems</h3>
        <p>
          Great UX is my jam and I consider accessibility as a core component of
          UX. I've worked on three component libraries, maturing and maintaining
          them, as well as remediating and building accessible components. I've
          built complex components, like responsive and sortable data tables,
          modals with focus trap, datepickers, filters &amp; search, animations,
          comboboxes, context, and more.
        </p>
        <p>
          Design systems are the foundation of any piece of software, so they're
          a perfect place to define the standards that will affect the entire
          app.
        </p>
        <p>
          Component libraries should be flexible and collaborative, without
          compromising on consistency, so I aim to expose the right configurable
          pieces, while installing guardrails and fallbacks. I employ systems
          design principles, like composability and scalability. I attempt to
          build iteratively in ways that avoid potential breaking changes in the
          future.
        </p>
        <hr aria-hidden='true' />
        <h3>Mentoring</h3>
        <p>
          I was mentored by some engineers far smarter than me and now it's a
          joy to pay it forward and help others level up their skills. I'm a big
          fan of pair-programming culture. I'm patient and good at simplifying
          complexity.
        </p>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h2>Soft Skills</h2>
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
        <hr aria-hidden='true' />
        <h3>At Work</h3>
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
        <hr aria-hidden='true' />
        <h3>As a Person</h3>
        <p>
          The first thing people usually notice about me is my enthusiasm. I
          have a zest for life with an endless sense of curiosity. The second
          thing is often my persistence. I've overcome many barriers with
          resilience and tenacity.
        </p>
        <p>
          For fun, I have too many hobbies. I'm a huge music lover (and former
          singer). I also enjoy cooking, cake decorating, snowshoeing, canoeing,
          cycling, and board games. I'm the first to admit that I make terrible
          puns and laugh at my own jokes.
        </p>
      </Block>
    </>
  );
}
