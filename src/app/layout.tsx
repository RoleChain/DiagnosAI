import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
	display: 'swap',
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' }
	],
};

export const metadata: Metadata = {
	title: {
		default: 'DiagnosAI.Life – AI-Powered Medical Diagnosis and Health Insights',
		template: '%s | DiagnosAI.Life'
	},
	description:
		'DiagnosAI.Life leverages advanced artificial intelligence to provide fast, accurate medical diagnostics and health analysis. Get instant, personalized health guidance 24/7 from our AI medical assistant.',
	keywords: [
		'medical AI',
		'AI healthcare',
		'AI diagnosis',
		'health diagnostics',
		'AI medical app',
		'AI symptom checker',
		'healthcare technology',
		'intelligent health assistant',
		'medical consultation',
		'health guidance',
		'AI doctor',
		'telemedicine',
	],
	authors: [{ name: 'DiagnosAI.Life Team', url: 'https://diagnosai.life' }],
	creator: 'DiagnosAI.Life Team',
	publisher: 'DiagnosAI.Life',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	metadataBase: new URL('https://diagnosai.life'),
	alternates: {
		canonical: 'https://diagnosai.life',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://diagnosai.life',
		siteName: 'DiagnosAI.Life',
		title: 'DiagnosAI.Life – AI-Powered Medical Diagnosis and Health Insights',
		description:
			'Get instant, personalized health guidance from our advanced AI medical assistant. Available 24/7 to answer your medical questions and provide preliminary assessments.',
		images: [
			{
				url: '/assets/hero-main.png',
				width: 1200,
				height: 630,
				alt: 'DiagnosAI.Life - AI Medical Assistant',
				type: 'image/png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@diagnosai',
		creator: '@diagnosai',
		title: 'DiagnosAI.Life – AI-Powered Medical Diagnosis and Health Insights',
		description:
			'Get reliable medical advice and health diagnostics powered by artificial intelligence. Available 24/7 for instant health guidance.',
		images: ['/assets/hero-main.png'],
	},
	category: 'healthcare',
	classification: 'Medical Technology',
	other: {
		'apple-mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-status-bar-style': 'default',
		'apple-mobile-web-app-title': 'DiagnosAI',
		'mobile-web-app-capable': 'yes',
		'msapplication-TileColor': '#0073E6',
		'msapplication-config': '/browserconfig.xml',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://diagnosai.life" />
				<link rel="preload" href="/assets/hero-main.png" as="image" type="image/png" />
				<meta name="theme-color" content="#0073E6" />
				<meta name="msapplication-TileColor" content="#0073E6" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="DiagnosAI" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning>
				<ErrorBoundary>
					{children}
				</ErrorBoundary>
			</body>
		</html>
	);
}
