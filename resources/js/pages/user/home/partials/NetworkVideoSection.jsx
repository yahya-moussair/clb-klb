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
        title: { fr: 'Un réseau au service des lauréats de Belgique', ar: 'شبكة في خدمة خريجي بلجيكا', nl: 'Een netwerk ten dienste van Belgische laureaten' },
        body: { fr: "Plongez au cœur de notre communauté d'anciens élèves et bienfaiteurs. Les CLB-KLB, l'association fédératrice qui vous ouvre les bras sur le Maroc.", ar: "انغمسوا في قلب مجتمعنا من الخريجين والمحسنين. CLB-KLB، الجمعية الموحدة التي تفتح لكم ذراعيها في المغرب.", nl: "Duik in het hart van onze gemeenschap van alumni en weldoeners. CLB-KLB, de vereniging die u de armen opent in Marokko." },
        cta: { fr: 'En savoir plus', ar: 'اعرف المزيد', nl: 'Meer weten' },
        ctaHref: '#',
    },
    {
        title: { fr: 'Deuxième slide', ar: 'الشريحة الثانية', nl: 'Tweede slide' },
        body: { fr: 'Contenu de la deuxième slide — à personnaliser selon vos besoins.', ar: 'محتوى الشريحة الثانية — يمكن تخصيصه حسب احتياجاتكم.', nl: 'Inhoud van de tweede slide — aan te passen naar wens.' },
        cta: { fr: 'En savoir plus', ar: 'اعرف المزيد', nl: 'Meer weten' },
        ctaHref: '#',
    },
];

const videoTitle = {
    fr: 'Présentation Officielle du Cercle des Lauréats de Belgique (CLB-KLB)',
    ar: 'العرض الرسمي لدائرة خريجي بلجيكا (CLB-KLB)',
    nl: 'Officiële presentatie van de Kring van Belgische Laureaten (CLB-KLB)',
};
const youtubeVideoId = 'fdojEYgJuyE';
const videoEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0`;

export default function NetworkVideoSection() {
    const { props } = usePage();
    const locale = props.locale && LOCALES.includes(props.locale) ? props.locale : DEFAULT;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide = slides[currentSlide];
    const totalSlides = slides.length;
    const slideTitle = pick(slide.title, locale);
    const slideBody = pick(slide.body, locale);
    const slideCta = pick(slide.cta, locale);
    const videoTitleText = pick(videoTitle, locale);

    return (
        <section className="border-b border-border bg-foreground py-20 lg:py-28">
            <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-6">
                <div className="flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        <TransText fr="À propos de nous" ar="عنا" nl="Over ons" as="span" />
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white lg:text-4xl">
                        {slideTitle}
                    </h2>
                    <p className="mt-6 leading-relaxed text-white/80">
                        {slideBody}
                    </p>
                    <Link
                        href={slide.ctaHref}
                        className="mt-8 inline-block w-fit rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-95"
                    >
                        {slideCta}
                    </Link>
                    <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
                        <button
                            type="button"
                            onClick={() => setCurrentSlide((s) => (s === 0 ? totalSlides - 1 : s - 1))}
                            className="rounded-lg p-2 transition hover:bg-white/10"
                            aria-label={locale === 'fr' ? 'Slide précédent' : locale === 'ar' ? 'الشريحة السابقة' : 'Vorige slide'}
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span>
                            {currentSlide + 1} / {totalSlides}
                        </span>
                        <button
                            type="button"
                            onClick={() => setCurrentSlide((s) => (s === totalSlides - 1 ? 0 : s + 1))}
                            className="rounded-lg p-2 transition hover:bg-white/10"
                            aria-label={locale === 'fr' ? 'Slide suivant' : locale === 'ar' ? 'الشريحة التالية' : 'Volgende slide'}
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-foreground">
                    <iframe
                        src={videoEmbedUrl}
                        title={videoTitleText}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                    />
                    <p className="absolute bottom-0 left-0 right-0 bg-foreground/90 p-4 text-sm text-white">
                        {videoTitleText}
                    </p>
                </div>
            </div>
        </section>
    );
}
