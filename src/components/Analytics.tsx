import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component to track page views with Google Analytics on route changes
 * This ensures gtag tracks navigation in the React single-page application
 */
export default function Analytics() {
    const location = useLocation();

    useEffect(() => {
        // Check if gtag is available (Google Analytics loaded)
        if (typeof window.gtag === 'function') {
            // Track page view on route change
            window.gtag('config', 'G-9HSVC4CVCY', {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
}

// Type declaration for gtag
declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string,
            config?: { page_path: string }
        ) => void;
    }
}
