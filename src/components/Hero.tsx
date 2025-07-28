'use client';
import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import heroMain from '@/assets/hero-main.png';
import audioPlayer from '@/assets/audio-player.png';
import chatInterface from '@/assets/chat-interface.png';
import medicalReport from '@/assets/medical-report.png';
import Image from 'next/image';

export const Hero = () => {
	return (
		<div className='h-screen relative overflow-hidden bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC] flex flex-col'>
			{/* Background image positioned only at bottom */}
			<div
				className='absolute bottom-0 left-0 right-0 h-2/5 sm:h-1/2 z-0'
				style={{
					backgroundImage: `url('/assets/hero-bg.png')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}></div>

			<div className='relative z-10 container mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center pt-16 sm:pt-20'>
				{/* Trust badge */}
				<div className='text-center mb-4 sm:mb-6 lg:mb-4'>
					<div className='inline-flex items-center gap-2 bg-white text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm'>
						<Shield className='w-3 h-3 sm:w-4 sm:h-4' />
						<span className='hidden sm:inline'>
							Trusted by healthcare professionals
						</span>
						<span className='sm:hidden'>Healthcare Trusted</span>
					</div>
				</div>

				{/* Main heading */}
				<div className='text-center mb-4 sm:mb-6 lg:mb-4'>
					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight'>
						Your AI-Powered
						<br />
						<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
							Medical Assistant
						</span>
					</h1>
					<p className='text-base sm:text-md lg:text-lg text-gray-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0'>
						Get instant, personalized health guidance from our advanced AI
						system. Available 24/7 to answer your medical questions and provide
						preliminary assessments.
					</p>
				</div>

				{/* CTA buttons */}
				<div className='text-center mb-6 sm:mb-8 lg:mb-10'>
					<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0'>
						{/* <button className='w-full sm:w-auto bg-gradient-to-r from-[#0073E6] to-[#2BDE96] hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2'>
							<Image
								src={'/images/whatsapp.png'}
								alt='Chat Interface'
								title='Chat Interface'
								height={16}
								width={16}
								className='w-4 h-4 sm:w-5 sm:h-5'
							/>
							Talk to DiagnosAI
							<ArrowRight className='w-4 h-4 sm:w-5 sm:h-5' />
						</button> */}
						<button className='w-full sm:w-auto border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2'>
							Start a Consultation
							<ArrowRight className='w-4 h-4 sm:w-5 sm:h-5' />
						</button>
					</div>
				</div>

				{/* Main illustration area - takes remaining space */}
				<div className='relative flex justify-center items-center flex-1 min-h-0'>
					<div className='relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl'>
						{/* Chat interface using actual image */}
						<div className='absolute left-0 sm:left-6 lg:left-5 top-4 sm:top-6 lg:top-10 z-20 transform -rotate-3'>
							<Image
								src={chatInterface}
								title='DiagnosAI Chat Interface'
								alt='DiagnosAI Chat Interface'
								className='w-24 sm:w-32 md:w-48 lg:w-64 xl:max-w-xs rounded-xl sm:rounded-2xl'
							/>
						</div>

						{/* Central figure - Woman with Robot using real images */}
						<div className='flex justify-center items-center px-8 sm:px-12 md:px-16 lg:px-0'>
							<div className='relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
								<Image
									src={heroMain}
									title='Woman with Robot'
									alt='Woman with Robot'
									className='w-full h-full object-cover rounded-xl sm:rounded-2xl'
								/>
							</div>
						</div>

						{/* Medical report using actual image */}
						<div className='absolute right-0 sm:right-4 lg:right-8 bottom-4 sm:bottom-6 lg:bottom-20 z-20 transform rotate-2'>
							<Image
								src={medicalReport}
								title='Medical Report'
								alt='Medical Report'
								className='w-24 sm:w-32 md:w-48 lg:w-64 xl:max-w-xs rounded-xl sm:rounded-2xl '
							/>
						</div>

						{/* Audio player using actual uploaded image */}
						<div className='absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 left-1/2 transform -translate-x-1/2 z-20'>
							<Image
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
