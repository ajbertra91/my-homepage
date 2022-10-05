import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import TabContainer from '../components/TabContainer';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Resume site for Adam Bertrand" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/assets/images/favicon-16x16.png" />
        <link rel="icon" type="image/icon-x" href="/static/assets/images/favicon.ico" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/assets/images/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles['main-inner']}>
          <TabContainer />
        </div>
      </main>
    </div>
  )
}

export default Home;
