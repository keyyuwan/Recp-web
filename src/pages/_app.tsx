import { AppProps } from "next/app"
import { Header } from "../components/Header"
import { initServer } from "../services/mirage"
import { GlobalStyle } from "../styles/global"

if (process.env.NODE_ENV === "development") {
  initServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
