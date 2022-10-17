import Head from 'next/head'
import HomePage from '../sections/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio Krystian Heluszka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>

    </>
  )
}
