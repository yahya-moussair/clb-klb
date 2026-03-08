import { Link } from '@inertiajs/react';
import TransText from '@/components/TransText';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-foreground px-4 pt-24 pb-20">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80)',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <span className="inline-block rounded-full bg-cl-yellow/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cl-yellow">
                    <TransText fr="Cercle d'excellence" ar="دائرة الامتياز" nl="Kring van uitmuntendheid" as="span" />
                </span>
                <h1 className="mt-8 text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    <TransText
                        fr="Le cercle des lauréats de Belgique"
                        ar="دائرة خريجي بلجيكا"
                        nl="De kring van Belgische laureaten"
                        as="span"
                    />
                </h1>
                <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/80">
                    <TransText
                        fr="Le club d'excellence des diplômés de l'enseignement belge du Maroc. Connexion des talents, créateur des opportunités, d'un coup d'oeil le monde."
                        ar="نادي امتياز خريجي التعليم البلجيكي في المغرب. ربط المواهب، خلق الفرص، والعالم بنظرة واحدة."
                        nl="De club van uitmuntende afgestudeerden van het Belgisch onderwijs in Marokko. Talenten verbinden, kansen creëren, de wereld in één oogopslag."
                        as="span"
                    />
                </p>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/a-propos"
                        className="inline-flex items-center rounded-lg bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-95"
                    >
                        <TransText fr="En savoir plus" ar="اعرف المزيد" nl="Meer weten" as="span" />
                    </Link>
                    <Link
                        href="/a-propos"
                        className="inline-flex items-center rounded-lg bg-cl-yellow px-7 py-3 text-sm font-medium text-cl-black transition hover:bg-cl-yellow/90"
                    >
                        <TransText fr="Adhérer au club" ar="انضم إلى النادي" nl="Lid worden van de club" as="span" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
