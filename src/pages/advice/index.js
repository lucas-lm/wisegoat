import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Logo from '../../components/Logo'
import Root, { Card } from '../../components/Layouts/Advice'
import Footer from '../../components/Footer'

const prefixes = [
  'Mr.',
  'Miss',
  'Lazy',
  'Happy',
  'Rich',
  'Screaming',
  'Another',
  'Strange',
  'Coach',
]

export async function getServerSideProps(context) {
  const { data } = await axios.get('https://api.adviceslip.com/advice')
  const { id, advice } = data.slip
  const goat = `https://placegoat.com/400/400?id=${id}`
  return {
    props: { advice, id, goat },
  }
}

export default function Advise(props) {
  return (
    <Root>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta
          name="description"
          content="Get your free advices here! Our goats will be happy to help you 🐐"
        />

        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          property="og:description"
          content="Get your free advices here! Our goats will be happy to help you 🐐"
        />
        <meta property="og:title" content="Wise Goat" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wise Goat" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://wisegoat.now.sh" />
        <meta
          property="og:image"
          content="https://wisegoat.now.sh/advice-banner.jpg"
        />

        <title>Get advice - Wise Goat</title>
      </Head>
      <Logo size={4} />
      <Card>
        <Card.Quote>
          <q>{props.advice}</q>
          <br />
          <small>&mdash; {prefixes[props.id % prefixes.length]} Goat</small>
        </Card.Quote>
        <Card.Image src={props.goat} alt="goat" />
        <Link href="/advice" passHref>
          <Card.Button>Get another advice &rarr;</Card.Button>
        </Link>
      </Card>
      <Footer />
    </Root>
  )
}
