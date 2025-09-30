import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rico Posas Portfolio</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="jlaskie" />
        <meta name="description" content="A personal portfolio." />
        <meta
          name="robots"
          content="noindex, nofollow, noarchive, nosnippet, noimageindex"
        />
        <meta name="theme-color" content="rgb(103 232 249)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
