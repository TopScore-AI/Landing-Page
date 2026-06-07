import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Affordable AI Tutoring Plans — Weekly & Monthly',
    description:
        'Access Kenya\'s #1 AI tutor with flexible plans. Start for free or upgrade to Pro for unlimited AI interactions, voice tutoring, and premium CBC/KCSE resources.',
    openGraph: {
        title: 'Affordable AI Tutoring Plans — TopScore AI',
        description: 'Start for free or upgrade to Pro for unlimited AI interactions and premium curriculum resources.',
        url: 'https://topscoreapp.ai/pricing',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://topscoreapp.ai/pricing' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pricing | TopScore AI',
    url: 'https://topscoreapp.ai/pricing',
    description: 'View the flexible pricing plans for TopScore AI, designed to be accessible for every Kenyan student.',
    isPartOf: { '@id': 'https://topscoreapp.ai/#website' },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <JsonLd data={schema} />
            <Nav />
            <div className="container mx-auto px-4 pt-32">
                <Pricing />
            </div>
            <Footer />
        </main>
    );
}
