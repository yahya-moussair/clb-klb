import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import HeroSection from './Partials/HeroSection';
import StatsSection from './Partials/StatsSection';
import EventsSection from './Partials/EventsSection';
import StrategicObjectivesSection from './Partials/StrategicObjectivesSection';
import NetworkVideoSection from './Partials/NetworkVideoSection';
import TeamSection from './Partials/TeamSection';
import LatestBlogSection from './Partials/LatestBlogSection';
import CallToActionSection from './Partials/CallToActionSection';
import ContactStripSection from './Partials/ContactStripSection';
import PartnersSection from './Partials/PartnersSection';

function HomeIndex({ latestBlogs }) {
    return (
        <>
            <Head title="Accueil" />
            <HeroSection />
            <StatsSection />
            <EventsSection />
            <StrategicObjectivesSection />
            <NetworkVideoSection />
            <LatestBlogSection latestBlogs={latestBlogs} />
            <TeamSection />
            <PartnersSection />
            <CallToActionSection />
            <ContactStripSection />
        </>
    );
}

HomeIndex.layout = (page) => <AppLayout>{page}</AppLayout>;
export default HomeIndex;
