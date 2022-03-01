import Head from 'next/head'
import Link from 'next/link'
import Root, { Headline, Hero, CTA } from '../../components/Layouts/Home'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <Root>
      <Head>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="description"
          content="Get advices from the best goats you will ever met! It is free 🐐"
        />
        <meta
          property="og:description"
          content="Get advices from the best goats you will ever met! It is free 🐐"
        />
        <meta property="og:title" content="Wise Goat" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wise Goat" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://wisegoat.now.sh" />
        <meta
          property="og:image"
          content="https://wisegoat.now.sh/banner.png"
        />
        <title>Wise Goat - Get smart advices from our goats</title>
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
      <Footer />
    </Root>
  )
}
