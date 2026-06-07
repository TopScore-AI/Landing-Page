import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Features from '@/components/Features';
import ActiveVoiceShowcase from '@/components/ActiveVoiceShowcase';
import CompositionShowcase from '@/components/CompositionShowcase';
import Personalization from '@/components/Personalization';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Advanced AI Learning Features',
    description:
        'Explore TopScore AI features: 24/7 AI Tutor, CBC & KCSE resource library, Live Voice Tutor, and offline mode for Kenyan students.',
    openGraph: {
        title: 'Advanced AI Learning Features — TopScore AI',
        description: 'AI Tutor, Voice Tutor, and 100k+ resources for CBC, 8-4-4 & IGCSE.',
        url: 'https://topscoreapp.ai/features',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://topscoreapp.ai/features' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Features | TopScore AI',
    url: 'https://topscoreapp.ai/features',
    description: 'Explore the cutting-edge AI features of TopScore AI designed for Kenyan learners.',
    isPartOf: { '@id': 'https://topscoreapp.ai/#website' },
};

export default function FeaturesPage() {
    return (
        <main>
            <JsonLd data={schema} />
            <Nav />
            <div className="container mx-auto px-4 pt-32 space-y-24 pb-20">
                <Features />
                <ActiveVoiceShowcase />
                <Personalization />
            </div>
            <Footer />
        </main>
    );
}

