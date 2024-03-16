import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <body onScroll={console.log}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
