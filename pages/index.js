import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio Krystian Heluszka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to on my <a>Portfolio</a>
        </h1>

        <p className={styles.description}>
          Website is under construction
        </p>

        <Image src="/images/image.svg" width={500} height={500} alt="Image"/>

      </main>

      <footer className={styles.footer}>
          Copyright © by Ombre
      </footer>
    </div>
  )
}
