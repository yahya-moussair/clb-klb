import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageHero, TransText } from '@/components';
import BlogCard from './partials/BlogCard';
import Pagination from './partials/Pagination';

/**
 * Blog listing page. Data (blogs, categories, pagination) is provided by
 * App\Http\Controllers\User\BlogController::index (published blogs, current locale).
 */
function BlogIndex({ blogs = [], pagination }) {
    return (
        <>
            <Head title="Blog - Cercle des Lauréats de Belgique" />
            <PageHero
                title={{ fr: 'Actualité', ar: 'الأخبار', nl: 'Nieuws' }}
                subtitle={{
                    fr: 'Ici, nous explorons les réussites exceptionnelles qui font la fierté de notre nation. Que vous soyez membre du CLB, aspirant lauréat ou simplement curieux, ce blog est votre passeport pour découvrir les histoires inspirantes et les réalisations extraordinaires qui façonnent l\'excellence belge au Maroc.',
                    ar: 'هنا، نستكشف النجاحات الاستثنائية التي تجعل من وطننا مصدر فخر. سواء كنت عضوًا في CLB، أو طامحًا لأن تكون من الحاصلين على الجوائز، أو مجرد فضولي، فإن هذه المدونة هي جواز سفرك لاكتشاف القصص الملهمة والإنجازات الرائعة التي تشكل التميز البلجيكي في المغرب.',
                    nl: 'Hier verkennen we de uitzonderlijke successen die onze natie trots maken. Of je nu lid bent van CLB, een aspirant-laureaat of gewoon nieuwsgierig, deze blog is je paspoort om inspirerende verhalen en buitengewone prestaties te ontdekken die de Belgische excellentie in Marokko vormgeven.',
                                }}
                reverse
                backgroundImage="assets/page-hero.webp"
            />
            <div className="container py-16">
                {blogs.length === 0 ? (
                    <TransText
                        fr="Aucun article pour le moment."
                        ar="لا توجد مقالات حالياً."
                        nl="Nog geen artikelen."
                        as="p"
                        className="py-12 text-center text-muted-foreground"
                    />
                ) : (
                    <>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {blogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                        <Pagination pagination={pagination} />
                    </>
                )}
            </div>
        </>
    );
}

BlogIndex.layout = (page) => <AppLayout>{page}</AppLayout>;
export default BlogIndex;
