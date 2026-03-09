import { usePage } from '@inertiajs/react';
import TransText from '@/components/TransText';

const LOCALES = ['fr', 'ar', 'nl'];
const DEFAULT = 'fr';

function pick(obj, locale) {
    if (obj == null || typeof obj !== 'object') return obj;
    const loc = LOCALES.includes(locale) ? locale : DEFAULT;
    return obj[loc] ?? obj.fr ?? obj.ar ?? obj.nl ?? '';
}

const team = [
    {
        name: 'Merouane TOUALI',
        role: { fr: 'Président', ar: 'الرئيس', nl: 'Voorzitter' },
        imageUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
        name: 'Ali SERHROUCHNI',
        role: { fr: 'Vice-Président', ar: 'نائب الرئيس', nl: 'Vice-voorzitter' },
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    },
    {
        name: 'Souad JAMAI',
        role: { fr: 'Assesseure', ar: 'مستشارة', nl: 'Assessor' },
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    },
    {
        name: 'Christian JONNIAUX',
        role: { fr: 'Trésorier', ar: 'أمين الصندوق', nl: 'Penningmeester' },
        imageUrl:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    },
    {
        name: 'Gregory VAN BELLINGHEN',
        role: { fr: 'Secrétaire Général', ar: 'الأمين العام', nl: 'Algemeen secretaris' },
        imageUrl:
            'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
    },
];

export default function TeamSection() {
    const { props } = usePage();
    const locale = props.locale && LOCALES.includes(props.locale) ? props.locale : DEFAULT;

    return (
        <section className="border-b border-border bg-background py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-sm font-semibold tracking-[0.15em] text-alpha uppercase">
                    <TransText
                        fr="La gouvernance du CLB"
                        ar="حوكمة CLB"
                        nl="Het bestuur van CLB"
                        as="span"
                    />
                </p>
                <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                    <TransText
                        fr="Notre équipe"
                        ar="فريقنا"
                        nl="Ons team"
                        as="span"
                    />
                </h2>
                <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-alpha" />
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:border-alpha/30 hover:shadow-lg"
                        >
                            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-alpha/20 bg-muted ring-4 ring-cl-blue-light/50 transition group-hover:border-alpha group-hover:ring-alpha/20">
                                <img
                                    src={member.imageUrl}
                                    alt=""
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-4 font-bold text-foreground">
                                {member.name}
                            </p>
                            <p className="mt-1 text-sm font-medium text-alpha">
                                {pick(member.role, locale)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
