import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
}

/**
 * Komponent SEO do dynamicznej zmiany meta tagów na podstronach.
 * Używaj na początku każdego komponentu strony.
 */
export default function SEO({
    title = 'Inżynierskie Targi Pracy 2026 | 11 marca | Kraków',
    description = '28. edycja Inżynierskich Targów Pracy w Krakowie. Poznaj pracodawców z branży IT, inżynierii i technologii. 11 marca 2026, Stadion Miejski im. Henryka Reymana. Wstęp wolny!',
    canonicalUrl = 'https://itp.best.krakow.pl/',
    ogImage = 'https://itp.best.krakow.pl/itp-logo.svg'
}: SEOProps) {
    useEffect(() => {
        // Update title
        document.title = title;

        // Update meta tags
        const updateMetaTag = (selector: string, content: string) => {
            const element = document.querySelector(selector);
            if (element) {
                element.setAttribute('content', content);
            }
        };

        // Primary meta tags
        updateMetaTag('meta[name="description"]', description);
        updateMetaTag('meta[name="title"]', title);

        // Open Graph
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
        }
    }, [title, description, canonicalUrl, ogImage]);

    return null;
}
