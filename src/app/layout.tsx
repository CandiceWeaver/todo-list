'use client'

import theme from '@/globalTheme'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans',
})

export const metadata = {
  title: 'To Do List',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang='en'>
        <head>
          <link rel='icon' sizes='any' href='favicon.png' />
        </head>
        <body style={{ margin: 0 }}>
          <main className={openSans.variable}>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  )
}
