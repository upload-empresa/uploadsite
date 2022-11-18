import '../styles/global.css'

import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )

}

export default MyApp