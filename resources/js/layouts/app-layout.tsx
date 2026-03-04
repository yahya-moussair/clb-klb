import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { AppLayoutProps } from '@/types';

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        <Navbar />
        {children}
        <Footer />
    </AppLayoutTemplate>
);
