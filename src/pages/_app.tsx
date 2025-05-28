import '@/styles/main.css'
import '@/styles/composition.css'
import '@/styles/design.css'
import '@/styles/prices-tables.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
