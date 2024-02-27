import React, { useEffect } from "react";
import { siteName } from "../../assets/strings";
import Block from "../../components/Block/Block";
import Link from "../../components/Link/Link";

export default function About() {
    const pageName = "About";
    const today = new Date();
    const year = today.getFullYear();
    const yearsSoftware = year - 2016;
    const yearsWeb = year - 1999 - 4;
    const yearsNVC = year - 2006;

    useEffect(() => {
        document.title = `${siteName}${pageName}`;
    }, []);

    return (
        <>
            <h1>Hi, I'm Amber</h1>
            <Block>
                <p>
                    I'm a <strong className="Opt">Frontend Developer</strong> based in{" "}
                    <strong className="Opt">Canada</strong>, with 
                    {" "}{`${yearsSoftware}`}{" "}years of experience in  
                    software development and{" "}{`${yearsWeb}`}{" "}years in the 
                    web industry. I began my career as a UI/UX designer, creating logos and
                    websites, then moved over to programming and focused on the
                    frontend, mostly in{" "} <strong className="Opt">React</strong>.
                </p>
            </Block>
            <Block>
                <h2>Frontend Developer</h2>
                <h3>Design Systems</h3>
                <p>
                    Great UX is my jam, so I 
                    specialize in developing beautiful design systems that 
                    prioritize inclusion. Design systems are the backbone of 
                    any piece of software, so they're a perfect place to define
                    the standards that will affect the entire app, ultimately 
                    impacting the end user.
                <p>
                </p>
                    Component libraries should be flexible and collaborative, without 
                    compromising on consistency, so I aim to expose the right 
                    configurable pieces, while installing guardrails and fallbacks. 
                    I employ systems design principles, like composability and 
                    scalability. I attempt to build iteratively in ways that avoid 
                    potential breaking changes in the future.
                </p>
                <h3>Frontend</h3>
                <p>
                    As a frontend developer, I'm meticulous, efficient, and
                    ship clean code. My language of choice is TypeScript, 
                    but I also code in JavaScript. I'm a fan of mobile-first, 
                    DRY (Don't Repeat Yourself), and TDD (Test-Driven Development).
                    
                </p>
                <p>
                    In addition to my work on a few design systems, I've built full 
                    features, written theme engines and
                    utilities, developed APIs, managed state trees, and improved
                    performance. I secretly love writing unit tests.
                </p>
                <h3>Mentor</h3>
                <p>
                    I was mentored by some engineers far smarter than me and now it's 
                    a joy to pay it forward and help others level up their skills. 
                    I'm a big fan of pair-programming culture. I'm patient and 
                    good at simplifying complexity.
                </p>
            </Block>
            <Block>
                <h2>Digital Accessibility</h2>
                <p>I fell in love with{" "}
                    <strong className="Opt">digital accessibility</strong>{" "} 
                    while working on the <Link
                                href="https://polaris.shopify.com/"
                                external
                                type="BODY"
                            >
                                Polaris design system</Link> and have since
                    incorporated it into everything I develop. I've reached a point 
                    in my career where I only want to work on software that
                    prioritizes accessibility because it's the right thing to do.
                </p>
                <h3>Technical Consultant</h3>
                <p>
                    My main strength is on the technical side of accessibility.
                    I provide guidance and creative solutions for some of the
                    trickier accessibility challenges that come with modern
                    design patterns, like animation, interactivity, and dynamic
                    content.
                </p>
                <p>
                    It's common for consumers of a design system to 
                    have only a general understanding of accessibility, so it's 
                    my opinion that a design system should not only bake in 
                    accessibility, but should also act as a guide to its consumers.
                    I excel at incorporating accessibility into a component library.
                </p>
                {/* <p>
                    I can also remediate almost anything you throw at me, whether 
                    it's in a framework like React, Angular, or Vue, in a CMS 
                    like WordPress or AEM, in an MVC framework like Rails, Django, 
                    or ASP.NET, or in a JavaScript framework like backbone.js, knockout.js.
                    But I prefer to build it right the first time.
                </p> */}
            </Block>
            <Block>
                <h2>Soft Skills</h2>
                <h3>Communication</h3>
                <p>
                    One of my passions is communication. I have {`${yearsNVC}`}{" "}
                    years of experience with{" "}
                    <Link href="https://www.cnvc.org/" external type="BODY">
                        empathic communication
                    </Link>{" "}
                    in addition to other communication and conflict resolution
                    modalities. I also have strong writing skills from years as
                    an English tutor and from writing classes.
                </p>
                <h3>At Work</h3>
                <p>
                    I'm highly self-motivated and driven by impact. I prefer 
                    being held to high standards and being intellectually 
                    challenged to solve problems efficiently. I thrive in a 
                    collaborative, fast-paced environment. 
                </p>
                <p>I'm T-shaped, which means I have both a deep level of
                    expertise in my craft and a broad understanding across a 
                    number of adjascent topics. 
                </p>
                <h3>As a Person</h3>
                <p>
                    The first thing people often notice about me is my
                    enthusiasm. I have a zest for life with an endless sense of
                    curiosity. As a kid, I used to dismantle my electronic toys
                    and constantly asked the question, "Why?" because I wanted
                    to understand everything. That hasn't changed much.
                </p>             
                <p>
                    For fun, I have many hobbies. I'm a huge music lover and former
                    musician. I also enjoy cooking, snowshoeing, canoeing, cycling, 
                    and nerdy games. I'm the first to admit that I make terrible 
                    puns and laugh at my own jokes.
                </p>
            </Block>
        </>
    );
}
