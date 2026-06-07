import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Vision — Democratizing Elite Education in Kenya',
    description: 'At TopScore AI, we believe that world-class 1-on-1 tutoring shouldn\'t be a privilege. We are building the AI infrastructure to make elite learning tools accessible to every Kenyan student.',
    openGraph: {
        title: 'Our Vision — TopScore AI',
        description: 'Empowering the next generation of African scholars with personalized AI tutoring and localized educational tools.',
        url: 'https://topscoreapp.ai/vision',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://topscoreapp.ai/vision' },
};

export default function VisionLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
