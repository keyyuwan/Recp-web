import { AppProps } from "next/app"
import { initServer } from "../services/mirage"

if (process.env.NODE_ENV === "development") {
  initServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
