import 'styles/base.css';
import 'styles/components.css';
import 'styles/utilities.css';

import { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Component {...pageProps} key={router.route} />
    </>
  );
}
