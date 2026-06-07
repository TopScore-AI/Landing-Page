import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Screenshots from '@/components/Screenshots';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'App Preview — See TopScore AI in Action',
    description: 'Explore the TopScore AI mobile app interface. See our 24/7 AI tutor, extensive CBC/KCSE resource library, and smart study tools designed for Kenyan learners.',
    openGraph: {
        title: 'App Preview — TopScore AI Mobile Experience',
        description: 'Take a tour of Kenya\'s most advanced AI learning app. Premium design for elite students.',
        url: 'https://topscoreapp.ai/screenshots',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://topscoreapp.ai/screenshots' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'App Previews | TopScore AI',
    url: 'https://topscoreapp.ai/screenshots',
    description: 'High-resolution previews and screenshots of the TopScore AI mobile application interface.',
    isPartOf: { '@id': 'https://topscoreapp.ai/#website' },
};

export default function ScreenshotsPage() {
    return (
        <main>
            <JsonLd data={schema} />
            <Nav />
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Designed for <span className="text-primary">Excellence</span></h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        TopScore AI is more than just a tutoring app. It is a premium learning experience, built from the ground up to empower students and learners across Kenya.
                    </p>
                </div>
                <Screenshots />
            </div>
            <Footer />
        </main>
    );
}
