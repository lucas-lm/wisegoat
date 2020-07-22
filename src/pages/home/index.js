import Head from 'next/head'
import Link from 'next/link'
import Root, { Headline, Hero, CTA } from '../../components/Layouts/Home'

export default function Home() {
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
          content="Get advices from the best goats you will ever met! It is free 🐐"
        />
        <title>Wise Goat - home</title>
      </Head>
      <Hero>
        <Hero.Left>
          <Headline>
            <Headline.Small>Wise</Headline.Small>
            <br /> Goat
          </Headline>
          <Link href="/advice" passHref>
            <CTA>Ask advise</CTA>
          </Link>
        </Hero.Left>
        <Hero.Image src="/assets/bodezinho.png" alt="little goat" />
      </Hero>
    </Root>
  )
}
