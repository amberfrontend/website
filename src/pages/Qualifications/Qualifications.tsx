import React, { useEffect } from "react";
import { siteName } from "../../assets/strings";
import Link from "../../components/Link/Link";

export default function Qualifications() {
    const pageName = "Qualifications";
    const releaseDate = new Date("April, 2023");
    const today = new Date();
    const standards = today > releaseDate ? ", WCAG 2.2 AA" : null;

    useEffect(() => {
        document.title = `${siteName}${pageName}`;
    }, []);

    return (
        <>
            <h1>{pageName}</h1>
            <div>
                <h2>Skills and Technologies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS, Sass, CSSinJS</li>
                    <li>TypeScript, JavaScript (ES6), jQuery</li>
                    <li>React, React hooks</li>
                    <li>Jest, Enzyme, Mocha, React Testing Library, Cypress</li>
                    <li>GraphQL, Apollo</li>
                    <li>Redux, Redux Saga</li>
                    <li>Webpack, Babel</li>
                    <li>NVDA, JAWS, VoiceOver, TalkBack</li>
                    <li>WCAG 2.1 AA{standards}</li>
                </ul>
                {/* <hr aria-hidden="true" />
                <h2>Certifications</h2>
                <ul>
                    <li>
                        IAAP Certified Professional in Accessibility Core
                        Competencies (
                        <Link
                            href="https://www.accessibilityassociation.org/s/certified-professional"
                            external
                        >
                            CPACC
                        </Link>
                        )
                    </li>
                    <li>
                        IAAP Certified Web Accessibility Specialist (
                        <Link
                            href="https://www.accessibilityassociation.org/s/wascertification"
                            external
                        >
                            WAS
                        </Link>
                        )
                    </li>
                    <li>Deque Systems Web Accessibility</li>
                </ul> */}
                <hr aria-hidden="true" />
                <h2>Experience</h2>
                <h3>Lead Digital Accessibility Specialist</h3>
                <h4>Scotiabank</h4>
                <p>
                    <ul>
                        <li>Provide technical leadership and guidance for digital 
                            accessibility</li>
                        <li>Write accessibility documentation for project owners, 
                        designers, developers, and QA</li>
                        <li>Recommend and mature scalable processes throughout 
                            the software development process to mature the accessibility 
                            practice</li>
                        <li>Evaluate and recommend accessibility tools for
                        designers, developers, and testers</li>
                        <li>Design and analyze metrics to better inform
                        accessibility efforts and to improve reporting</li>
                        <li>Drive adoption of evolving accessibility standards</li>
                        <li>Mentor a university student</li>
                    </ul>
                </p>
                </div>
            <hr aria-hidden="true" />
            <div>
                <h3>Senior Software Engineer and Accessibility Specialist</h3>
                <h4>Achievers</h4>
                <p>
                    <ul>
                        <li>
                            Partnered with the UX Design Manager to build the
                            accessibility program for the company, including
                            education, training, design reviews, user stories,
                            technical guidance, developer onboarding, tooling,
                            QA, and content strategy
                        </li>
                        <li>
                            Produced training material and provided workshops on
                            accessibility principles, methods, and solutions
                        </li>
                        <li>
                            Audited the component library, web application,
                            mobile apps, and Figma designs for accessibility
                            violations
                        </li>
                        <li>Wrote and implemented remediation solutions</li>
                        <li>
                            Led the team that remediated the React component
                            library and web application to meet WCAG 2.1 AA
                            compliance
                        </li>
                        <li>
                            Provided technical guidance to 9 development teams
                        </li>
                        <li>
                            Maintained and extended the Dopamine component
                            library
                        </li>
                        <li>
                            Built responsive, performant, and accessible React
                            components
                        </li>
                        <li>Fixed bugs and refactored components</li>
                        <li>Managed deployments using SEMVER</li>
                        <li>Wrote feature flags with GraphQL</li>
                        <li>
                            Wrote unit tests in Jest and React Testing Library
                        </li>
                        <li>Reviewed pull requests</li>
                        <li>Mentored co-op students and junior developers</li>
                    </ul>
                </p>
            </div>
            <hr aria-hidden="true" />
            <div>
                <h3>Accessibility Engineer</h3>
                <h4>Allyant</h4>
                <p>
                    <ul>
                        <li>
                            Audited websites, web apps, mobile apps, designs,
                            and digital assets for accessibility violations
                        </li>
                        <li>Performed QA and peer reviews</li>
                        <li>
                            Worked with clients as a developer consultant to
                            suggest remediation solutions
                        </li>
                        <li>
                            Produced technical documentation and training videos
                            for designers and developers on digital
                            accessibility
                        </li>
                    </ul>
                </p>
            </div>
            <hr aria-hidden="true" />
            <div>
                <h3>Senior Software Engineer</h3>
                <h4>Community</h4>
                <p>
                    <ul>
                        <li>Implemented Shopify integration features</li>
                        <li>
                            Audited and remediated onboarding form, used by
                            millions of users, to meet WCAG 2.0 AA compliance
                        </li>
                        <li>Collaborated on moving to a monorepo</li>
                        <li>
                            Migrated the application from JavaScript to
                            TypeScript
                        </li>
                    </ul>
                </p>
            </div>
            <hr aria-hidden="true" />
            <div>
                <h3>Lead Frontend Developer</h3>
                <h4>Level Access</h4>
                <p>
                    <ul>
                        <li>
                            Led the remediation project for a recruitment app to
                            meet WCAG 2.0 AA compliance
                        </li>
                        <li>
                            Built accessibile components, including, modal focus
                            trap, date picker, and data table
                        </li>
                    </ul>
                </p>
            </div>
            <hr aria-hidden="true" />
            <div>
                <h3>Frontend UX Developer</h3>
                <h4>Shopify</h4>
                <p>
                    <ul>
                        <li>
                            Contributed to maintaining and evolving the{" "}
                            <Link
                                href="https://polaris.shopify.com/"
                                external
                                type="BODY"
                            >
                                Polaris design system
                            </Link>
                        </li>
                        <li>
                            Built accessible React components and remediated
                            existing components (such as: global chrome, toast,
                            modal, popover, dual-input range slider, drawer,
                            data table, search filters, and resource list)
                        </li>
                        <li>
                            Wrote 80 unit tests to bring total code coverage to
                            90%
                        </li>
                        <li>
                            Wrote documentation for new and existing components
                        </li>
                        <li>Mentored a Dev Degree student </li>
                        <li>Performed A/B testing with existing customers </li>
                        <li>
                            Migrated a portion of the main admin section from
                            Rails to React
                        </li>
                        <li>Won a Hack Days competition</li>
                        <li>
                            Wrote{" "}
                            <Link
                                href="https://shopify.engineering/building-data-table-component-react"
                                external
                                type="BODY"
                            >
                                Building a Data Table Component in React
                            </Link>{" "}
                            for the Shopify Engineering blog
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
}
