import { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
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
    <SessionProvider session={pageProps.session}>
      <DrawerProvider>
        <GlobalStyle />

        <Drawer />
        <Header />
        <Component {...pageProps} />
      </DrawerProvider>
    </SessionProvider>
  )
}

export default MyApp
