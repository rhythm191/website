import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { SeoTags } from "../components/SeoTag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <SeoTags
            title="Rhyztech - powered by rhythm191"
            description="Rhyztech is tech team powered by rhythm191"
          />
          <meta name="msapplication-TileColor" content="#0078d7" />
          <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
          <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
          <meta
            name="google-site-verification"
            content="BRJj_dard5y_F7XJG830_Wyo9f3npeybkl0wcG5z2tY"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
