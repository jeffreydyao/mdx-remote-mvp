// Sample implementation of Stork Search in React

import Script from "next/script"
import { useEffect } from "react"

export default function Stork () {
  // Initialises Stork on page, targeting elements with data-stork prop and loading index
  useEffect(() => {
    window.stork.register("federalist", "https://files.stork-search.net/releases/v1.4.2/federalist.st")
  })

  return (
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <title>Federalist Search</title>
        <link rel='stylesheet' href='https://files.stork-search.net/releases/v1.4.2/basic.css' />
      </head>
      <body>
        <div class='stork-wrapper'>
          <input data-stork='federalist' class='stork-input' />
          <div data-stork='federalist-output' class='stork-output'></div>
        </div>
      </body>
    </html>
  )
}
