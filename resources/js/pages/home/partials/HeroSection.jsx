import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center bg-cl-black px-4 py-24">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80)',
                }}
            />
            <div className="absolute inset-0 bg-cl-black/60" />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="mb-6 text-3xl font-bold uppercase leading-tight text-cl-white sm:text-4xl lg:text-5xl xl:text-6xl">
                    Le cercle des lauréats de Belgique
                </h1>
                <p className="mb-10 text-base text-cl-white/95 sm:text-lg lg:text-xl">
                    Le club d'excellence des diplômés de l'enseignement belge du Maroc. Connexion des talents, créateur des opportunités, d'un coup d'oeil le monde.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="#"
                        className="rounded-lg bg-alpha px-6 py-3 text-sm font-medium text-cl-white transition hover:opacity-95"
                    >
                        EN SAVOIR PLUS
                    </Link>
                    <Link
                        href="#"
                        className="rounded-lg bg-cl-black border border-cl-white px-6 py-3 text-sm font-medium text-cl-white transition hover:bg-cl-white/10"
                    >
                        ADHERER AU CLUB
                    </Link>
                </div>
            </div>
        </section>
    );
}
