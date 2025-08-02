import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';
import { Features } from '@/components/EdTechFeatures';
import { HowItWorks } from '@/components/EdTechHowItWorks';
import { TrustSection } from '@/components/EdTechTrustSection';
import { Comparison } from '@/components/Comparison';
import { Reviews } from '@/components/EdTechReviews';
import { FAQ } from '@/components/EdTechFAQ';
import { CTA } from '@/components/CTA';
import { ScrollToTop } from '@/components/ScrollToTop';

// Loading component for better UX
const LoadingSpinner = () => (
	<div className='flex justify-center items-center py-8'>
		<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
	</div>
);

// Skeleton loading components for better UX
const FeaturesSkeleton = () => (
	<div className='py-16 px-4'>
		<div className='container mx-auto'>
			<div className='h-8 bg-gray-200 rounded-md mb-4 mx-auto max-w-md animate-pulse'></div>
			<div className='h-4 bg-gray-200 rounded-md mb-8 mx-auto max-w-2xl animate-pulse'></div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{[1, 2, 3].map((i) => (
					<div key={i} className='bg-gray-200 h-64 rounded-lg animate-pulse'></div>
				))}
			</div>
		</div>
	</div>
);

const Index = () => {
	return (
		<div className='min-h-screen'>
			<Header />
			<main>
				<Hero />
				<StatsSection />

				<Suspense fallback={<FeaturesSkeleton />}>
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
