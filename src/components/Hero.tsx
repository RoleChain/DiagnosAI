import React from 'react';
import { Play, Shield, Clock, Users } from 'lucide-react';
import heroBackground from '../assets/hero-bg.png';
import heroMain from '../assets/hero-main.png';
import audioPlayer from '../assets/audio-player.png';
import chatInterface from '../assets/chat-interface.png';
import medicalReport from '../assets/medical-report.png';

export const Hero = () => {
	return (
		<div className='min-h-screen relative overflow-hidden pt-16 sm:pt-20 lg:pt-[5%] bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]'>
			{/* Background image positioned only at bottom */}
			<div
				className='absolute bottom-0 left-0 right-0 h-2/5 sm:h-1/2 z-0'
				style={{
					backgroundImage: `url(${heroBackground})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}></div>

			<div className='relative z-10 container mx-auto px-4 sm:px-6 py-4 sm:py-8'>
				{/* Trust badge */}
				<div className='text-center mb-6 sm:mb-8 lg:mb-12'>
					<div className='inline-flex items-center gap-2 bg-white text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm'>
						<Shield className='w-3 h-3 sm:w-4 sm:h-4' />
						<span className='hidden sm:inline'>
							Trusted by healthcare professionals
						</span>
						<span className='sm:hidden'>Healthcare Trusted</span>
					</div>
				</div>

				{/* Main heading */}
				<div className='text-center mb-6 sm:mb-8 lg:mb-12'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight'>
						Your AI-Powered
						<br />
						<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
							Medical Assistant
						</span>
					</h1>
					<p className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0'>
						Get instant, personalized health guidance from our advanced AI
						system. Available 24/7 to answer your medical questions and provide
						preliminary assessments.
					</p>
				</div>

				{/* CTA buttons */}
				<div className='text-center mb-8 sm:mb-12 lg:mb-16'>
					<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0'>
						<button className='w-full sm:w-auto bg-gradient-to-r from-[#0073E6] to-[#2BDE96] hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2'>
							Start Free Consultation
							<svg
								className='w-4 h-4 sm:w-5 sm:h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</button>
						<button className='w-full sm:w-auto border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2'>
							<Play className='w-4 h-4 sm:w-5 sm:h-5' />
							Watch Demo
						</button>
					</div>
				</div>

				{/* Main illustration area */}
				<div className='relative flex justify-center items-center mb-8 sm:mb-12 lg:mb-16'>
					<div className='relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl'>
						{/* Chat interface using actual image */}
						<div className='absolute left-0 sm:left-6 lg:left-5 top-4 sm:top-6 lg:top-10 z-20 transform -rotate-3'>
							<img
								src={chatInterface}
								title='DiagnosAI Chat Interface'
								alt='DiagnosAI Chat Interface'
								className='w-24 sm:w-32 md:w-48 lg:w-64 xl:max-w-xs rounded-xl sm:rounded-2xl'
							/>
						</div>

						{/* Central figure - Woman with Robot using real images */}
						<div className='flex justify-center items-center px-8 sm:px-12 md:px-16 lg:px-0 mb-[-2%]'>
							<div className='relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
								<img
									src={heroMain}
									title='Woman with Robot'
									alt='Woman with Robot'
									className='w-full h-full object-cover rounded-xl sm:rounded-2xl'
								/>
							</div>
						</div>

						{/* Medical report using actual image */}
						<div className='absolute right-0 sm:right-4 lg:right-8 bottom-4 sm:bottom-6 lg:bottom-20 z-20 transform rotate-2'>
							<img
								src={medicalReport}
								title='Medical Report'
								alt='Medical Report'
								className='w-24 sm:w-32 md:w-48 lg:w-64 xl:max-w-xs rounded-xl sm:rounded-2xl '
							/>
						</div>

						{/* Audio player using actual uploaded image */}
						<div className='absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 left-1/2 transform -translate-x-1/2 z-20'>
							<img
								src={audioPlayer}
								title='Audio Player'
								alt='Audio Player'
								className='h-8 sm:h-10 md:h-12 lg:h-16 object-contain'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
