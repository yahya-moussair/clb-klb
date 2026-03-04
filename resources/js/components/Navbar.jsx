import { Link, usePage } from '@inertiajs/react';

const navLinks = [
    { label: 'ACCUEIL', href: '/' },
    { label: 'À PROPOS', href: '/a-propos' },
    { label: 'ACTUALITÉS', href: '#', hasDropdown: true },
    { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {

    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-cl-white">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-alpha text-cl-black">
                        <span className="text-xs font-bold">CLB KLP</span>
                    </div>
                    <span className="text-lg font-semibold text-cl-black">CLB KLP</span>
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map(({ label, href, hasDropdown }) => {
                        const isActive = window.location.pathname?.includes(label?.toLocaleLowerCase());
                        return (
                            <li key={label} className="flex items-center gap-1">
                                <Link
                                    href={href}
                                    className={`text-sm font-medium text-cl-black transition hover:opacity-90 ${isActive ? 'underline underline-offset-4' : ''}`}
                                >
                                    {label}
                                </Link>
                                {hasDropdown && (
                                    <svg className="h-4 w-4 text-cl-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </li>
                        )
                    })}
                </ul>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="flex items-center gap-1 text-sm font-medium text-cl-black transition hover:opacity-90"
                        aria-label="Langue"
                    >
                        FR
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <Link
                        href="#"
                        className="rounded-lg bg-alpha px-4 py-2 text-sm font-medium uppercase text-cl-white transition hover:opacity-95"
                    >
                        DEVENIR MEMBRE
                    </Link>
                </div>
            </nav>
        </header>
    );
}
