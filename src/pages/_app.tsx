import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

import '../styles/globals.css';
import PageLoader from '../components/pageLoader/pageLoader';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  useEffect(() => {
    setTimeout(() => setLoading(true), 700);
  }, []);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: 'Open Sans'
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {!loading ?
          (<PageLoader />) :
          (<Component {...pageProps} />)
        }
      </MantineProvider>
    </ColorSchemeProvider>
  );

}

export default MyApp;