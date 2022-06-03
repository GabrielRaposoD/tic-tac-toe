import 'styles/base.css';
import 'styles/components.css';
import 'styles/utilities.css';

import { AppProps } from 'next/app';
import { TicTacToeContextProvider } from 'contexts';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <TicTacToeContextProvider>
      <Component {...pageProps} key={router.route} />
    </TicTacToeContextProvider>
  );
}
