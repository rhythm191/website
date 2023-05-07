import Script from "next/script";
import React from "react";

const isDevelopment = process.env.NODE_ENV === "development";

export const GoogleAnalytics = () => {
  if (isDevelopment) return null;

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-C3FD0GSKRH`} />
      <Script
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-C3FD0GSKRH', {
              page_path: window.location.pathname,
            });
        `,
        }}
      />
    </>
  );
};
