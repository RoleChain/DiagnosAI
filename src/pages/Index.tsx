import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

// Lazy load components that are below the fold
const Features = lazy(() =>
	import('@/components/EdTechFeatures').then((module) => ({
		default: module.Features,
	})),
);
const HowItWorks = lazy(() =>
	import('@/components/EdTechHowItWorks').then((module) => ({
		default: module.HowItWorks,
	})),
);
const TrustSection = lazy(() =>
	import('@/components/EdTechTrustSection').then((module) => ({
		default: module.TrustSection,
	})),
);
const Comparison = lazy(() =>
	import('@/components/Comparison').then((module) => ({
		default: module.Comparison,
	})),
);
const Reviews = lazy(() =>
	import('@/components/EdTechReviews').then((module) => ({
		default: module.Reviews,
	})),
);
const FAQ = lazy(() =>
	import('@/components/EdTechFAQ').then((module) => ({ default: module.FAQ })),
);
const CTA = lazy(() =>
	import('@/components/CTA').then((module) => ({ default: module.CTA })),
);
const StatsSection = lazy(() =>
	import('@/components/StatsSection').then((module) => ({
		default: module.StatsSection,
	})),
);
const ScrollToTop = lazy(() =>
	import('@/components/ScrollToTop').then((module) => ({
		default: module.ScrollToTop,
	})),
);

// Loading component for better UX
const LoadingSpinner = () => (
	<div className='flex justify-center items-center py-8'>
		<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
	</div>
);

const Index = () => {
	return (
		<div className='min-h-screen'>
			<Header />
			<main>
				<Hero />

				<Suspense fallback={<LoadingSpinner />}>
					<StatsSection />
				</Suspense>

				<Suspense fallback={<LoadingSpinner />}>
					<Features />
				</Suspense>

				<Suspense fallback={<LoadingSpinner />}>
					<HowItWorks />
				</Suspense>

				<Suspense fallback={<LoadingSpinner />}>
					<TrustSection />
				</Suspense>

				<Suspense fallback={<LoadingSpinner />}>
					<Comparison />
				</Suspense>

				<Suspense fallback={<LoadingSpinner />}>
					<Reviews />
				</Suspense>

				<Suspense fallback={<LoadingSpinner />}>
					<FAQ />
				</Suspense>

				<Suspense fallback={<LoadingSpinner />}>
					<CTA />
				</Suspense>
			</main>

			<Suspense fallback={null}>
				<ScrollToTop />
			</Suspense>
		</div>
	);
};

export default Index;
