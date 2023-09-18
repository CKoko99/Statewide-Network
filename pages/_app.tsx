import '../providers/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { ThemeProvider } from '@emotion/react';
import theme from "../providers/theme";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
