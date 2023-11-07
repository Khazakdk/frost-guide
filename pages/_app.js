import './styles.css'
import Script from 'next/script'
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${process.env.GA_MEASUREMENT_ID});
        `}
      </Script>
      <Script id="whtooltips">
        {`
          const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};
        `}
      </Script>
      <Script src="https://wow.zamimg.com/js/tooltips.js"/>
      <Component {...pageProps} />
    </div>
  )
}