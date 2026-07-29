import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Very Fachrurozi',
  description:
    'Explore the portfolio of Very Fachrurozi — featuring projects in web development, machine learning, cybersecurity, and cloud engineering.',
  openGraph: {
    title: 'Projects - Very Fachrurozi',
    description:
      'Explore the portfolio of Very Fachrurozi — featuring projects in web development, machine learning, cybersecurity, and cloud engineering.',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
