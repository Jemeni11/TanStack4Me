import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import Error from '@/components/shared/Error'
import NotFound from '@/components/shared/NotFound'

import appCss from '../styles.css?url'

const meta = {
  title: 'App Name Here',
  description: 'App Description Here',
  OGdescription: 'App OG Description Here',
  url: 'https://URLHERE.XYZ',
  name: 'AUTHOR NAME',
  image: 'https://URLHERE.XYZ/og-image.jpg',
  imageAlt: 'ALT TEXT FOR IMAGE',
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Title & description
      { title: meta.title },
      { name: 'description', content: meta.description },
      {
        name: 'keywords',
        content:
          'architecture firm, global architects, commercial architecture, residential architecture, urban planning, sustainable architecture, building design, interior architecture, construction consulting, African architects, modern architecture, smart city design, architectural services worldwide',
      },
      { name: 'creator', content: meta.name },
      { name: 'robots', content: 'index, follow' },

      // Theme color
      { name: 'theme-color', content: '' },

      // Open Graph
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.OGdescription },
      { property: 'og:url', content: meta.url },
      { property: 'og:site_name', content: meta.name },
      { property: 'og:locale', content: 'en-US' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: meta.image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: meta.imageAlt },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:site', content: '@Jemeni11' },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:creator', content: '@Jemeni11' },
      { name: 'twitter:image', content: meta.image },
      { name: 'twitter:image:alt', content: meta.imageAlt },
    ],
    links: [
      { rel: 'canonical', href: meta.url },
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: appCss },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: meta.name,
          additionalName: 'ADDITIONAL NAME',
          url: meta.url,
          email: 'EMAIL',
          logo: meta.image,
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
  errorComponent: Error,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
