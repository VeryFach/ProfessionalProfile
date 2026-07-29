import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiences - Very Fachrurozi',
  description:
    'View the certifications, organizations, and professional experience of Very Fachrurozi — a Computer Science student and backend developer.',
  openGraph: {
    title: 'Experiences - Very Fachrurozi',
    description:
      'View the certifications, organizations, and professional experience of Very Fachrurozi — a Computer Science student and backend developer.',
  },
}

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
