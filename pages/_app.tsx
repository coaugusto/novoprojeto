import {  ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'
import { theme } from '../styles/theme'



interface ThemeInterface {
  colors: {
    primary: string
  }
}


export default function App({ Component, pageProps }) {
  return (
    <>
      
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
