import styles from '../../styles/Tab.module.scss';
import InfoTile from '../InfoTile';

interface TabContentProps {
  title: string;
  job: string | null;
  subtitle: string;
  description: string[] | null;
}

const TabContentJob = ({ title, job, subtitle, description }: TabContentProps) => {
  console.log('description', description)
  return (
    <div className={styles['tab-professional-info']}>
      <InfoTile title={title} job={job} subtitle={subtitle} />

      <ul className={styles.text}>
        {description?.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default TabContentJob;
