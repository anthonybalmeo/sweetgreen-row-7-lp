import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import favicon from '../assets/favicon.ico'
import ogImage from '../assets/og-image.jpg'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>sweetgreen ✕ Row 7</title>
          <meta name="description" content="100,000 seeds. 6 farms. 1 quest to reimagine flavor." />

          {this.props.styleTags}

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />


          <meta property="og:url" content="https://danbarber.sweetgreen.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="sweetgreen ✕ Row 7" />
          <meta property="og:image" content={ogImage} />
          <meta property="og:description" content="100,000 seeds. 6 farms. 1 quest to reimagine flavor." />
          <meta property="og:site_name" content="sweetgreen ✕ Row 7" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="100,000 seeds. 6 farms. 1 quest to reimagine flavor." />
          <meta name="twitter:site" content="@sweetgreen" />
          <meta name="twitter:url" content="https://danbarber.sweetgreen.com" />
          <meta name="twitter:title" content="sweetgreen ✕ Row 7" />
          <meta name="twitter:description" content="100,000 seeds. 6 farms. 1 quest to reimagine flavor. " />
          <meta name="twitter:image" content={ogImage} />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r; i[r]=i[r]||function(){
                  (i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-8921332-12', 'auto');
              ga('send', 'pageview');
            `}}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MDD6BR9')
            `}}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:873096,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
