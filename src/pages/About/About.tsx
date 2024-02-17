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
                    I'm a <strong className="Opt">JavaScript</strong> and{" "}
                    <strong className="Opt">React</strong> developer based in{" "}
                    <strong className="Opt">Canada</strong>, with 
                    {" "}{`${yearsSoftware}`}{" "}years of experience in frontend 
                    software development and{" "}{`${yearsWeb}`}{" "}years in the 
                    web industry. UI/UX is my jam. 
                </p>
            </Block>
            <Block>
                <h2>Frontend Developer</h2>
                <h3>Design Systems</h3>
                <p>
                    I'm obsessed with excellent UX for users of all 
                    capabilities, so I specialize in developing and scaling 
                    smart design systems that prioritize inclusion.
                    I employ systems design principles, like
                    composability, consistency, and scalability.
                    I enjoy solving pain points for both end users and the 
                    developers consuming what I build. I aim to balance
                    flexibility with proper guardrails and fallbacks.
                </p>
                <p>
                    As a frontend developer, I'm detail-oriented, efficient, and
                    take pride in shipping clean code. My language of
                    choice is TypeScript, but I also code in JavaScript. 
                    I'm a fan of mobile-first, DRY (Don't Repeat Yourself), 
                    and TDD (Test-Driven Development). I secretly love writing 
                    unit tests.
                </p>
                <p>
                    I've also built full features, written theme engines and
                    utilities, developed APIs, managed state trees, and improved
                    performance.
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
                <h2>Digital Accessibility Specialist</h2>
                <p>
                    I came to <strong className="Opt">accessibility</strong>{" "}
                    from a diverse and well-rounded background. Professionally,
                    I began my career as a UI/UX designer, creating logos and
                    websites. I moved over to programming and then focused on
                    frontend software development in{" "}
                    <strong className="Opt">React</strong>.
                </p>
                <p>I fell in love with digital accessibility and have incorporated
                    it into everything I develop. I've reached a point in my career 
                    where I only want to work on products that include accessibility 
                    because it's the right thing to do.
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
                    I can remediate almost anything you throw at me, whether 
                    it's in a framework like React, Angular, or Vue, in a CMS 
                    like WordPress or AEM, in an MVC framework like Rails, Django, 
                    or ASP.NET, or in a JavaScript framework like backbone.js, knockout.js.
                    But I prefer to build it right the first time.
                </p>
            </Block>
            <Block>
                <h2>Soft Skills</h2>
                <p>
                    One of my passions is communication. I have {`${yearsNVC}`}{" "}
                    years of experience with{" "}
                    <Link href="https://www.cnvc.org/" external type="BODY">
                        NVC
                    </Link>{" "}
                    in addition to other communication and conflict resolution
                    modalities. I also have strong writing skills from years as
                    an English tutor and from writing classes.
                </p>
            </Block>
            <Block>
                <h2>As a Person</h2>
                <p>
                    The first thing people often notice about me is my
                    enthusiasm. I have a zest for life with an endless sense of
                    curiosity. As a kid, I used to dismantle my electronic toys
                    and constantly asked the question, "Why?" because I wanted
                    to understand everything.
                </p>
                <p>There are two things that have been said of me many times:
                    I'm resilient and a "force of nature". I'm a go-getter 
                    and have broken many glass ceilings. I get stuff done.
                </p>
                <p>
                    I'm highly self-motivated and driven by impact. I thrive in
                    an environment where I'm continuously solving problems and
                    improving quality.
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
