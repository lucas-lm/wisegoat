import fs from "fs"
import path from "path"
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Logo from '../../components/Logo'
import Root, { Card } from '../../components/Layouts/Advice'
import Footer from '../../components/Footer'

const PREFIXES = [
  'Mr.',
  'Miss',
  'Lazy',
  'Happy',
  'Rich',
  'Screaming',
  'Another',
  'Strange',
  'Coach',
  'Dr.',
  'Amazing',
  'Super'
]

const PICS_FOLDER_NAME = "goats"
const PICS_DIRECTORY = path.join(process.cwd(), "public", PICS_FOLDER_NAME)

const getPicsCount = () => {
    return fs.readdirSync(PICS_DIRECTORY).length
}

export async function getServerSideProps(context) {
  const goatsPicsCount = getPicsCount()
  const { data } = await axios.get('https://api.adviceslip.com/advice')
  const { id, advice } = data.slip
  const goatNumber = (id % goatsPicsCount + 1)
  const goatSrc = `/goats/goat_${goatNumber}.jpg`
  const goatName = `${PREFIXES[goatNumber - 1]} Goat`
  return {
    props: { advice, id, goatNumber, goatName, goatSrc }
  }
}

export default function Advise(props) {

  console.log(props.goatSrc);
  return (
    <Root>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100300400500700900&display=swap"
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
          <small>&mdash; {props.goatName}</small>
        </Card.Quote>
        <Card.Image src={props.goatSrc} alt="goat" />
        <Link href="/advice" passHref>
          <Card.Button>Get another advice &rarr;</Card.Button>
        </Link>
      </Card>
      <Footer />
    </Root>
  )
}
