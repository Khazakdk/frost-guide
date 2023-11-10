import "./styles.css";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      router.reload();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      // Remove the event listener when the component is unmounted
      window.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-17D6NQ4BHT`}
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', G-17D6NQ4BHT);
        `}
      </Script>
      <Script strategy="lazyOnload" id="whtooltips">
        {`
          const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};
        `}
      </Script>
      <Script id="whscript"
        strategy="lazyOnload"
        src="https://wow.zamimg.com/js/tooltips.js"
      />
      <Component {...pageProps} />
    </>
  );
}
