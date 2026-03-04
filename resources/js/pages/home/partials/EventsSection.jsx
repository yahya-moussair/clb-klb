import { Link } from '@inertiajs/react';
import { FeaturedEventCard, SmallEventCard } from './EventCard';

const featuredEvent = {
    title: 'Leadership féminin — Réalités et défis',
    subtitle: 'F\'tor-débat',
    moderator: 'Modéré par Ihsane Benbel, avec Dr Younes Sekkouri',
    date: '09 MARS',
    timeRange: 'Vendredi, 09 mars 2026 18:00 à 21:00',
    location: 'ENCG TANGER',
    tag: 'EN DIRECT',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    href: '#',
};

const smallEvents = [
    {
        title: 'Célébration 2026',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=200&q=80',
        href: '#',
    },
    {
        title: 'Atelier',
        subtitle: 'Carrières & Réseaux',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80',
        href: '#',
    },
    {
        title: 'Rencontre',
        subtitle: 'Remise des diplômes',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
        imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80',
        href: '#',
    },
];

export default function EventsSection() {
    return (
        <section className="border-b border-border bg-background py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-sm font-medium uppercase tracking-wider text-cl-beta">
                    Nos Événements
                </p>
                <h2 className="mt-2 text-center text-3xl font-bold text-foreground lg:text-4xl">
                    Événements Récents
                </h2>
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
                <div className="mt-10 text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-base font-medium text-alpha hover:underline"
                    >
                        VOIR TOUT L'AGENDA
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
