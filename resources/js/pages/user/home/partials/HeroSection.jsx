import { Link } from '@inertiajs/react';
import TransText from '@/components/TransText';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-cl-black px-4 py-28 sm:py-32">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80)',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cl-black/70 via-cl-black/60 to-cl-black/85" />
            <div className="absolute inset-0 bg-cl-black/40" />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <p className="mb-4 text-sm font-medium tracking-[0.2em] text-alpha uppercase">
                    <TransText
                        fr="Le réseau des diplômés"
                        ar="شبكة الخريجين"
                        nl="Het netwerk van afgestudeerden"
                        as="span"
                    />
                </p>
                <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-cl-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    <TransText
                        fr="Le Cercle des Lauréats de Belgique"
                        ar="دائرة خريجي بلجيكا"
                        nl="De Kring van Belgische Laureaten"
                        as="span"
                    />
                </h1>
                <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-alpha" />
                <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-cl-white/95 sm:text-lg lg:text-xl">
                    <TransText
                        fr="Le réseau des diplômés de l'enseignement belge au Maroc. Nous fédérons les talents, créons des opportunités et renforçons les liens entre la Belgique et le Maroc."
                        ar="شبكة خريجي التعليم البلجيكي في المغرب. نوحد المواهب ونخلق الفرص ونوطد العلاقات بين بلجيكا والمغرب."
                        nl="Het netwerk van afgestudeerden van het Belgisch onderwijs in Marokko. We verbinden talenten, creëren kansen en versterken de banden tussen België en Marokko."
                        as="span"
                    />
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="#objectifs"
                        className="inline-flex items-center gap-2 rounded-lg bg-alpha px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cl-white shadow-lg transition hover:bg-alpha/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-alpha focus:ring-offset-2 focus:ring-offset-cl-black"
                    >
                        <TransText
                            fr="En savoir plus"
                            ar="اعرف المزيد"
                            nl="Meer weten"
                            as="span"
                        />
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-cl-white/90 bg-transparent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cl-white transition hover:bg-cl-white/10 focus:outline-none focus:ring-2 focus:ring-cl-white/50 focus:ring-offset-2 focus:ring-offset-cl-black"
                    >
                        <TransText
                            fr="Nous contacter"
                            ar="اتصل بنا"
                            nl="Contacteer ons"
                            as="span"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
