import type { Metadata } from 'next'
import { DM_Serif_Display, Outfit, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: 'Voko — Dicta. Convierte. Envía.',
  description: 'Hablas con naturalidad. Voko entiende cómo te sientes y entrega el mensaje listo para WhatsApp, email o lo que necesites. En el tono exacto que la situación pide.',
  metadataBase: new URL('https://voko.lat'),
  openGraph: {
    title: 'Voko — Dicta. Convierte. Envía.',
    description: 'Lo que piensas, dicho perfectamente.',
    url: 'https://voko.lat',
    siteName: 'Voko',
    locale: 'es_LA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voko — Dicta. Convierte. Envía.',
    description: 'Lo que piensas, dicho perfectamente.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${dmSerif.variable} ${outfit.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
