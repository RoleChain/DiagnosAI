import React from 'react';
import { Shield, Clock, Users } from 'lucide-react';
import accuracySVG from '../assets/icons/accuracy.svg';
import heartsSVG from '../assets/icons/hearts.svg';

export const StatsSection = () => {
	return (
		<div className='relative z-50 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto -mt-12 sm:-mt-16 lg:-mt-20 mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-6 lg:px-0'>
			<div className='bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 mx-auto'>
				{/* Desktop Layout (lg and above) */}
				<div className='hidden lg:flex justify-center items-center'>
					<div className='flex items-center justify-between px-8 flex-1'>
						<div className='text-left'>
							<div className='text-4xl font-bold text-gray-900 mb-1'>98%</div>
							<div className='text-gray-600 text-sm'>Accuracy Rate</div>
						</div>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
							<img
								src={accuracySVG}
								title='Accuracy icon'
								alt='Accuracy icon'
								className='w-6 h-6'
							/>
						</div>
					</div>

					<div className='w-px h-16 bg-gray-200'></div>

					<div className='flex items-center justify-between px-8 flex-1'>
						<div className='text-left'>
							<div className='text-4xl font-bold text-gray-900 mb-1'>24/7</div>
							<div className='text-gray-600 text-sm'>Available</div>
						</div>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
							<Clock className='w-6 h-6 text-blue-600' />
						</div>
					</div>

					<div className='w-px h-16 bg-gray-200'></div>

					<div className='flex items-center justify-between px-8 flex-1'>
						<div className='text-left'>
							<div className='text-4xl font-bold text-gray-900 mb-1'>1M+</div>
							<div className='text-gray-600 text-sm'>Consultations</div>
						</div>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
							<img
								src={heartsSVG}
								title='Heart icon'
								alt='Heart icon'
								className='w-6 h-6'
							/>
						</div>
					</div>
				</div>

				{/* Mobile & Tablet Layout (below lg) */}
				<div className='lg:hidden'>
					{/* Mobile - Single Column */}
					<div className='sm:hidden space-y-6'>
						<div className='flex items-center justify-between'>
							<div className='text-left'>
								<div className='text-2xl font-bold text-gray-900 mb-1'>98%</div>
								<div className='text-gray-600 text-xs'>Accuracy Rate</div>
							</div>
							<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
								<img
									src={accuracySVG}
									title='Accuracy Icon'
									alt='Accuracy Icon'
									className='w-5 h-5'
								/>
							</div>
						</div>

						<div className='h-px bg-gray-200 w-full'></div>

						<div className='flex items-center justify-between'>
							<div className='text-left'>
								<div className='text-2xl font-bold text-gray-900 mb-1'>
									24/7
								</div>
								<div className='text-gray-600 text-xs'>Available</div>
							</div>
							<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
								<Clock className='w-5 h-5 text-blue-600' />
							</div>
						</div>

						<div className='h-px bg-gray-200 w-full'></div>

						<div className='flex items-center justify-between'>
							<div className='text-left'>
								<div className='text-2xl font-bold text-gray-900 mb-1'>1M+</div>
								<div className='text-gray-600 text-xs'>Consultations</div>
							</div>
							<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
								<img
									src={heartsSVG}
									title='Heart icon'
									alt='Heart icon'
									className='w-5 h-5'
								/>
							</div>
						</div>
					</div>

					{/* Tablet - Horizontal Layout */}
					<div className='hidden sm:flex lg:hidden justify-center items-center'>
						<div className='flex items-center justify-between px-4 flex-1'>
							<div className='text-left'>
								<div className='text-3xl font-bold text-gray-900 mb-1'>98%</div>
								<div className='text-gray-600 text-sm'>Accuracy Rate</div>
							</div>
							<div className='w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center'>
								<img
									src={accuracySVG}
									title='Accuracy icon'
									alt='Accuracy icon'
									className='w-5 h-5'
								/>
							</div>
						</div>

						<div className='w-px h-14 bg-gray-200'></div>

						<div className='flex items-center justify-between px-4 flex-1'>
							<div className='text-left'>
								<div className='text-3xl font-bold text-gray-900 mb-1'>
									24/7
								</div>
								<div className='text-gray-600 text-sm'>Available</div>
							</div>
							<div className='w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center'>
								<Clock className='w-5 h-5 text-blue-600' />
							</div>
						</div>

						<div className='w-px h-14 bg-gray-200'></div>

						<div className='flex items-center justify-between px-4 flex-1'>
							<div className='text-left'>
								<div className='text-3xl font-bold text-gray-900 mb-1'>1M+</div>
								<div className='text-gray-600 text-sm'>Consultations</div>
							</div>
							<div className='w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center'>
								<img
									src={heartsSVG}
									title='Heart icon'
									alt='Heart icon'
									className='w-5 h-5'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
