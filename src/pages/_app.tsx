import { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { DrawerProvider } from "../contexts/DrawerContext"
import { AuthProvider } from "../contexts/AuthContext"
import { Header } from "../components/Header"
import { Drawer } from "../components/Drawer"
import { GlobalStyle } from "../styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
        <DrawerProvider>
          <GlobalStyle />

          <Drawer />
          <Header />
          <Component {...pageProps} />
        </DrawerProvider>
      </AuthProvider>
    </SessionProvider>
  )
}

export default MyApp
