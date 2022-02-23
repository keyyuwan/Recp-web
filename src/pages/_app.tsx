import { AppProps } from "next/app"
import { initServer } from "../services/mirage"
import { DrawerProvider } from "../contexts/DrawerContext"
import { Header } from "../components/Header"
import { Drawer } from "../components/Drawer"
import { GlobalStyle } from "../styles/global"

if (process.env.NODE_ENV === "development") {
  initServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DrawerProvider>
      <GlobalStyle />

      <Drawer />
      <Header />
      <Component {...pageProps} />
    </DrawerProvider>
  )
}

export default MyApp
