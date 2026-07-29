import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Very Fachrurozi',
  description:
    'Get in touch with Very Fachrurozi for collaboration, project inquiries, or professional opportunities.',
  openGraph: {
    title: 'Contact - Very Fachrurozi',
    description:
      'Get in touch with Very Fachrurozi for collaboration, project inquiries, or professional opportunities.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
