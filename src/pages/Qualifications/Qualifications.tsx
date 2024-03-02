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
        <h2>Skills</h2>
        <ul>
          <li>TypeScript, JavaScript (ES6), jQuery</li>
          <li>React, React hooks</li>
          <li>HTML</li>
          <li>CSS, Sass, CSSinJS</li>
          <li>Jest, Enzyme, Mocha, React Testing Library</li>
          <li>Cypress</li>
          <li>Percy</li>
          <li>Git</li>
          <li>GraphQL, Apollo</li>
          <li>Redux, Redux Saga</li>
          <li>Webpack, Babel, Vite</li>
          <li>NVDA, JAWS, VoiceOver, TalkBack</li>
          <li>Axe, WAVE, BrowserStack</li>
        </ul>
        <hr aria-hidden="true" />
        <h2>Certifications</h2>
        <ul>
          <li>
            IAAP Certified Professional in Accessibility Core Competencies (
            <Link
              href="https://www.accessibilityassociation.org/s/certified-professional"
              external
              type="BODY"
            >
              CPACC
            </Link>
            )
          </li>
          {/* <li>
                        IAAP Certified Web Accessibility Specialist (
                        <Link
                            href="https://www.accessibilityassociation.org/s/wascertification"
                            external
                        >
                            WAS
                        </Link>
                        )
                    </li> */}
          <li>Deque Systems Web Accessibility</li>
        </ul>
        <hr aria-hidden="true" />
        <h2>Experience</h2>
        <h3>Lead Digital Accessibility Specialist</h3>
        <h4>Scotiabank</h4>
        <p>
          <ul>
            <li>
              Improve the craft of senior accessibility subject matter experts
              by providing technical leadership and pair programming
            </li>
            <li>
              Empower project managers, designers, developers, and QA
              conformance testers to democratize accessibility across all of
              Scotia Digital apps and websites by producing a standardized set
              of accessibility guidelines, including best practices, code
              samples, and acceptance criteria
            </li>
            <li>
              Mature Scotia Digital's accessibility program by recommending
              scalable processes across the software development lifecycle
            </li>
            <li>
              Consolidate accessibility reporting by developing a maturity
              assessment score card with quantitative metrics
            </li>
            <li>
              Streamline accessibility by evaluating and recommending tools for
              designers, developers, and conformance testers
            </li>
            <li>
              Drive adoption of accessibility best practices through
              relationship building and communications channels
            </li>
            <li>
              Foster collaboration by participating in an organizing committee
              for learning sessions with the digital customer experience
              department
            </li>
            <li>
              Provide career guidance through mentorship of a university student
            </li>
          </ul>
        </p>
      </div>
      <hr aria-hidden="true" />
      <div>
        <h3>Senior Software Engineer (Accessibility)</h3>
        <h4>Achievers</h4>
        <p>
          <ul>
            <li>
              Brought the React design system component library to WCAG 2.1 AA
              compliance by auditing each component and leading the remediation
              team
            </li>
            <li>
              Extended and maintained the design system by refactoring and
              adding accessible custom components and a theme engine, in
              addition to managing deployments
            </li>
            <li>
              Improved the accessibility expertise of senior software developers
              across 9 engineering teams by providing technical guidance and
              mentorship
            </li>
            <li>
              Significantly improved the accessibility conformance of the web
              and mobile apps by auditing and remediating violations
            </li>
            <li>
              Reduced accessibility conformance risks by writing unit tests and
              configuring engineering a11y tools
            </li>
            <li>
              Partnered with the UX Design Manager to build the accessibility
              program for the company, including design reviews, user stories,
              technical guidance, developer onboarding, tooling, QA, and content
              strategy
            </li>
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
              Performed accessibility conformance testing on websites, web apps,
              mobile apps, designs, and digital assets
            </li>
            <li>
              Assisted clients in reaching WCAG conformance as a developer
              consultant by providing technical guidance and remediation
              solutions
            </li>
            <li>
              Helped improve the accessibility knowledge of a software
              development team by producing technical documentation and training
              videos for designers and developers
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
            <li>
              Built the internal design system as a member of the Frontend Guild
            </li>
            <li>
              Implemented Shopify integration features and displayed store
              metrics using Shopfiy’s API
            </li>
            <li>
              Improved accessibility by auditing and remediating the onboarding
              form, used by millions of users
            </li>
            <li>Migrated the application from JavaScript to TypeScript</li>
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
              Brought a job site app to WCAG 2.0 AA conformance by leading the
              remediation project
            </li>
            <li>
              Created accessible solutions by developing custom components, such
              as a modal focus trap and accessible date picker
            </li>
            <li>
              Mitigated regression risks by writing end-to-end and unit tests
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
              Evolved the{" "}
              <Link href="https://polaris.shopify.com/" external type="BODY">
                Polaris
              </Link>{" "}
              design system by refactoring existing components and developing
              new accessible components, including global chrome, dual thumb
              range slider, toast, drawer, data table, modal dialog, and popover
            </li>
            <li>
              Increased overall code coverage to 90% by writing nearly 100 unit
              tests
            </li>
            <li>
              Improved technical guidance for developers and third-party
              developers by writing documentation for the design system
            </li>
            <li>
              Improved the Shopify admin by migrating a section from Rails to
              React, developing the filters and search section, and developing a
              customer dashboard
            </li>
            <li>
              Improved accessibility of many components by collaborating with
              the accessibility specialist on the Polaris team
            </li>
            <li>
              Won a Hack Days competition with an SEO tool that was ultimately
              built into the admin section
            </li>
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
            <li>Mentored a Dev Degree university student</li>
          </ul>
        </p>
      </div>
      <hr aria-hidden="true" />
      <div>
        <h3>Frontend Developer</h3>
        <h4>MoneyMover</h4>
        <p>
          <ul>
            <li>
              Streamlined user onboarding by redesigning and developing the KYC
              and documents upload process
            </li>
            <li>
              Improved UX by designing and developing a bulk payments feature,
              improving forms and form validation, and building async XHR
              requests for dynamic page updates
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}
