import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class StyledDocument extends Document {
  // StyledComponents being injected
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans:300,900|Staatliches'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='../static/favicon.ico' />
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
