import "../styles/globals.css";
import Head from "next/head";
import {ClerkProvider} from '@clerk/nextjs'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
    <main>
      <Head>
        <title>Split</title>
        <meta
          name='description'
          content='The ultimate way to get more website traffic and grow your online business.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </main>
    </ClerkProvider>
  );
}
