import React from 'react';
import { Header } from '@/components/Header';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us - Get in Touch with DiagnosAI',
	description: 'Contact DiagnosAI for support, questions, or feedback. We\'re here to help with your AI-powered health journey 24/7.',
	keywords: ['DiagnosAI contact', 'customer support', 'health AI support', 'medical AI help'],
	openGraph: {
		title: 'Contact DiagnosAI - Get in Touch',
		description: 'Contact our team for support, questions, or feedback about our AI-powered health platform.',
		url: 'https://diagnosai.life/contact',
	},
};

const contactMethods = [
	{
		icon: Mail,
		title: 'Email Support',
		description: 'Get help via email within 24 hours',
		contact: 'hey@diagnosai.life',
		action: 'mailto:hey@diagnosai.life'
	},
	{
		icon: Phone,
		title: 'Phone Support',
		description: 'Speak with our team directly',
		contact: '+91 96866 98253',
		action: 'tel:+919686698253'
	},
	{
		icon: MessageSquare,
		title: 'Live Chat',
		description: 'Chat with us in real-time',
		contact: 'Available 24/7',
		action: '#'
	},
	{
		icon: MapPin,
		title: 'Office Address',
		description: 'Visit us at our headquarters',
		contact: '#100, 104, S R arcade, 6th Cross, Tulsi Theatre Road, Marathahalli, Bangalore -560037',
		action: '#'
	}
];

const supportHours = [
	{ day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
	{ day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
	{ day: 'Sunday', hours: 'Emergency support only' },
];

export default function ContactPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]'>
			<Header />
			
			{/* Hero Section */}
			<section className='pt-24 pb-16'>
				<div className='container mx-auto px-6'>
					<div className='text-center mb-16'>
						<h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6'>
							Contact{' '}
							<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
								Us
							</span>
						</h1>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
							Have questions about DiagnosAI? Need support with your health journey? 
							We&apos;re here to help you every step of the way.
						</p>
						<div className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm'>
							<Clock className='w-5 h-5 text-green-500' />
							<span className='text-sm font-medium text-gray-700'>24/7 Emergency Support</span>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Methods */}
			<section className='pb-16'>
				<div className='container mx-auto px-6'>
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16'>
						{contactMethods.map((method, index) => (
							<div
								key={index}
								className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center'
								style={{ border: '1px solid #E2E8F080' }}>
								<div className='w-16 h-16 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-full flex items-center justify-center mx-auto mb-4'>
									<method.icon className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>{method.title}</h3>
								<p className='text-gray-600 text-sm mb-3'>{method.description}</p>
								<a
									href={method.action}
									className='text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors'>
									{method.contact}
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<section className='pb-16'>
				<div className='container mx-auto px-6'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
								Send Us a Message
							</h2>
							<p className='text-xl text-gray-600'>
								Fill out the form below and we&apos;ll get back to you within 24 hours.
							</p>
						</div>

						<div className='bg-white rounded-2xl p-8 shadow-lg' style={{ border: '1px solid #E2E8F080' }}>
							<form className='space-y-6'>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
											First Name *
										</label>
										<input
											type='text'
											id='firstName'
											name='firstName'
											required
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
											placeholder='Enter your first name'
										/>
									</div>
									<div>
										<label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
											Last Name *
										</label>
										<input
											type='text'
											id='lastName'
											name='lastName'
											required
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
											placeholder='Enter your last name'
										/>
									</div>
								</div>

								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
											Email Address *
										</label>
										<input
											type='email'
											id='email'
											name='email'
											required
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
											placeholder='Enter your email'
										/>
									</div>
									<div>
										<label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
											Phone Number
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
											placeholder='Enter your phone number'
										/>
									</div>
								</div>

								<div>
									<label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
										Subject *
									</label>
									<select
										id='subject'
										name='subject'
										required
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'>
										<option value=''>Select a subject</option>
										<option value='general'>General Inquiry</option>
										<option value='support'>Technical Support</option>
										<option value='billing'>Billing Question</option>
										<option value='feature'>Feature Request</option>
										<option value='partnership'>Partnership</option>
										<option value='other'>Other</option>
									</select>
								</div>

								<div>
									<label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
										Message *
									</label>
									<textarea
										id='message'
										name='message'
										rows={6}
										required
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical'
										placeholder='Tell us how we can help you...'
									/>
								</div>

								<div className='flex items-center gap-3'>
									<input
										type='checkbox'
										id='privacy'
										name='privacy'
										required
										className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
									/>
									<label htmlFor='privacy' className='text-sm text-gray-600'>
										I agree to the{' '}
										<a href='/privacy' className='text-blue-600 hover:underline'>
											Privacy Policy
										</a>{' '}
										and{' '}
										<a href='/terms' className='text-blue-600 hover:underline'>
											Terms of Service
										</a>
									</label>
								</div>

								<button
									type='submit'
									className='w-full bg-gradient-to-r from-[#0073E6] to-[#2BDE96] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2'>
									<Send className='w-5 h-5' />
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Support Hours */}
			<section className='py-16 bg-white/50'>
				<div className='container mx-auto px-6'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
								Support Hours
							</h2>
							<p className='text-xl text-gray-600'>
								Our team is available to help you during these hours.
							</p>
						</div>

						<div className='bg-white rounded-xl p-8 shadow-sm' style={{ border: '1px solid #E2E8F080' }}>
							<div className='space-y-4'>
								{supportHours.map((schedule, index) => (
									<div key={index} className='flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0'>
										<span className='font-medium text-gray-900'>{schedule.day}</span>
										<span className='text-gray-600'>{schedule.hours}</span>
									</div>
								))}
							</div>
							<div className='mt-6 p-4 bg-blue-50 rounded-lg'>
								<p className='text-sm text-blue-800'>
									<strong>Emergency Support:</strong> For urgent medical concerns, please contact emergency services. 
									DiagnosAI provides health guidance but is not a replacement for emergency medical care.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
} 