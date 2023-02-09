import '../styles/global.css'

import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { SnackbarProvider } from 'notistack'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <ChakraProvider resetCSS theme={theme}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
    </SnackbarProvider>
  )

}

export default MyApp