import { Head } from '@inertiajs/react';
import HomeLayout from '@/layouts/HomeLayout';
import HeroSection from './Partials/HeroSection';
import EventsSection from './Partials/EventsSection';
import StrategicObjectivesSection from './Partials/StrategicObjectivesSection';
import NetworkVideoSection from './Partials/NetworkVideoSection';
import TeamSection from './Partials/TeamSection';
import PartnersSection from './Partials/PartnersSection';

function HomeIndex() {
    return (
        <>
            <Head title="Accueil" />
            <HeroSection />
            <EventsSection />
            <StrategicObjectivesSection />
            <NetworkVideoSection />
            <TeamSection />
            <PartnersSection />
        </>
    );
}

HomeIndex.layout = (page) => <HomeLayout>{page}</HomeLayout>;

export default HomeIndex;
