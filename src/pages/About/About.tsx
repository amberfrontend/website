import React, { useEffect } from "react";
import { siteName } from "../../assets/strings";
import Block from "../../components/Block/Block";
import Link from "../../components/Link/Link";

export default function About() {
    const pageName = "About";
    const today = new Date();
    const year = today.getFullYear();
    const yearsSoftware = year - 2017;
    const yearsWeb = year - 1999 - 6;
    const yearsNVC = year - 2006;

    useEffect(() => {
        document.title = `${siteName}${pageName}`;
    }, []);

    return (
        <>
            <h1>Hi, I'm Amber</h1>
            <Block>
                <p>
                    I'm a <strong className="Opt">JavaScript</strong> and{" "}
                    <strong className="Opt">React</strong> developer in{" "}
                    <strong className="Opt">British Columbia, Canada</strong>. I
                    have {`${yearsSoftware}`} years of experience in frontend
                    software development and {`${yearsWeb}`} years in the web
                    industry. I specialize in Digital Accessibility and Design
                    Systems.
                </p>
            </Block>
            <Block>
                <h2>Digital Accessibility Specialist</h2>
                <p>
                    I came to <strong className="Opt">accessibility</strong>{" "}
                    from a diverse and well-rounded background. Professionally,
                    I began my career as a UI/UX designer, creating logos and
                    websites. I moved over to programming and then focused on
                    frontend software development in{" "}
                    <strong className="Opt">React</strong>.
                </p>
                <h3>Technical Consultant</h3>
                <p>
                    My main strength is on the technical side of accessibility.
                    What I love most is providing guidance and creative
                    solutions for some of the trickier accessibility challenges
                    that come with modern design patterns like animation,
                    interactivity, and dynamic content. Because I've been in the
                    web industry for so long and have worked with so many
                    frameworks, I can remediate almost anything you throw at me,
                    whether it's in a modern framework like React, Angular, or
                    Vue, in a CMS like WordPress or Drupal, in an MVC framework
                    like Rails, Django, or ASP.NET, or in a JavaScript framework
                    like backbone.js, knockout.js.
                </p>
                <h3>Accessibility Program Manager</h3>
                <p>
                    My background includes strategic planning on boards of
                    directors, project management, and office management. As I
                    gained experience and seniority in software development, I
                    naturally moved into the role of program manager. I can take
                    an enterprise application from zero to WCAG compliance,
                    aligning all stakeholders, including executive leadership,
                    project managers, design, development, and content strategy.
                    I can build a cross-disciplinary digital accessibility
                    program including education, training, tooling, auditing,
                    quality assurance, and building accessibility into the
                    culture and values of a company.
                </p>
                <p>
                    One of my passions is communication. I have {`${yearsNVC}`}{" "}
                    years of experience with{" "}
                    <Link href="https://www.cnvc.org/" external type="BODY">
                        NVC
                    </Link>
                    , in addition to other communication and conflict resolution
                    modalities. I also have strong writing skills from years as
                    an English tutor and from writing classes.
                </p>
            </Block>
            <Block>
                <h2>Frontend Developer</h2>
                <h3>Design System</h3>
                <p>
                    As a frontend developer, I'm detail-oriented, efficient, and
                    take pride in shipping high quality code. I specialize in
                    user interface development and design system architecture. I
                    apply systems design thinking, like flexibility,
                    composability, creating great user experience while
                    supporting other developers, consistency and alignment
                    across the product, and scalability.
                </p>
                <p>
                    My language of choice is TypeScript, but JavaScript is still
                    welcome with all its idiosyncracies. I'm a fan of DRY, TDD,
                    SoC, and SRP architecture principles. I secretly love
                    writing unit tests.
                </p>
                <p>
                    I've also built full features, written theme engines and
                    utilities, developed APIs, managed state trees, improved
                    performance, implemented security best practices to protect
                    against XSS attacks, and written asynchronous API calls.
                </p>
                <h3>Mentor</h3>
                <p>
                    I love mentoring other developers. I myself was mentored by
                    some very smart and patient engineers and it's a joy to now
                    help others build their skills.
                </p>
            </Block>
            <Block>
                <h2>Human</h2>
                <p>
                    The first thing people often notice about me is my
                    enthusiasm. I have a zest for life with an endless sense of
                    curiosity. As a kid, I used to dismantle my electronic toys
                    and constantly asked the question, "Why?" because I wanted
                    to understand everything. That hasn't changed much.
                </p>
                <p>
                    I'm highly self-motivated and driven by impact. I thrive in
                    an environment where I'm continuously solving problems and
                    improving quality.
                </p>
                <p>
                    For fun, I have many hobbies. I'm an audiophile and
                    performed as the lead singer in several musicals and
                    productions. I competed in and won slam poetry competitions.
                    I'm a voracious reader, mostly in science, psychology, and
                    neurobiology. I also enjoy cooking, snowshoeing, dancing,
                    cycling, and photography. I'm the first to admit that I make
                    terrible dad jokes and laugh at my own puns.
                </p>
            </Block>
        </>
    );
}
