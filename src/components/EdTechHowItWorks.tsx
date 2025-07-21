import React, { useState } from 'react';

// Import step images
import image1 from '../assets/how-it-works/image1.png';
import image2 from '../assets/how-it-works/image2.png';
import image3 from '../assets/how-it-works/image3.png';
import image4 from '../assets/how-it-works/image4.png';

const steps = [
	{
		id: 1,
		title: 'Describe Your Symptoms',
		description:
			'Tell our AI about your symptoms, medical history, and concerns in natural language.',
		image: image1,
	},
	{
		id: 2,
		title: 'AI Analysis',
		description:
			'Our advanced AI analyzes your information against millions of medical cases and research.',
		image: image2,
	},
	{
		id: 3,
		title: 'Get Personalized Results',
		description:
			'Receive detailed insights, possible conditions, and recommended next steps.',
		image: image3,
	},
	{
		id: 4,
		title: 'Connect with Professionals',
		description:
			'If needed, connect with certified healthcare professionals for further consultation.',
		image: image4,
	},
];

export const HowItWorks = () => {
	const [activeStep, setActiveStep] = useState(1);

	const currentStep = steps.find((step) => step.id === activeStep);

	return (
		<section
			id='how-it-works'
			className='py-16 bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]'>
			<div className='container mx-auto px-6'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
						How It{' '}
						<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
							Works
						</span>
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
						Getting medical guidance has never been easier. Our intuitive
						process ensures you get the help you need in just a few simple
						steps.
					</p>
				</div>

				{/* Main Content */}
				<div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center'>
					{/* Left Side - Steps */}
					<div className='space-y-8'>
						{steps.map((step) => (
							<div
								key={step.id}
								className='relative cursor-pointer transition-all duration-300 hover:transform'
								onClick={() => setActiveStep(step.id)}>
								{/* Green line indicator for active step */}
								{activeStep === step.id && (
									<div className='absolute left-0 top-0 bottom-0 w-1 bg-green-400 rounded-full'></div>
								)}

								<div className={`pl-6 ${activeStep === step.id ? 'pl-8' : ''}`}>
									<h3
										className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
											activeStep === step.id ? 'text-gray-900' : 'text-gray-700'
										}`}>
										{step.title}
									</h3>
									{activeStep === step.id && (
										<p className='text-gray-600 leading-relaxed animate-fadeIn'>
											{step.description}
										</p>
									)}
								</div>
							</div>
						))}
					</div>

					{/* Right Side - Dynamic Image */}
					<div className='relative'>
						<div className='rounded-2xl overflow-hidden shadow-lg transition-all duration-500'>
							<img
								src={currentStep?.image}
								title={currentStep?.title}
								alt={currentStep?.title}
								className='w-full h-full object-cover transition-opacity duration-500'
								key={activeStep} // Force re-render for smooth transition
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
