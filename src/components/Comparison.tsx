import React from 'react';
import { Check, X, Clock, DollarSign, Users, Zap } from 'lucide-react';

const comparisons = [
	{
		feature: 'Availability',
		traditional: 'Business hours only',
		ai: '24/7 instant access',
		icon: Clock,
	},
	{
		feature: 'Wait Time',
		traditional: 'Days to weeks',
		ai: 'Instant response',
		icon: Zap,
	},
	{
		feature: 'Cost per Consultation',
		traditional: '$200-500+',
		ai: 'Starting at $19.99/month unlimited',
		icon: DollarSign,
	},
	{
		feature: 'Initial Assessment',
		traditional: 'Limited time slots',
		ai: 'Comprehensive AI analysis',
		icon: Users,
	},
	{
		feature: 'Follow-up Support',
		traditional: 'Additional appointments',
		ai: 'Continuous monitoring included',
		icon: Check,
	},
	{
		feature: 'Travel Required',
		traditional: 'Yes, to clinic/hospital',
		ai: 'No, from anywhere',
		icon: X,
	},
];

export const Comparison = () => {
	return (
		<section className='py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]'>
			<div className='container mx-auto px-4 sm:px-6'>
				<div className='text-center mb-8 sm:mb-12 lg:mb-16'>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6'>
						Why Choose AI{' '}
						<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
							Over Traditional
						</span>
					</h2>
					<p className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0'>
						See how our AI-powered medical platform compares to traditional
						healthcare methods and discover the advantages of modern
						personalized medical assistance.
					</p>
				</div>

				<div className='max-w-6xl mx-auto'>
					{/* Desktop Table View (lg and above) */}
					<div className='hidden lg:block bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200'>
						{/* Header */}
						<div className='grid grid-cols-3 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] text-white'>
							<div className='p-6 text-center'>
								<h3 className='text-xl font-semibold'>Feature</h3>
							</div>
							<div className='p-6 text-center border-l border-white/20'>
								<h3 className='text-xl font-semibold'>
									Traditional Healthcare
								</h3>
							</div>
							<div className='p-6 text-center border-l border-white/20'>
								<h3 className='text-xl font-semibold'>AI Medical Assistant</h3>
							</div>
						</div>

						{/* Comparison rows */}
						{comparisons.map((comparison, index) => (
							<div
								key={index}
								className={`grid grid-cols-3 border-b border-gray-200/50 last:border-b-0 hover:bg-gray-50/30 transition-colors ${
									index % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'
								}`}>
								<div className='p-6 flex items-center gap-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-lg flex items-center justify-center'>
										<comparison.icon className='w-4 h-4 text-white' />
									</div>
									<span className='font-semibold text-gray-900'>
										{comparison.feature}
									</span>
								</div>
								<div className='p-6 border-l border-gray-200/50 flex items-center'>
									<span className='text-gray-600'>
										{comparison.traditional}
									</span>
								</div>
								<div className='p-6 border-l border-gray-200/50 flex items-center'>
									<span className='text-blue-600 font-semibold'>
										{comparison.ai}
									</span>
								</div>
							</div>
						))}
					</div>

					{/* Mobile/Tablet Card View (below lg) */}
					<div className='lg:hidden space-y-4 sm:space-y-6'>
						{comparisons.map((comparison, index) => (
							<div
								key={index}
								className='bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden'>
								{/* Feature Header */}
								<div className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] text-white p-4 sm:p-6'>
									<div className='flex items-center gap-3'>
										<div className='w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center'>
											<comparison.icon className='w-4 h-4 text-white' />
										</div>
										<h3 className='text-lg sm:text-xl font-semibold'>
											{comparison.feature}
										</h3>
									</div>
								</div>

								{/* Comparison Content */}
								<div className='p-4 sm:p-6 space-y-4'>
									{/* Traditional Healthcare */}
									<div className='border-l-4 border-red-200 pl-4'>
										<div className='text-sm text-gray-500 mb-1'>
											Traditional Healthcare
										</div>
										<div className='text-gray-700 font-medium'>
											{comparison.traditional}
										</div>
									</div>

									{/* AI Assistant */}
									<div className='border-l-4 border-green-200 pl-4'>
										<div className='text-sm text-gray-500 mb-1'>
											AI Medical Assistant
										</div>
										<div className='text-blue-600 font-semibold'>
											{comparison.ai}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* CTA Button */}
					<div className='text-center mt-8 sm:mt-10 lg:mt-12'>
						<button className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto group'>
							Experience the Difference
							<Check className='w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform' />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
