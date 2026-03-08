import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import HeroSection from './Partials/HeroSection';
import EventsSection from './Partials/EventsSection';
import StrategicObjectivesSection from './Partials/StrategicObjectivesSection';
import NetworkVideoSection from './Partials/NetworkVideoSection';
import TeamSection from '@/components/TeamSection';
import PartnersSection from '@/components/PartnersSection';

function HomeIndex({ teamMembers = [], partners = [], recentEvents = [] }) {
    return (
        <>
            <AppLayout>
                <Head title="Accueil" />
                <HeroSection />
                <EventsSection recentEvents={recentEvents} />
                <StrategicObjectivesSection />
                <NetworkVideoSection />
                <TeamSection teamMembers={teamMembers} />
                <PartnersSection partners={partners} />
            </AppLayout>
        </>
    );
}

export default HomeIndex;
