import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { TamaguiProvider } from 'tamagui'
import Head from 'next/head'
import React from 'react'
import config from '../../tamagui.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useRootTheme()
  return (
    <NextThemeProvider onChangeTheme={setTheme}>
        <TamaguiProvider
          config={config}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          {children}
        </TamaguiProvider>
    </NextThemeProvider>
  )
}

export default MyApp
