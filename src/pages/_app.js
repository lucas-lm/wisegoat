import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'

const theme = {
  colors: {
    primary: '#72005F',
    secondary: '#BAA193',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    )
  }
}
