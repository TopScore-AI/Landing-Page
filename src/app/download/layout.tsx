import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Download TopScore AI — Free on Android & iOS',
    description: 'Get the TopScore AI app today. Access your personal AI tutor and 100,000+ Kenyan curriculum resources for CBC, 8-4-4, and IGCSE. Start learning for free.',
    openGraph: {
        title: 'Download TopScore AI — Kenya\'s #1 AI Tutor',
        description: 'Download the app free on Android or iOS and start mastering your curriculum today.',
        url: 'https://topscoreapp.ai/download',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://topscoreapp.ai/download' },
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
