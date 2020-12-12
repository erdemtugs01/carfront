import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vehicle History API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/citizens" className={styles.card}>
            <h3>Search by Citizens &rarr;</h3>
            <p>You can see vehicles associated with the citizen</p>
          </a>

          <a href="/vehicles" className={styles.card}>
            <h3>Search by Vehicles &rarr;</h3>
            <p>You can find vehicles with their plate number or with VIN number</p>
          </a>

        </div>
      </main>
    </div>
  )
}
