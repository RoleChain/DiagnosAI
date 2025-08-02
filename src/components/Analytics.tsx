'use client';

import { useEffect } from 'react';

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
		dataLayer?: unknown[];
	}
}

interface AnalyticsProps {
	gaId?: string;
}

export function Analytics({ gaId }: AnalyticsProps) {
	useEffect(() => {
		if (!gaId || typeof window === 'undefined') return;

		// Load Google Analytics
		const script = document.createElement('script');
		script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		script.async = true;
		document.head.appendChild(script);

		window.gtag = function(...args: unknown[]) {
			(window.dataLayer = window.dataLayer || []).push(args);
		};

		window.gtag('js', new Date());
		window.gtag('config', gaId, {
			page_title: document.title,
			page_location: window.location.href,
		});

		// Track initial page view
		trackPageView(window.location.pathname);

		return () => {
			if (document.head.contains(script)) {
				document.head.removeChild(script);
			}
		};
	}, [gaId]);

	return null;
}

export function trackPageView(path: string) {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
			page_path: path,
		});
	}
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
}

// Performance monitoring
export function trackWebVitals() {
	if (typeof window !== 'undefined') {
		// Track Core Web Vitals
		import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
			onCLS((metric) => {
				trackEvent('CLS', 'Web Vitals', metric.name, Math.round(metric.value * 1000));
			});
			onFCP((metric) => {
				trackEvent('FCP', 'Web Vitals', metric.name, Math.round(metric.value));
			});
			onLCP((metric) => {
				trackEvent('LCP', 'Web Vitals', metric.name, Math.round(metric.value));
			});
			onTTFB((metric) => {
				trackEvent('TTFB', 'Web Vitals', metric.name, Math.round(metric.value));
			});
		});
	}
} 