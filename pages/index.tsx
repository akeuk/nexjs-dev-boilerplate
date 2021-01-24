import Head from 'next/head'
import styles from 'styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS | Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello NextJS!!!</h1>
      </main>

      <footer className={styles.footer}>
        Powered by&nbsp;<strong>AKEUK</strong>
      </footer>
    </div>
  )
}
export default Home
