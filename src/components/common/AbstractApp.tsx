'use client';

import { darkTheme, globalStyles } from '@/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';

import React from 'react';
// import { LazyMotion, domAnimation } from "framer-motion";
import { Theme as RadixTheme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import '@radix-ui/themes/styles.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 3 * 60 * 1000,
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export const queryClient = getQueryClient();

interface AbstractAppProps extends React.PropsWithChildren {
  initialSession?: any;
}

const AbstractApp = (pageProps: AbstractAppProps) => {
  globalStyles();
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        value={{ light: 'light', dark: darkTheme.className }}
      >
        <RadixTheme hasBackground={false}>
          <div>
            {isClientReady && (
              <QueryClientProvider client={queryClient}>
                {pageProps?.children}
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            )}
          </div>
        </RadixTheme>
        <Toaster
          richColors
          position="top-right"
          style={{
            zIndex: 9999999999,
          }}
        />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default AbstractApp;
