import { Link } from '@inertiajs/react';
import TransText from '@/components/TransText';
import { FeaturedEventCard, SmallEventCard } from './EventCard';

const featuredEvent = {
    title: {
        fr: 'Leadership féminin — Réalités et défis',
        ar: 'القيادة النسائية — الواقع والتحديات',
        nl: 'Vrouwelijk leiderschap — Realiteiten en uitdagingen',
    },
    subtitle: { fr: "F'tor-débat", ar: 'مناظرة', nl: 'Debat' },
    moderator: {
        fr: 'Modéré par Ihsane Benbel, avec Dr Younes Sekkouri',
        ar: 'يديره إحسان بنبل، مع د. يونس السكوري',
        nl: 'Gemodereerd door Ihsane Benbel, met Dr Younes Sekkouri',
    },
    date: '09 MARS',
    timeRange: {
        fr: 'Vendredi, 09 mars 2026 18:00 à 21:00',
        ar: 'الجمعة 9 مارس 2026 من 18:00 إلى 21:00',
        nl: 'Vrijdag 9 maart 2026 18:00–21:00',
    },
    location: 'ENCG TANGER',
    tag: { fr: 'EN DIRECT', ar: 'مباشر', nl: 'LIVE' },
    imageUrl:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    href: '#',
};

const smallEvents = [
    {
        title: {
            fr: 'Célébration 2026',
            ar: 'احتفال 2026',
            nl: 'Celebratie 2026',
        },
        description: {
            fr: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            ar: 'نص تجريبي للمحتوى.',
            nl: 'Lorem ipsum dolor sit amet.',
        },
        imageUrl:
            'https://images.unsplash.com/photo-1511578314322-379afb476865?w=200&q=80',
        href: '#',
    },
    {
        title: { fr: 'Atelier', ar: 'ورشة', nl: 'Workshop' },
        subtitle: {
            fr: 'Carrières & Réseaux',
            ar: 'المسارات والشبكات',
            nl: 'Carrières & Netwerken',
        },
        description: {
            fr: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            ar: 'نص تجريبي.',
            nl: 'Lorem ipsum.',
        },
        imageUrl:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80',
        href: '#',
    },
    {
        title: { fr: 'Rencontre', ar: 'لقاء', nl: 'Ontmoeting' },
        subtitle: {
            fr: 'Remise des diplômes',
            ar: 'تسليم الشهادات',
            nl: 'Diploma-uitreiking',
        },
        description: {
            fr: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            ar: 'نص تجريبي.',
            nl: 'Lorem ipsum.',
        },
        imageUrl:
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80',
        href: '#',
    },
];

export default function EventsSection() {
    return (
        <section className="border-b border-border bg-cl-blue-light/30 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-sm font-semibold tracking-[0.15em] text-alpha uppercase">
                    <TransText
                        fr="Nos Actualités"
                        ar="أخبارنا"
                        nl="Onze actualiteiten"
                        as="span"
                    />
                </p>
                <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                    <TransText
                        fr="Événements récents"
                        ar="أحدث الفعاليات"
                        nl="Recente evenementen"
                        as="span"
                    />
                </h2>
                <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-alpha" />
                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <FeaturedEventCard event={featuredEvent} />
                    </div>
                    <div className="flex flex-col gap-4">
                        {smallEvents.map((evt, i) => (
                            <SmallEventCard key={i} event={evt} />
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-alpha bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-alpha transition hover:bg-alpha hover:text-cl-white focus:outline-none focus:ring-2 focus:ring-alpha focus:ring-offset-2"
                    >
                        <TransText
                            fr="Voir tout l'agenda"
                            ar="عرض كل الأجندة"
                            nl="Volledige agenda bekijken"
                            as="span"
                        />
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
