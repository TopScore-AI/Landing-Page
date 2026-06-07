import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us — Support & Inquiries',
    description: 'Get in touch with the TopScore AI team for support, partnerships, or feedback. We are here to help you succeed in your Kenyan learning journey.',
    openGraph: {
        title: 'Contact Us — TopScore AI',
        description: 'Have questions or need support? Reach out to us via WhatsApp, email, or our contact form.',
        url: 'https://topscoreapp.ai/contact',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://topscoreapp.ai/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
