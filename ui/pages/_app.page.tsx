import type { AppProps } from 'next/app';
import '../styles/globals.css'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Script dangerouslySetInnerHTML={{
        __html: `
        function loadCOIServiceWorker() {
          if (typeof window !== "undefined" && window.location.hostname != 'localhost') {
            const coi = window.document.createElement('script');
            coi.setAttribute('src','/keito/coi-serviceworker.min.js');
            window.document.head.appendChild(coi);
          }
        }
        
        loadCOIServiceWorker();
        `
      }}></Script>
    </>
  )
}
