import { Link } from '@inertiajs/react';

const navLinks = [
    { label: 'ACCUEIL', href: '/' },
    { label: 'A PROPOS', href: '#' },
    { label: 'ACTUALITES', href: '#' },
    { label: 'QUI SOMMES-NOUS', href: '#' },
    { label: 'CONTACT', href: '#' },
];

export default function Navbar() {
    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-cl-black/80 backdrop-blur-sm">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-alpha text-cl-white">
                        <span className="text-sm font-bold">CLB</span>
                    </div>
                    <span className="text-lg font-semibold text-cl-white">CLB</span>
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <Link
                                href={href}
                                className="text-sm font-medium text-cl-white transition hover:opacity-90"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="text-cl-white transition hover:opacity-90"
                        aria-label="Rechercher"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="text-cl-white transition hover:opacity-90"
                        aria-label="Langue"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V8m0 0V3.935M12 21a9 9 0 100-18 9 9 0 000 18z" />
                        </svg>
                    </button>
                    <Link
                        href="#"
                        className="rounded-lg bg-alpha px-4 py-2 text-sm font-medium text-cl-white transition hover:opacity-95"
                    >
                        REJOIGNEZ NOUS
                    </Link>
                </div>
            </nav>
        </header>
    );
}
