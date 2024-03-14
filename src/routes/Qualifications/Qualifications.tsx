import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faSass,
  faGithub,
  faGitlab,
  faPython,
  faCss3,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

import Block from '../../components/Block/Block';
import Link from '../../components/Link/Link';
import Tag from '../../components/Tag/Tag';
import Flex from '../../components/Flex/Flex';

export default function Qualifications() {
  return (
    <>
      <h1>Qualifications</h1>
      <Block>
        <h2>Certifications</h2>
        <ul>
          <li>
            IAAP Certified Professional in Accessibility Core Competencies (
            <Link
              href='https://www.accessibilityassociation.org/s/certified-professional'
              external
              type='BODY'
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
          <li>
            <Link
              href='https://www.deque.com/training/?branded=&utm_term=deque%20accessibility%20training&utm_campaign=Search+-+Branded&utm_source=adwords&utm_medium=ppc&hsa_src=g&hsa_ad=430042340360&hsa_tgt=aud-962204394155:kwd-1594574712882&hsa_mt=e&hsa_ver=3&hsa_acc=7854167720&hsa_kw=deque%20accessibility%20training&hsa_grp=98767378974&hsa_cam=1494072164&hsa_net=adwords&gad_source=1&gclid=Cj0KCQjw-r-vBhC-ARIsAGgUO2ACHlp4Xpx8ox0J2O4Y264yMQtfO_liBrrF0KS3qQ1lGf7bmDrsChcaAu2pEALw_wcB'
              external
              type='BODY'
            >
              Deque Systems Web Accessibility
            </Link>
          </li>
        </ul>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h2>Publications</h2>
        <Link
          href='https://shopify.engineering/building-data-table-component-react'
          external
          type='BODY'
        >
          Building a Data Table Component in React
        </Link>
        <hr aria-hidden='true' />
        <h2>Professional Experience &amp; Technology</h2>
        <h3>Lead Digital Accessibility Specialist</h3>
        <h4>Scotiabank</h4>
        <Flex justifyContent='flex-start' gap='0.5rem'>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faUniversalAccess} /> a11y
            </Flex>
          </Tag>
          <Tag>NVDA</Tag>
          <Tag>WCAG</Tag>
        </Flex>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h3>Senior Software Engineer (Accessibility)</h3>
        <h4>Achievers</h4>
        <Flex justifyContent='flex-start' flexWrap='wrap' gap='0.5rem'>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faUniversalAccess} /> a11y
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faReact} /> React
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faSass} /> SASS
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </Flex>
          </Tag>
          <Tag>Jest</Tag>
          <Tag>React Testing Library</Tag>
          <Tag>Design System</Tag>
          <Tag>Storybook</Tag>
          <Tag>NVDA</Tag>
          <Tag>WCAG</Tag>
          <Tag>BrowserStack</Tag>
        </Flex>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h3>Accessibility Engineer</h3>
        <h4>Allyant</h4>
        <Flex justifyContent='flex-start' flexWrap='wrap' gap='0.5rem'>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faUniversalAccess} /> a11y
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faHtml5} /> HTML
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </Flex>
          </Tag>
          <Tag>NVDA</Tag>
          <Tag>WCAG</Tag>
        </Flex>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h3>Senior Software Engineer</h3>
        <h4>Xapo Bank</h4>
        <Flex justifyContent='flex-start' flexWrap='wrap' gap='0.5rem'>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faReact} /> React
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              TypeScript
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              Redux
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              Redux Saga
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              Styled Components
            </Flex>
          </Tag>
        </Flex>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h3>Lead Frontend Developer</h3>
        <h4>Level Access</h4>
        <Flex justifyContent='flex-start' flexWrap='wrap' gap='0.5rem'>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faUniversalAccess} /> a11y
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faReact} /> React
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              Knockout.js
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              Cypress
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              WCAG
            </Flex>
          </Tag>
        </Flex>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h3>Frontend UX Developer</h3>
        <h4>Shopify</h4>
        <Flex justifyContent='flex-start' flexWrap='wrap' gap='0.5rem'>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faUniversalAccess} /> a11y
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faReact} /> React
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              TypeScript
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faSass} /> SASS
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </Flex>
          </Tag>
          <Tag>Jest</Tag>
          <Tag>Enzyme</Tag>
          <Tag>Percy</Tag>
          <Tag>GraphQL</Tag>
          <Tag>Design System</Tag>
          <Tag>Storybook</Tag>
          <Tag>WCAG</Tag>
        </Flex>
        <hr aria-hidden='true' />
      </Block>
      <Block>
        <h3>Frontend Developer</h3>
        <h4>MoneyMover</h4>
        <Flex justifyContent='flex-start' flexWrap='wrap' gap='0.5rem'>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              jQuery
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faCss3} /> CSS
            </Flex>
          </Tag>

          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faPython} /> Python
            </Flex>
          </Tag>
          <Tag>
            <Flex justifyContent='center' alignItems='center' gap='0.5rem'>
              <FontAwesomeIcon icon={faGitlab} /> GitLab
            </Flex>
          </Tag>
        </Flex>
      </Block>
    </>
  );
}
