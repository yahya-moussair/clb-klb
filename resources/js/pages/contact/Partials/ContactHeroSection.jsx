import { Phone, MapPin, Mail } from 'lucide-react';

const contactCards = [
    {
        icon: Phone,
        title: 'TÉLÉPHONE',
        subtitle: 'Du lundi au vendredi de 9h à 18h.',
        value: '+212 6 66 17 47 12',
    },
    {
        icon: MapPin,
        title: 'ADRESSE',
        subtitle: 'Venez nous rencontrer.',
        value: '4, Rue Jaâfar Assadik - Agdal, Rabat - Maroc',
    },
    {
        icon: Mail,
        title: 'E-MAIL',
        subtitle: 'Notre équipe vous répondra rapidement.',
        value: 'contact@clb-klb.com',
    },
];

export default function ContactHeroSection() {
    return (
        <section className="bg-cl-blue-light px-4 pt-24 pb-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                    Ne cherchez pas sur Google, demandez-nous
                </h1>
                <p className="mt-4 max-w-2xl text-foreground/90">
                    Une question, une suggestion ou une envie de rejoindre notre réseau ? N'hésitez pas à nous
                    écrire, notre équipe est là pour vous écouter.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {contactCards.map(({ icon: Icon, title, subtitle, value }) => (
                        <div
                            key={title}
                            className="rounded-xl border border-border bg-card p-6 shadow-sm"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-alpha text-cl-white">
                                <Icon className="h-5 w-5" aria-hidden />
                            </div>
                            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                                {title}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                            <p className="mt-2 font-semibold text-foreground">
                                {title === 'E-MAIL' ? (
                                    <a
                                        href={`mailto:${value}`}
                                        className="hover:underline"
                                    >
                                        {value}
                                    </a>
                                ) : title === 'TÉLÉPHONE' ? (
                                    <a
                                        href={`tel:${value.replace(/\s/g, '')}`}
                                        className="hover:underline"
                                    >
                                        {value}
                                    </a>
                                ) : (
                                    value
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
