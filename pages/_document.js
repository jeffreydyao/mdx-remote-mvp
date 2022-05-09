import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document () {
  return (
    <Html>
      <Head>
        <Script src='https://files.stork-search.net/releases/v1.4.2/stork.js' strategy='beforeInteractive' />

        <link rel='stylesheet' href='https://files.stork-search.net/releases/v1.4.2/basic.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
