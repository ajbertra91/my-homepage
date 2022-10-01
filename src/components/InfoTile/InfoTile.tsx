import styles from '../../styles/InfoTile.module.scss';

interface InfoTileProps {
  title: string;
  job: string | null;
  subtitle: string | null;
}

const InfoTile = ({ title, job, subtitle }: InfoTileProps) => {
  return (
    <div className={styles['info-tile']}>
      <p className={styles.title}>{title}</p>
      {job ? <p className={styles.job}>{job}</p> : null}
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}

export default InfoTile;
