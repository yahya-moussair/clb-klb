import ObjectiveBlock from './ObjectiveBlock';

const objectives = [
    {
        iconKey: 'promote',
        title: 'PROMOUVOIR LES ÉTUDES',
        description: 'Mettre en valeur les parcours et les diplômes de l\'enseignement belge au Maroc.',
    },
    {
        iconKey: 'federate',
        title: 'FÉDÉRER',
        description: 'Rassembler les lauréats et créer une communauté soudée et engagée.',
    },
    {
        iconKey: 'network',
        title: 'DÉVELOPPER UN RÉSEAU',
        description: 'Offrir des opportunités de networking et d\'échanges entre membres.',
    },
    {
        iconKey: 'accompany',
        title: 'ACCOMPAGNER',
        description: 'Soutenir les membres dans leur insertion professionnelle et leurs projets.',
    },
    {
        iconKey: 'contribute',
        title: 'CONTRIBUER',
        description: 'Contribuer au rayonnement de l\'enseignement belge et au dialogue des cultures.',
    },
    {
        iconKey: 'build',
        title: 'CONSTRUIRE',
        description: 'Bâtir des partenariats durables avec les institutions et les entreprises.',
    },
];

export default function StrategicObjectivesSection() {
    return (
        <section className="border-b border-border bg-background py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-sm font-medium uppercase tracking-wider text-cl-beta">
                    Nos Missions
                </p>
                <h2 className="mt-2 text-center text-3xl font-bold text-foreground lg:text-4xl">
                    Nos Objectifs Stratégiques
                </h2>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {objectives.map((obj, i) => (
                        <ObjectiveBlock key={i} {...obj} />
                    ))}
                </div>
            </div>
        </section>
    );
}
