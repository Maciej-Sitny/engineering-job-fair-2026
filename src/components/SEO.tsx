import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    keywords?: string;
}

/**
 * Komponent SEO do dynamicznej zmiany meta tagów na podstronach.
 * Używaj na początku każdego komponentu strony.
 */
export default function SEO({
    title = 'Inżynierskie Targi Pracy 2026 | 11 marca | Kraków',
    description = '28. edycja Inżynierskich Targów Pracy w Krakowie. Poznaj pracodawców z branży IT, inżynierii i technologii. 11 marca 2026, Stadion Miejski im. Henryka Reymana. Wstęp wolny!',
    canonicalUrl = 'https://itp.best.krakow.pl/',
    ogImage = 'https://itp.best.krakow.pl/itp-logo.svg',
    ogType = 'website',
    keywords
}: SEOProps) {
    useEffect(() => {
        // Update title
        document.title = title;

        // Update meta tags
        const updateMetaTag = (selector: string, content: string) => {
            const element = document.querySelector(selector);
            if (element) {
                element.setAttribute('content', content);
            } else {
                // Create meta tag if it doesn't exist
                const meta = document.createElement('meta');
                if (selector.includes('property=')) {
                    const property = selector.match(/property="([^"]+)"/)?.[1];
                    if (property) {
                        meta.setAttribute('property', property);
                        meta.setAttribute('content', content);
                        document.head.appendChild(meta);
                    }
                } else if (selector.includes('name=')) {
                    const name = selector.match(/name="([^"]+)"/)?.[1];
                    if (name) {
                        meta.setAttribute('name', name);
                        meta.setAttribute('content', content);
                        document.head.appendChild(meta);
                    }
                }
            }
        };

        // Primary meta tags
        updateMetaTag('meta[name="description"]', description);
        updateMetaTag('meta[name="title"]', title);

        // Keywords (optional)
        if (keywords) {
            updateMetaTag('meta[name="keywords"]', keywords);
        }

        // Open Graph
        updateMetaTag('meta[property="og:type"]', ogType);
        updateMetaTag('meta[property="og:title"]', title);
        updateMetaTag('meta[property="og:description"]', description);
        updateMetaTag('meta[property="og:url"]', canonicalUrl);
        updateMetaTag('meta[property="og:image"]', ogImage);

        // Twitter
        updateMetaTag('meta[name="twitter:title"]', title);
        updateMetaTag('meta[name="twitter:description"]', description);
        updateMetaTag('meta[name="twitter:url"]', canonicalUrl);
        updateMetaTag('meta[name="twitter:image"]', ogImage);

        // Canonical URL
        const canonicalElement = document.querySelector('link[rel="canonical"]');
        if (canonicalElement) {
            canonicalElement.setAttribute('href', canonicalUrl);
        } else {
            const link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            link.setAttribute('href', canonicalUrl);
            document.head.appendChild(link);
        }
    }, [title, description, canonicalUrl, ogImage, ogType, keywords]);

    return null;
}
