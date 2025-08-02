import React from 'react';
import { Check, Star, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { FAQ } from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pricing Plans - Choose Your Health Plan',
	description: 'Choose from our flexible pricing plans for AI-powered health guidance. Free plan available, Pro plans with advanced features, and Enterprise solutions for healthcare providers.',
	keywords: ['DiagnosAI pricing', 'health AI subscription', 'medical AI plans', 'healthcare pricing'],
	openGraph: {
		title: 'DiagnosAI Pricing - Choose Your Health Plan',
		description: 'Flexible pricing plans for AI-powered health guidance with 30-day money-back guarantee.',
		url: 'https://diagnosai.life/pricing',
	},
};

const pricingPlans = [
	{
		name: 'Basic',
		price: 'Free',
		period: 'forever',
		description: 'Perfect for individuals exploring AI health guidance',
		features: [
			'5 consultations per month',
			'Basic symptom analysis',
			'General health tips',
			'Email support',
			'Mobile app access'
		],
		popular: false,
		cta: 'Get Started Free',
		icon: Users
	},
	{
		name: 'Pro',
		price: '$29',
		period: 'per month',
		description: 'Ideal for frequent users and health-conscious individuals',
		features: [
			'Unlimited consultations',
			'Advanced AI diagnosis',
			'Personalized health plans',
			'24/7 priority support',
			'Health tracking & analytics',
			'Export medical reports',
			'Family member profiles'
		],
		popular: true,
		cta: 'Start Pro Trial',
		icon: Zap
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		period: 'contact us',
		description: 'For healthcare providers and medical institutions',
		features: [
			'All Pro features included',
			'Custom AI model training',
			'HIPAA compliance tools',
			'API access & integrations',
			'Dedicated account manager',
			'On-premise deployment',
			'Advanced security features',
			'Custom reporting dashboard'
		],
		popular: false,
		cta: 'Contact Sales',
		icon: Shield
	}
];

export default function PricingPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]'>
			<Header />
			
			{/* Hero Section */}
			<section className='pt-24 pb-16'>
				<div className='container mx-auto px-6 text-center'>
					<h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6'>
						Choose Your{' '}
						<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
							Health Plan
						</span>
					</h1>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>
						Get personalized AI-powered health guidance with plans designed for every need. 
						Start your journey to better health today.
					</p>
					
					{/* Trust indicators */}
					<div className='flex flex-wrap justify-center items-center gap-8 mb-16'>
						<div className='flex items-center gap-2 text-gray-600'>
							<div className='flex'>
								{[...Array(5)].map((_, i) => (
									<Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
								))}
							</div>
							<span className='text-sm'>4.9/5 rating</span>
						</div>
						<div className='text-gray-600 text-sm'>50,000+ happy users</div>
						<div className='text-gray-600 text-sm'>HIPAA compliant</div>
					</div>
				</div>
			</section>

			{/* Pricing Cards */}
			<section className='pb-16'>
				<div className='container mx-auto px-6'>
					<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{pricingPlans.map((plan, index) => (
							<div
								key={index}
								className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
									plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
								}`}
								style={{ border: '1px solid #E2E8F080' }}>
								
								{plan.popular && (
									<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
										<div className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] text-white px-6 py-2 rounded-full text-sm font-semibold'>
											Most Popular
										</div>
									</div>
								)}

								<div className='text-center mb-8'>
									<div className='w-16 h-16 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-full flex items-center justify-center mx-auto mb-4'>
										<plan.icon className='w-8 h-8 text-white' />
									</div>
									<h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.name}</h3>
									<p className='text-gray-600 mb-4'>{plan.description}</p>
									<div className='mb-4'>
										<span className='text-4xl font-bold text-gray-900'>{plan.price}</span>
										{plan.price !== 'Free' && plan.price !== 'Custom' && (
											<span className='text-gray-600 text-lg'>/{plan.period}</span>
										)}
										{plan.price === 'Custom' && (
											<span className='text-gray-600 text-lg'> - {plan.period}</span>
										)}
									</div>
								</div>

								<ul className='space-y-4 mb-8'>
									{plan.features.map((feature, featureIndex) => (
										<li key={featureIndex} className='flex items-center gap-3'>
											<Check className='w-5 h-5 text-green-500 flex-shrink-0' />
											<span className='text-gray-700'>{feature}</span>
										</li>
									))}
								</ul>

								<button
									className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
										plan.popular
											? 'bg-gradient-to-r from-[#0073E6] to-[#2BDE96] text-white hover:shadow-lg transform hover:-translate-y-1'
											: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
									}`}>
									{plan.cta}
									<ArrowRight className='w-5 h-5' />
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section - Using existing component */}
			<FAQ />

			{/* CTA Section */}
			<section className='py-16'>
				<div className='container mx-auto px-6 text-center'>
					<div className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-2xl p-12 text-white max-w-4xl mx-auto'>
						<h2 className='text-3xl lg:text-4xl font-bold mb-4'>
							Ready to Transform Your Health Journey?
						</h2>
						<p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
							Join thousands of users who trust DiagnosAI for their health guidance. 
							Start your free trial today.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<button className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2'>
								Start Free Trial
								<ArrowRight className='w-5 h-5' />
							</button>
							<button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300'>
								Contact Sales
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
} 