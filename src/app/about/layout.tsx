import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Very Fachrurozi',
  description:
    'Learn more about Very Fachrurozi — a Computer Science student passionate about backend engineering, cloud computing, DevOps, and network infrastructure.',
  openGraph: {
    title: 'About - Very Fachrurozi',
    description:
      'Learn more about Very Fachrurozi — a Computer Science student passionate about backend engineering, cloud computing, DevOps, and network infrastructure.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
