import React, { useEffect } from "react";
import { siteName } from "../../assets/strings";
import Block from "../../components/Block/Block";
import Link from "../../components/Link/Link";

export default function About() {
  const pageName = "About";
  const today = new Date();
  const year = today.getFullYear();

  const yearsNVC = year - 2006;

  useEffect(() => {
    document.title = `${siteName}${pageName}`;
  }, []);

  return (
    <>
      <h1>About Amber Armstrong</h1>
      <Block>
        <p>
          I began my career as a web designer, creating logos and websites,
          until I discovered how much I love programming and moved over to
          software development. I focus on the frontend, mostly in{" "}
          <strong className="Opt">React</strong>.
        </p>
        <p>You could say I'm a software engineeer who understands design.</p>
      </Block>
      <hr aria-hidden="true" />
      <Block>
        <h2>Frontend Developer</h2>
        <h3>Frontend</h3>
        <p>
          As a frontend developer, I'm a determined problem solver - constantly
          learning to improve my skills. I prefer readable code over cleverness.
          My language of choice is TypeScript, but I also code in JavaScript.
          I'm a fan of mobile-first, DRY (Don't Repeat Yourself), and TDD
          (Test-Driven Development).
        </p>
        <p>
          I've built full features, including API calls and state management,
          I've written theme engines and utilities, developed APIs, and improved
          performance. I secretly love writing unit tests.
        </p>
        <hr aria-hidden="true" />
        <h3>Design Systems</h3>
        <p>
          Great UX is my jam and I consider accessibility as a core component of
          UX, so I specialize in component libraries that prioritize inclusion.
          Design systems are the foundation of any piece of software, so they're
          a perfect place to define the standards that will affect the entire
          app.
        </p>
        <p>
          So far, I've worked on three different React component libraries,
          handling accessibility, maturing and maintaining the components, as
          well as managing deploys and versioning.
        </p>
        <p>
          Component libraries should be flexible and collaborative, without
          compromising on consistency, so I aim to expose the right configurable
          pieces, while installing guardrails and fallbacks. I employ systems
          design principles, like composability and scalability. I attempt to
          build iteratively in ways that avoid potential breaking changes in the
          future.
        </p>
        <hr aria-hidden="true" />
        <h3>Mentoring</h3>
        <p>
          I was mentored by some engineers far smarter than me and now it's a
          joy to pay it forward and help others level up their skills. I'm a big
          fan of pair-programming culture. I'm patient and good at simplifying
          complexity.
        </p>
      </Block>
      <hr aria-hidden="true" />
      <Block>
        <h2>Digital Accessibility</h2>
        <p>
          I fell in love with{" "}
          <strong className="Opt">digital accessibility</strong> while working
          on the{" "}
          <Link href="https://polaris.shopify.com/" external type="BODY">
            Polaris design system
          </Link>{" "}
          and have since incorporated it into everything I develop. I've reached
          a point in my career where I only want to work on software that
          prioritizes accessibility because it's the right thing to do.
        </p>
        <hr aria-hidden="true" />
        <h3>Accessibility Consulting</h3>
        <p>
          My main strength is on the technical side of accessibility. I provide
          guidance and creative solutions for some of the trickier accessibility
          challenges that come with modern design patterns, like animation,
          interactivity, and dynamic content.
        </p>
        <p>
          I believe that a design system should not only bake in accessibility,
          but should also act as a guide to its consumers. I excel at
          incorporating accessibility into a component library.
        </p>
        {/* <p>
                    I can also remediate almost anything you throw at me, whether 
                    it's in a framework like React, Angular, or Vue, in a CMS 
                    like WordPress or AEM, in an MVC framework like Rails, Django, 
                    or ASP.NET, or in a JavaScript framework like backbone.js, knockout.js.
                    But I prefer to build it right the first time.
                </p> */}
      </Block>
      <hr aria-hidden="true" />
      <Block>
        <h2>Soft Skills</h2>
        <h3>Communication</h3>
        <p>
          One of my passions is communication. I have {`${yearsNVC}`} years of
          experience with{" "}
          <Link href="https://www.cnvc.org/" external type="BODY">
            empathic communication
          </Link>{" "}
          in addition to other communication and conflict resolution modalities.
          I also have strong writing skills from years as an English tutor and
          from writing classes.
        </p>
        <hr aria-hidden="true" />
        <h3>At Work</h3>
        <p>
          I'm highly self-motivated and driven by impact. I prefer being held to
          high standards and being challenged in interesting ways. I thrive in a
          collaborative, fast-paced environment.
        </p>
        <p>
          I'm T-shaped, which means I have both a deep level of expertise in my
          craft and a broad understanding across a number of adjascent topics.
        </p>
        <hr aria-hidden="true" />
        <h3>As a Person</h3>
        <p>
          The first thing people often notice about me is my enthusiasm. I have
          a zest for life with an endless sense of curiosity. As a kid, I used
          to dismantle my electronic toys and constantly asked the question,
          "Why?" because I wanted to understand everything. That hasn't changed
          much.
        </p>
        <p>
          For fun, I have many hobbies. I'm a huge music lover and former
          musician. I also enjoy cooking, snowshoeing, canoeing, cycling, and
          nerdy games. I'm the first to admit that I make terrible puns and
          laugh at my own jokes.
        </p>
      </Block>
    </>
  );
}
