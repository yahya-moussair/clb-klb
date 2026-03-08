import TransText from '@/components/TransText';
import ObjectiveBlock from './ObjectiveBlock';

const objectives = [
    {
        iconKey: 'promote',
        title: { fr: 'Promouvoir les études', ar: 'تعزيز الدراسة', nl: 'Studies promoten' },
        description: { fr: "Mettre en valeur les parcours et les diplômes de l'enseignement belge au Maroc.", ar: "إبراز المسارات وشهادات التعليم البلجيكي في المغرب.", nl: "De trajecten en diploma's van het Belgisch onderwijs in Marokko in de kijker zetten." },
    },
    {
        iconKey: 'federate',
        title: { fr: 'Fédérer', ar: 'توحيد', nl: 'Federeren' },
        description: { fr: 'Rassembler les lauréats et créer une communauté soudée et engagée.', ar: 'جمع الخريجين وخلق مجتمع متماسك وملتزم.', nl: 'Laureaten samenbrengen en een hechte, betrokken gemeenschap creëren.' },
    },
    {
        iconKey: 'network',
        title: { fr: 'Développer un réseau', ar: 'تطوير الشبكة', nl: 'Een netwerk ontwikkelen' },
        description: { fr: "Offrir des opportunités de networking et d'échanges entre membres.", ar: 'توفير فرص التواصل وتبادل الخبرات بين الأعضاء.', nl: 'Netwerkmogelijkheden en uitwisseling tussen leden bieden.' },
    },
    {
        iconKey: 'accompany',
        title: { fr: 'Accompagner', ar: 'مرافقة', nl: 'Begeleiden' },
        description: { fr: 'Soutenir les membres dans leur insertion professionnelle et leurs projets.', ar: 'دعم الأعضاء في الاندماج المهني ومشاريعهم.', nl: 'Leden ondersteunen bij hun professionele integratie en projecten.' },
    },
    {
        iconKey: 'contribute',
        title: { fr: 'Contribuer', ar: 'المساهمة', nl: 'Bijdragen' },
        description: { fr: "Contribuer au rayonnement de l'enseignement belge et au dialogue des cultures.", ar: "المساهمة في إشعاع التعليم البلجيكي وحوار الثقافات.", nl: 'Bijdragen aan de uitstraling van het Belgisch onderwijs en de dialoog tussen culturen.' },
    },
    {
        iconKey: 'build',
        title: { fr: 'Construire', ar: 'بناء', nl: 'Bouwen' },
        description: { fr: 'Bâtir des partenariats durables avec les institutions et les entreprises.', ar: 'بناء شراكات دائمة مع المؤسسات والشركات.', nl: 'Duurzame partnerschappen opbouwen met instellingen en bedrijven.' },
    },
];

export default function StrategicObjectivesSection() {
    return (
        <section className="border-b border-border bg-muted/40 py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
                <div className="text-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-cl-yellow">
                        <TransText fr="Nos missions" ar="مهامنا" nl="Onze missies" as="span" />
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                        <TransText fr="Nos objectifs stratégiques" ar="أهدافنا الاستراتيجية" nl="Onze strategische doelstellingen" as="span" />
                    </h2>
                </div>
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {objectives.map((obj, i) => (
                        <ObjectiveBlock key={i} {...obj} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
