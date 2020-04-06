import "../styles/global.css";
import { SWRConfig } from "swr";

const fetcher = url => fetch(url).then(r => r.json());

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
