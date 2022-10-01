import { ReactNode } from 'react';
import styles from '../../styles/Tab.module.scss';
import InfoTile from '../InfoTile';

interface TabContentTextProps {
  title: string;
  job: string | null;
  subtitle: string;
  description: string | ReactNode;
}

const TabContentText = ({ title, job, subtitle, description }: TabContentTextProps) => {
  return (
    <div className={styles['tab-professional-info']}>
      <InfoTile title={title} job={job} subtitle={subtitle} />

      <p className={styles.text}>{description}</p>
    </div>
  )
}

export default TabContentText;