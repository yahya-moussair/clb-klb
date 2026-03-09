import TransText from '@/components/TransText';

const partners = [
    { name: 'CNES', logoUrl: null },
    { name: 'UM6P', logoUrl: null },
    { name: 'ENSAM', logoUrl: null },
    { name: 'MIP', logoUrl: null },
];

function PartnerLogo({ partner, index }) {
    return (
        <div
            className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 py-4 shadow-sm transition hover:border-alpha/30 hover:shadow-md sm:h-24 sm:w-32"
            key={index}
        >
            {partner.logoUrl ? (
                <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain grayscale transition hover:grayscale-0"
                />
            ) : (
                <span className="text-center text-base font-bold text-muted-foreground transition hover:text-foreground">
                    {partner.name}
                </span>
            )}
        </div>
    );
}

export default function PartnersSection() {
    return (
        <section className="border-b border-border bg-cl-blue-light/30 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-sm font-semibold tracking-[0.15em] text-alpha uppercase">
                    <TransText
                        fr="Ils nous font confiance"
                        ar="يثقون بنا"
                        nl="Ze vertrouwen ons"
                        as="span"
                    />
                </p>
                <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                    <TransText
                        fr="Nos partenaires"
                        ar="شركاؤنا"
                        nl="Onze partners"
                        as="span"
                    />
                </h2>
                <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-alpha" />
            </div>
            <div className="relative mt-12 overflow-hidden">
                <div
                    className="flex w-max gap-8 px-4 sm:gap-12 sm:px-8"
                    style={{
                        animation: 'partners-marquee 40s linear infinite',
                        willChange: 'transform',
                    }}
                >
                    {/* Duplicate 4x so track is long; keyframes translate -50% = 2 sets = seamless loop */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                        <PartnerLogo partner={partner} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
