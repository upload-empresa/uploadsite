import '../styles/global.css'

import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { SnackbarProvider } from 'notistack'
import { Store, StoreProvider } from '../utils/Store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <StoreProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </StoreProvider>
    </SnackbarProvider>
  )

}

export default MyApp