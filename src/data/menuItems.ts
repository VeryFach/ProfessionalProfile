export interface MenuItem {
    label: string
    href: string
}

export const menuItems: MenuItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'WORKS', href: '/projects' },
    { label: 'EXPERIENCE', href: '/experiences' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' }
]
