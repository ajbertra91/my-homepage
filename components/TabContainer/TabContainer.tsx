import { useEffect, useState, useRef } from 'react';
import styles from '../../styles/TabContainer.module.scss';
import TabContentList from '../TabContentList';
import TabContentText from "../TabContentText";

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState<String>();
  const tabOneRef = useRef<HTMLButtonElement>(null);
  const tabTwoRef = useRef<HTMLButtonElement>(null);

  const handleTabClick = (newTab: string) => {
    setActiveTab(newTab);
  }
  const handleKeyPress = (target: HTMLButtonElement, key: string) => {
    if (key === 'ArrowRight') {
      if (target === tabOneRef.current) {
        tabTwoRef?.current?.focus();
      } else {
        tabOneRef?.current?.focus();
      }
    } else
    if (key === 'ArrowLeft') {
      if (target === tabOneRef.current) {
        tabTwoRef?.current?.focus();
      } else {
        tabOneRef?.current?.focus();
      }
    }
  }

  const getYear = () => {
    return new Date().getFullYear() - 2011;
  }

  const TAB_ONE = 'Work History';
  const TAB_TWO = 'Education';
  const empowerDesc = ['Maintain the high performance of  the Prudential apps purchased by Empower, with a similar role as described below.'];
  const prudentialDesc = [
    'Improved application Ease-of-Doing-Business score from 6.8 to 8.9 (out of 10)',
    'Modernized applications, adding responsive micro-frontend increasing performance from 8s to less than 2s',
    'Acted as technical resource to development staff in all phases of the development and implementation process. Had responsibility for application availability, health checks and business continuation with a great sense of urgency.',
    'Took leadership role in incident problem resolution. Decisions are guided by policies, procedures and business plan.'
  ];
  const voyaDesc = [
    'Developed and maintained dynamic and reusable custom elements with  ES6+, hyperHtml, HTML5, CSS3. Architectured responsive SPAs in  Backbone, Aurelia, Angular frameworks; utilized Gulp, JSPM, NPM,  System.js, Node.js, Babel.js to code split and bundle JS modules to be delivered as needed to the UI for apps for the customer experience, apps like Voya Digital Account Opening, MyVoya, Voya Orange Money, Voya Digital Adviser, MyVoya SSO',
    'Decreased defects during development by building out e2e tests to be run in Jenkins.',
    'Spearheaded web accessibility upgrades to components and apps.',
    'Capitalized on AGILE processes to successfully collaborate in a high pressure, fast paced environment.',
  ];
  const sportsTechDesc = [
    'Successfully designed, and coded web and hybrid fantasy sports applications for the NFL, NHL, NCAA, PGA TOUR, NASCAR, MLS, Breeders Cup.',
    'Utilized Angularjs, Ionic 1.x, JavaScript, HAML, SASS',
  ];
  const ideaAgencyDesc = [
    'Lead web developer, responsible for coding, deploying and supporting CMS based sites for the agency and their clients.',
    'Designed and animated digital web ads for all platforms.',
  ];
  const freelanceDesc = [
    'Built WordPress sites and maintained them for clients in the USA and an English website for SoonChunHyang University in South Korea.'
  ];
  const getSdsuDesc = () => (<><a href="https://www.sdstate.edu/" target="_blank">South Dakota State University</a>, Brookings, SD</>)
  const getAugieDesc = () => (<><a href="https://www.augie.edu/"> Augustana University</a>, Sioux Falls, SD</>)
  const introDesc = `${getYear()} years of front - end development experience, delivers projects on time, adapts quickly, enjoys learning new skills; delivers solutions for nationally recognized brands including the NFL, NHL, PGA TOUR, NASCAR, MLS, NCAA, Voya Financial, Prudential, Empower Retirement.`
  useEffect(() => {
    setActiveTab(TAB_ONE)
  }, [])

  return (
    <>
      <div className={styles['tab-header']} role="tablist">
        <button
          ref={tabOneRef}
          id={`${TAB_ONE}-tab`}
          className={activeTab === TAB_ONE ? styles['button-is-active'] : styles.button}
          type="button"
          role="tab"
          aria-selected={activeTab === TAB_ONE}
          aria-controls={`${TAB_ONE}-tab-panel`}
          tabIndex={activeTab === TAB_ONE ? 0 : -1}
          onClick={ () => handleTabClick(TAB_ONE) }
          onKeyDown={(e) => handleKeyPress((e.target as HTMLButtonElement), e.key)}
        >{TAB_ONE}</button>
        <button
          ref={tabTwoRef}
          id={`${TAB_TWO}-tab`}
          className={activeTab === TAB_TWO ? styles['button-is-active'] : styles.button}
          type="button"
          role="tab"
          aria-selected={activeTab === TAB_TWO}
          aria-controls={`${TAB_TWO}-tab-panel`}
          tabIndex={activeTab === TAB_TWO ? 0 : -1}
          onClick={ () => handleTabClick(TAB_TWO) }
          onKeyDown={(e) => handleKeyPress((e.target as HTMLButtonElement), e.key)}
        >{TAB_TWO}</button>
      </div>
      {activeTab === TAB_ONE
        ? <div
            className={styles['tab-content']}
            id={`${TAB_ONE}-tab-panel`}
            role="tabpanel"
            aria-labelledby={`${TAB_ONE}-tab`}
          >
            <TabContentText
              title="A short intro"
              job={null}
              subtitle="2022"
            description={introDesc}
            />
            <TabContentList
              title="Empower, Remote"
              job="Sr Specialist, Systems Development"
              subtitle="04/2022 - present"
              description={empowerDesc}
            />
            <TabContentList
              title="Prudential, Remote"
              job="Sr Specialist, Systems Development"
              subtitle="11/2019 - 03/2022"
              description={prudentialDesc}
            />
            <TabContentList
              title="TechSystems (Voya), Remote"
              job="Sr Developer"
              subtitle="02/2016 - 11/2019"
              description={voyaDesc}
            />
            <TabContentList
              title="SportsHub Games Network, Collinsville, CT"
              job="Front End Developer"
              subtitle="11/2012 - 02/2016"
              description={sportsTechDesc}
            />
            <TabContentList
              title="Idea Agency, Sturbridge, MA"
              job="Web Developer"
              subtitle="09/2011 - 11/2012"
              description={ideaAgencyDesc}
            />
            <TabContentList
              title="Freelance, USA & Korea"
              job="Web Developer"
              subtitle="05/2004 - 09/2011"
              description={freelanceDesc}
            />
          </div>
        : null
      }
      {activeTab === TAB_TWO
        ? <div
            className={styles['tab-content']}
            id={`${TAB_TWO}-tab-panel`}
            role="tabpanel"
            aria-labelledby={`${TAB_TWO}-tab`}
          >
            <TabContentText
              title="05/2004"
              job=""
              subtitle="BFA: Graphic Design"
              description={getSdsuDesc()}
            />
            <TabContentText
              title="1999 - 2001"
              job=""
              subtitle="Studied Religion"
              description={getAugieDesc()}
            />
          </div>
        : null
      }
    </>
  )
}

export default TabContainer;
