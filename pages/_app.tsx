import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import styles from '../styles/globals.module.scss'
import { SearchProvider } from '../components/SearchContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <ChakraProvider>
          <div className={styles.app}>
          <Component {...pageProps} />
          </div>      
      </ChakraProvider>
      </SearchProvider>
  )
  
  
}
