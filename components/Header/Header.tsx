import type { NextPage } from 'next';
import styles from '../../styles/Header.module.scss';

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>
          <span className={styles['name-resume']}>Resume</span>
          <span className={styles['name-proper']}>Adam Bertrand</span>
          <span className={styles['name-job-title']}>Sr Front End Developer</span>
        </h1>
        <div className={styles.info}>
          <ul>
            <li><span>T</span><a href="tel:860-384-3921">860-384-3921</a></li>
            <li><span>M</span><a href="mailto:ajbertra91@gmail.com">ajbertra91@gmail.com</a></li>
            <li><span>W</span><a href="https://www.linkedin.com/in/adambertrand/" target="_blank">linkedin.com/in/adambertrand</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
