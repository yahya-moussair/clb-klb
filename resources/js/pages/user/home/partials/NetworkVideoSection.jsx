import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import TransText from '@/components/TransText';

const LOCALES = ['fr', 'ar', 'nl'];
const DEFAULT = 'fr';

function pick(obj, locale) {
    if (obj == null || typeof obj !== 'object') return obj;
    const loc = LOCALES.includes(locale) ? locale : DEFAULT;
    return obj[loc] ?? obj.fr ?? obj.ar ?? obj.nl ?? '';
}

const slides = [
    {
        title: {
            fr: 'Un réseau au service des lauréats de Belgique',
            ar: 'شبكة في خدمة خريجي بلجيكا',
            nl: 'Een netwerk ten dienste van Belgische laureaten',
        },
        body: {
            fr: "Plongez au cœur de notre communauté d'anciens élèves et bienfaiteurs. Les CLB-KLB, l'association fédératrice qui vous ouvre les bras sur le Maroc.",
            ar: 'انغمسوا في قلب مجتمعنا من الخريجين والمحسنين. CLB-KLB، الجمعية الموحدة التي تفتح لكم ذراعيها في المغرب.',
            nl: 'Duik in het hart van onze gemeenschap van alumni en weldoeners. CLB-KLB, de vereniging die u de armen opent in Marokko.',
        },
        cta: { fr: 'EN SAVOIR PLUS', ar: 'اعرف المزيد', nl: 'MEER WETEN' },
        ctaHref: '#',
    },
    {
        title: {
            fr: 'Deuxième slide',
            ar: 'الشريحة الثانية',
            nl: 'Tweede slide',
        },
        body: {
            fr: 'Contenu de la deuxième slide — à personnaliser selon vos besoins.',
            ar: 'محتوى الشريحة الثانية — يمكن تخصيصه حسب احتياجاتكم.',
            nl: 'Inhoud van de tweede slide — aan te passen naar wens.',
        },
        cta: { fr: 'EN SAVOIR PLUS', ar: 'اعرف المزيد', nl: 'MEER WETEN' },
        ctaHref: '#',
    },
];

const videoTitle = {
    fr: 'Présentation Officielle du Cercle des Lauréats de Belgique (CLB-KLB)',
    ar: 'العرض الرسمي لدائرة خريجي بلجيكا (CLB-KLB)',
    nl: 'Officiële presentatie van de Kring van Belgische Laureaten (CLB-KLB)',
};
const videoPlaceholderUrl =
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80';
const videoUrl = null;

export default function NetworkVideoSection() {
    const { props } = usePage();
    const locale =
        props.locale && LOCALES.includes(props.locale) ? props.locale : DEFAULT;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide = slides[currentSlide];
    const totalSlides = slides.length;
    const slideTitle = pick(slide.title, locale);
    const slideBody = pick(slide.body, locale);
    const slideCta = pick(slide.cta, locale);
    const videoTitleText = pick(videoTitle, locale);

    return (
        <section className="relative overflow-hidden bg-cl-black py-16 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(232,17,35,0.12),transparent)]" />
            <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold tracking-[0.15em] text-alpha uppercase">
                        <TransText
                            fr="À propos de nous"
                            ar="عنا"
                            nl="Over ons"
                            as="span"
                        />
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-cl-white lg:text-4xl">
                        {slideTitle}
                    </h2>
                    <div className="mt-3 h-0.5 w-12 rounded-full bg-alpha" />
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-cl-white/90">{slideBody}</p>
                    <Link
                        href={slide.ctaHref}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-alpha px-6 py-3.5 text-sm font-semibold text-cl-white shadow-lg transition hover:bg-alpha/90"
                    >
                        {slideCta}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <div className="mt-8 flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() =>
                                setCurrentSlide((s) =>
                                    s === 0 ? totalSlides - 1 : s - 1,
                                )
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-cl-white/30 text-cl-white transition hover:border-alpha hover:bg-alpha/20"
                            aria-label={
                                locale === 'fr'
                                    ? 'Slide précédent'
                                    : locale === 'ar'
                                      ? 'الشريحة السابقة'
                                      : 'Vorige slide'
                            }
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="min-w-[4rem] text-center text-sm font-medium text-cl-white/80">
                            {currentSlide + 1} / {totalSlides}
                        </span>
                        <button
                            type="button"
                            onClick={() =>
                                setCurrentSlide((s) =>
                                    s === totalSlides - 1 ? 0 : s + 1,
                                )
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-cl-white/30 text-cl-white transition hover:border-alpha hover:bg-alpha/20"
                            aria-label={
                                locale === 'fr'
                                    ? 'Slide suivant'
                                    : locale === 'ar'
                                      ? 'الشريحة التالية'
                                      : 'Volgende slide'
                            }
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-cl-white/10 bg-cl-black shadow-2xl">
                    <a
                        href={videoUrl || '#'}
                        target={videoUrl ? '_blank' : undefined}
                        rel={videoUrl ? 'noopener noreferrer' : undefined}
                        className="absolute inset-0 flex items-center justify-center bg-cl-black"
                    >
                        <img
                            src={videoPlaceholderUrl}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-85"
                        />
                        <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-alpha text-cl-white shadow-lg transition hover:scale-105 hover:bg-alpha/90">
                            <svg className="ml-1 h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </a>
                    <p className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-cl-black/95 to-transparent p-5 text-sm font-medium text-cl-white">
                        {videoTitleText}
                    </p>
                </div>
            </div>
        </section>
    );
}
