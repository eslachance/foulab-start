/// <reference types="vite/client" />
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'
import {
  ClerkProvider,
} from '@clerk/tanstack-start'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Meta, Scripts, createServerFn } from '@tanstack/start'
import * as React from 'react'
import { getAuth } from '@clerk/tanstack-start/server'
import { getWebRequest } from 'vinxi/http'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary.js'
import { Header, Navbar } from '~/components/layout'
import { NotFound } from '~/components/NotFound.js'
import appCss from '~/styles/app.css?url'

const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
  const user = await getAuth(getWebRequest())

  return {
    user,
  }
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    title: 'Welcome to Foulab'
  }),
  beforeLoad: async () => {
    const { user } = await fetchClerkAuth()

    return {
      user,
    }
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <ClerkProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ClerkProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body className="bg-[#adadad]">
        <canvas className="w-full h-full fixed left-0 top-0 z-[-5]" />
        <div id="main" className="flex flex-col max-w-[890px] mx-auto my-0 shadow-[0_0_100px_25px_rgba(0,0,0,0.8)]">
          <Header />
          <div id="content-wrapper" className="flex-auto flex content-between border-l-solid border-l-[#22180b] border-l-[1px]">
            <div id="content" className="bg-white color-black p-3 text-xs basis-0 grow-[999]">
              <div className="content-headline w-full border-b-solid border-b-[#22180b] border-b-[1px] capitalize mb-5">
                (headline)
              </div>
              {children}
            </div>
            <Navbar />
            </div>
          <div id="footer" className="h-[50px] bg-gray-600 border-x-solid border-x-[#22180b] border-x-[1px] text-[7pt] pt-4">

          </div>
        </div>
        <ScrollRestoration />
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
