import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Tools from '@/components/Tools';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Smart Study Tools — Scanner, Quizzes & Science Lab',
    description:
        'All-in-one study suite: AI Smart Scanner, AI Quiz Generator, Virtual Science Lab, and AI Flashcard Generator for Kenyan learners.',
    openGraph: {
        title: 'Smart Study Tools — TopScore AI',
        description: 'Empower your studies with built-in tools: scanner, quizzes, science lab, and more.',
        url: 'https://topscoreapp.ai/tools',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://topscoreapp.ai/tools' },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Study Tools | TopScore AI',
    url: 'https://topscoreapp.ai/tools',
    description: 'A comprehensive suite of digital study tools integrated directly into TopScore AI to help Kenyan students excel.',
    isPartOf: { '@id': 'https://topscoreapp.ai/#website' },
    mainEntity: {
        '@type': 'ItemList',
        name: 'TopScore AI Study Tools',
        itemListElement: [
            'Smart Scanner', 'AI Quiz Generator', 'Science Lab',
            'Flashcard Generator', 'Timetable',
            'Global Search', 'PDF Viewer',
        ].map((name, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name,
        })),
    }
};

export default function ToolsPage() {
    return (
        <main className="min-h-screen">
            <JsonLd data={schema} />
            <Nav />
            <div className="container mx-auto px-4 pt-32">
                <Tools />
            </div>
            <Footer />
        </main>
    );
}
