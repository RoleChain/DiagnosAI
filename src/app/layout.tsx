import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'DiagnosAI.Life – AI-Powered Medical Diagnosis and Health Insights',
	description:
		'DiagnosAI.Life leverages advanced artificial intelligence to provide fast, accurate medical diagnostics and health analysis. Empower your healthcare decisions with cutting-edge AI technology.',
	keywords: [
		'medical AI',
		'AI healthcare',
		'AI diagnosis',
		'health diagnostics',
		'AI medical app',
		'AI symptom checker',
		'healthcare technology',
		'intelligent health assistant',
	],
	authors: [{ name: 'DiagnosAI.Life Team' }],
	robots: {
		index: true,
		follow: true,
	},
	metadataBase: new URL('https://diagnosai.life'),
	alternates: {
		canonical: 'https://diagnosai.life',
	},
	openGraph: {
		title: 'DiagnosAI.Life – AI-Powered Medical Diagnosis and Health Insights',
		description:
			'DiagnosAI.Life uses AI to deliver quick and accurate medical diagnostics. Enhance your health journey with smart, AI-driven insights.',
		url: 'https://diagnosai.life',
		type: 'website',
		images: [
			{
				url: 'https://lovable.dev/opengraph-image-p98pqg.png',
				width: 1200,
				height: 630,
				alt: 'DiagnosAI.Life Open Graph Image',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@lovable_dev',
		title: 'DiagnosAI.Life – AI-Powered Medical Diagnosis and Health Insights',
		description:
			'Get reliable medical advice and health diagnostics powered by artificial intelligence. Try DiagnosAI.Life now.',
		images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
