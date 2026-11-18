import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clientes.piscicomet.es'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Piscicomet para profesionales',
    template: '%s | Piscicomet',
  },
  description:
    'Conoce el canal de colaboración de Piscicomet para profesionales de construcción, reformas, cubiertas y equipamiento de piscinas.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
