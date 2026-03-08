import { Link } from '@inertiajs/react';
import TransText from '@/components/TransText';
import { FeaturedEventCard, SmallEventCard } from './EventCard';

export default function EventsSection({ recentEvents = [] }) {
    const list = Array.isArray(recentEvents) ? recentEvents : [];
    const featured = list[0] ?? null;
    const smallList = list.slice(1, 4);

    return (
        <section className="border-b border-border bg-background py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
                <div className="flex flex-col items-center text-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-cl-yellow">
                        <TransText fr="Nos événements" ar="فعالياتنا" nl="Onze evenementen" as="span" />
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                        <TransText fr="Événements récents" ar="أحدث الفعاليات" nl="Recente evenementen" as="span" />
                    </h2>
                </div>

                {list.length === 0 ? (
                    <div className="mt-14 rounded-2xl border border-dashed border-border bg-muted/30 py-20 text-center">
                        <p className="text-muted-foreground">
                            <TransText fr="Aucun événement pour le moment." ar="لا توجد فعاليات حالياً." nl="Nog geen evenementen." as="span" />
                        </p>
                    </div>
                ) : (
                    <div className="mt-14 grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <FeaturedEventCard event={featured} />
                        </div>
                        <div className="flex flex-col gap-4">
                            {smallList.map((evt) => (
                                <SmallEventCard key={evt.id} event={evt} />
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-12 text-center">
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                        <TransText fr="Voir tout l'agenda" ar="عرض كل الأجندة" nl="Bekijk volledige agenda" as="span" />
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
