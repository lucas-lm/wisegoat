import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

export default function Advise() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}
