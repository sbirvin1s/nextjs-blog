/* ========== EXTERNAL MODULES ========== */
import { AppProps } from 'next/app';

/* ========== INTERNAL MODULES ========== */
import '../styles/globals.css';

/* ========== EXPORTS ========== */
export default function App({ Component, pageProps }: AppProps) {

  /* --- RENDERER --- */
  return <Component {...pageProps} />
}