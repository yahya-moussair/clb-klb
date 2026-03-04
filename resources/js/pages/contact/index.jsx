import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import ContactHeroSection from './Partials/ContactHeroSection';
import ContactFormSection from './Partials/ContactFormSection';

function ContactIndex() {
    const { props } = usePage();

    return (
        <>
            <AppLayout>
                <Head title="Contact" />
                <ContactHeroSection />
                <ContactFormSection  />
            </AppLayout>
        </>
    );
}

export default ContactIndex;
