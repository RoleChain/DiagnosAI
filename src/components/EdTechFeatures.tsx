import brainSVG from '../assets/icons/brain.svg';
import sheildSVG from '../assets/icons/sheild.svg';
import clockSVG from '../assets/icons/clock.svg';
import usersSVG from '../assets/icons/users.svg';
import medSVG from '../assets/icons/med.svg';
import heartSVG from '../assets/icons/heart.svg';

// Import feature images
import aiDiagnosisImg from '../assets/features/feature1.png';
import privacySecurityImg from '../assets/features/feature2.png';
import availabilityImg from '../assets/features/feature3.png';
import specialistNetworkImg from '../assets/features/feature4.png';
import healthTrackingImg from '../assets/features/feature5.png';
import preventiveCareImg from '../assets/features/feature6.png';

const features = [
	{
		id: 1,
		icon: brainSVG,
		isCustomIcon: true, // Flag to indicate this is a custom SVG
		title: 'Advanced AI Diagnosis',
		description:
			'Our AI analyzes symptoms using machine learning trained on millions of medical cases.',
		image: aiDiagnosisImg,
	},
	{
		id: 2,
		icon: sheildSVG,
		isCustomIcon: true,
		title: 'Privacy & Security',
		description:
			'Bank-level encryption ensures your health data remains completely private and secure.',
		image: privacySecurityImg,
	},
	{
		id: 3,
		icon: clockSVG,
		isCustomIcon: true,
		title: '24/7 Availability',
		description:
			"Get medical guidance anytime, anywhere. Our AI never sleeps, so you're always covered.",
		image: availabilityImg,
	},
	{
		id: 4,
		icon: usersSVG,
		isCustomIcon: true,
		title: 'Specialist Network',
		description:
			'Connect with verified healthcare professionals when you need human expertise.',
		image: specialistNetworkImg,
	},
	{
		id: 5,
		icon: medSVG,
		isCustomIcon: true,
		title: 'Comprehensive Health Tracking',
		description:
			'Monitor your health metrics and receive personalized insights and recommendations.',
		image: healthTrackingImg,
	},
	{
		id: 6,
		icon: heartSVG,
		isCustomIcon: true,
		title: 'Preventive Care',
		description:
			'Get proactive health recommendations to prevent issues before they become serious.',
		image: preventiveCareImg,
	},
];

export const Features = () => {
	return (
		<section className='py-6' id='features'>
			<div className='container mx-auto px-6'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
						Advanced Medical AI{' '}
						<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
							at Your Fingertips
						</span>
					</h2>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						Experience the future of healthcare with our comprehensive
						AI-powered platform designed to provide accurate, accessible, and
						personalized medical assistance.
					</p>
				</div>

				{/* Features Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
					{features.map((feature) => (
						<div
							key={feature.id}
							className='bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'>
							{/* Icon */}
							<div className='mb-6'>
								<div className='w-10 h-10 rounded-lg flex items-center justify-center mb-4'>
									<img
										src={feature.icon.toString()}
										title={feature.title}
										alt={feature.title}
										className='w-10 h-10'
									/>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									{feature.title}
								</h3>
								<p className='text-gray-600 text-sm leading-relaxed mb-6'>
									{feature.description}
								</p>
							</div>

							{/* Feature Image */}
							<div className='flex justify-center h-32'>
								<img
									src={feature.image}
									title={feature.title}
									alt={feature.title}
									className='h-full object-contain'
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
