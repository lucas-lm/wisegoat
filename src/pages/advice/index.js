import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Logo from '../../components/Logo'
import Root, { Card } from '../../components/Layouts/Advice'

export async function getServerSideProps(context) {
  const { data } = await axios.get('https://api.adviceslip.com/advice')
  return {
    props: { advice: data.slip.advice, id: data.slip.id },
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
      </Head>
      <Logo size={4} />
      <Card>
        <Card.Quote>
          <q>{props.advice}</q>
          <br />
          <small>&mdash; Goat</small>
        </Card.Quote>
        <Card.Image src="https://placegoat.com/400/400" alt="goat" />
      </Card>
    </Root>
  )
}
