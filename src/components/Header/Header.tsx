import type { NextPage } from 'next';
import styles from '../../styles/Header.module.scss';
import { trpc } from '../../utils/trpc';

const Header: NextPage = () => {
  const apiData = trpc.useQuery(['contact-info']);
  const {data} = apiData;

  return (
    <header className={styles.header}>
      {!data && <div><h1>Loading.....</h1></div>}
      {data && <div>
        <h1 className={styles.title}>
            <span className={styles['name-resume']}>{data.subject}</span>
            <span className={styles['name-proper']}>{data.name}</span>
            <span className={styles['name-job-title']}>{data.jobTitle}</span>
        </h1>
        <div className={styles.info}>
          <ul>
            <li><span>P</span><a href={`tel:${data.phone}`}>{data.phone}</a></li>
            <li><span>M</span><a href={`mailto:${data.email}`}>{data.email}</a></li>
              {data.socialMedia?.map((w: any) => (
                <li key={w.text}><span>W</span><a href={w.url} target="_blank" rel="noreferrer">{w.text}</a></li>
                ))}
            <li><span>R</span><a href={data.resume.url} target="_blank" rel="noreferrer">{data.resume.label}</a></li>
          </ul>
        </div>
      </div>}
    </header>
  )
}

export default Header;
