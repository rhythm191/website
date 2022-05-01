import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="description" content="Rhyztech is tech team powered by rhythm191" />
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
