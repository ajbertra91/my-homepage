import { useEffect, useState, useRef } from 'react';
import styles from '../../styles/TabContainer.module.scss';
import { trpc } from '../../utils/trpc';
import TabContentList from '../TabContentList';
import TabContentText from "../TabContentText";

const TabContainer = () => {
  const apiData = trpc.useQuery(['work-history']);
  const {data} = apiData;
  const [activeTab, setActiveTab] = useState<String>();
  const tabOneRef = useRef<HTMLButtonElement>(null);
  const tabTwoRef = useRef<HTMLButtonElement>(null);

  const handleTabClick = (newTab: string | null) => {
    if (!newTab) return;
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

  useEffect(() => {
    setActiveTab(data?.TAB_ONE || "Work History");
  }, [])

  return (
    <>
      {!data && <h1>Loading.....</h1>}
      {data &&  <div>
        <div className={styles['tab-header']} role="tablist">
          <button
            ref={tabOneRef}
            id={`${data.TAB_ONE}-tab`}
            className={activeTab === data.TAB_ONE ? styles['button-is-active'] : styles.button}
            type="button"
            role="tab"
            aria-selected={activeTab === data.TAB_ONE}
            aria-controls={`${data.TAB_ONE}-tab-panel`}
            tabIndex={activeTab === data.TAB_ONE ? 0 : -1}
            onClick={() => handleTabClick(data.TAB_ONE) }
            onKeyDown={(e) => handleKeyPress((e.target as HTMLButtonElement), e.key)}
          >{data.TAB_ONE}</button>
          <button
            ref={tabTwoRef}
            id={`${data.TAB_TWO}-tab`}
            className={activeTab === data.TAB_TWO ? styles['button-is-active'] : styles.button}
            type="button"
            role="tab"
            aria-selected={activeTab === data.TAB_TWO}
            aria-controls={`${data.TAB_TWO}-tab-panel`}
            tabIndex={activeTab === data.TAB_TWO ? 0 : -1}
            onClick={ () => handleTabClick(data.TAB_TWO) }
            onKeyDown={(e) => handleKeyPress((e.target as HTMLButtonElement), e.key)}
          >{data.TAB_TWO}</button>
        </div>
        {activeTab === data.TAB_ONE
          ? <div
              className={styles['tab-content']}
              id={`${data.TAB_ONE}-tab-panel`}
              role="tabpanel"
              aria-labelledby={`${data.TAB_ONE}-tab`}
            >
              <TabContentText
                title="A short intro"
                job={null}
                subtitle="2022"
              description={data.introDesc}
              />
              <TabContentList
                title="Empower, Remote"
                job="Sr Specialist, Systems Development"
                subtitle="04/2022 - present"
                description={data.empowerDesc}
              />
              <TabContentList
                title="Prudential, Remote"
                job="Sr Specialist, Systems Development"
                subtitle="11/2019 - 03/2022"
                description={data.prudentialDesc}
              />
              <TabContentList
                title="TechSystems (Voya), Remote"
                job="Sr Developer"
                subtitle="02/2016 - 11/2019"
                description={data.voyaDesc}
              />
              <TabContentList
                title="SportsHub Games Network, Collinsville, CT"
                job="Front End Developer"
                subtitle="11/2012 - 02/2016"
                description={data.sportsTechDesc}
              />
              <TabContentList
                title="Idea Agency, Sturbridge, MA"
                job="Web Developer"
                subtitle="09/2011 - 11/2012"
                description={data.ideaAgencyDesc}
              />
              <TabContentList
                title="Freelance, USA & Korea"
                job="Web Developer"
                subtitle="05/2004 - 09/2011"
                description={data.freelanceDesc}
              />
            </div>
          : null
        }
        {activeTab === data.TAB_TWO
          ? <div
              className={styles['tab-content']}
              id={`${data.TAB_TWO}-tab-panel`}
              role="tabpanel"
              aria-labelledby={`${data.TAB_TWO}-tab`}
            >
              {data.schools?.map((school: Record<string, string>) => (
                <TabContentText
                  key={school.name}
                  title={school.yearsAttended}
                  job=""
                  subtitle={school.degree}
                  description={school.name}
                />
              ))}
            </div>
          : null
        }
      </div>}
    </>
  )
}

export default TabContainer;
