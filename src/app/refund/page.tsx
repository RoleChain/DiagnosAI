import React from 'react';
import { Header } from '@/components/Header';
import { DollarSign, Calendar, CheckCircle, XCircle, CreditCard, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Refund Policy - 30-Day Money-Back Guarantee',
	description: 'DiagnosAI offers a 30-day money-back guarantee on all paid subscriptions. Learn about our refund process, eligibility, and terms.',
	keywords: ['DiagnosAI refund', 'money-back guarantee', 'subscription refund', 'healthcare refund policy'],
	openGraph: {
		title: 'DiagnosAI Refund Policy - 30-Day Money-Back Guarantee',
		description: 'Comprehensive refund policy with 30-day money-back guarantee for all paid subscriptions.',
		url: 'https://diagnosai.life/refund',
	},
};

const refundSections = [
	{
		icon: Calendar,
		title: '30-Day Money-Back Guarantee',
		content: [
			'All paid subscriptions include a 30-day money-back guarantee',
			'Request a full refund within 30 days of your initial subscription',
			'No questions asked - we want you to be completely satisfied',
			'Refunds are processed within 5-7 business days',
			'Free trial users are not eligible for refunds as no payment was made'
		]
	},
	{
		icon: CheckCircle,
		title: 'Eligible for Refund',
		content: [
			'Subscription purchased within the last 30 days',
			'Technical issues that prevented service usage despite our support efforts',
			'Billing errors or duplicate charges',
			'Service not meeting advertised features or capabilities',
			'Subscription cancellation due to medical reasons with documentation'
		]
	},
	{
		icon: XCircle,
		title: 'Not Eligible for Refund',
		content: [
			'Subscriptions older than 30 days from purchase date',
			'Violations of our Terms of Service resulting in account suspension',
			'Refund requests for services already extensively used',
			'Change of mind after the 30-day guarantee period',
			'Requests made in bad faith or for fraudulent purposes'
		]
	},
	{
		icon: CreditCard,
		title: 'Refund Process',
		content: [
			'Contact our support team at support@diagnosai.life with your refund request',
			'Provide your account email and reason for the refund request',
			'Our team will review and process eligible requests within 2 business days',
			'Refunds are issued to the original payment method used',
			'You will receive email confirmation once the refund is processed'
		]
	},
	{
		icon: DollarSign,
		title: 'Partial Refunds',
		content: [
			'Partial refunds may be offered for service disruptions or technical issues',
			'Pro-rated refunds available for downgrading subscription plans',
			'Enterprise customers may have custom refund terms in their agreements',
			'Partial refunds are calculated based on unused service time',
			'All partial refund decisions are made at our discretion'
		]
	},
	{
		icon: MessageSquare,
		title: 'Alternative Solutions',
		content: [
			'Before requesting a refund, consider these alternatives:',
			'Account credit for future service usage',
			'Plan downgrade to a more suitable subscription tier',
			'Extended trial period to better evaluate our services',
			'Technical support to resolve any service issues',
			'Consultation with our customer success team for optimization tips'
		]
	}
];

const refundTiers = [
	{
		plan: 'Free Plan',
		refundEligible: false,
		details: 'No payment required, no refund needed',
		guarantee: 'N/A'
	},
	{
		plan: 'Pro Monthly',
		refundEligible: true,
		details: 'Full refund if cancelled within 30 days',
		guarantee: '30-Day Money-Back'
	},
	{
		plan: 'Pro Annual',
		refundEligible: true,
		details: 'Pro-rated refund available after 30 days',
		guarantee: '30-Day Full Refund'
	},
	{
		plan: 'Enterprise',
		refundEligible: true,
		details: 'Custom refund terms per agreement',
		guarantee: 'As Per Contract'
	}
];

export default function RefundPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]'>
			<Header />
			
			{/* Hero Section */}
			<section className='pt-24 pb-16'>
				<div className='container mx-auto px-6'>
					<div className='text-center mb-16'>
						<h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6'>
							Refund{' '}
							<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
								Policy
							</span>
						</h1>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
							We stand behind our service with a comprehensive refund policy. Your satisfaction 
							is our priority, and we want you to feel confident in your DiagnosAI subscription.
						</p>
						<div className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm'>
							<CheckCircle className='w-5 h-5 text-green-500' />
							<span className='text-sm font-medium text-gray-700'>30-Day Guarantee</span>
						</div>
					</div>

					{/* Money-Back Guarantee Banner */}
					<div className='bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white max-w-4xl mx-auto mb-16'>
						<div className='text-center'>
							<DollarSign className='w-16 h-16 mx-auto mb-4 text-white' />
							<h2 className='text-2xl lg:text-3xl font-bold mb-4'>
								100% Money-Back Guarantee
							</h2>
							<p className='text-lg text-white/90 max-w-2xl mx-auto'>
								Try DiagnosAI risk-free for 30 days. If you&apos;re not completely satisfied 
								with our service, we&apos;ll refund your money, no questions asked.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Refund by Plan */}
			<section className='pb-16'>
				<div className='container mx-auto px-6'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
							Refund Eligibility by Plan
						</h2>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							Different subscription plans have different refund terms and conditions.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16'>
						{refundTiers.map((tier, index) => (
							<div
								key={index}
								className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300'
								style={{ border: '1px solid #E2E8F080' }}>
								<div className='text-center'>
									<h3 className='text-xl font-semibold text-gray-900 mb-3'>{tier.plan}</h3>
									<div className='mb-4'>
										{tier.refundEligible ? (
											<CheckCircle className='w-12 h-12 text-green-500 mx-auto' />
										) : (
											<XCircle className='w-12 h-12 text-gray-400 mx-auto' />
										)}
									</div>
									<p className='text-sm text-gray-600 mb-3'>{tier.details}</p>
									<div className='bg-gray-50 rounded-lg p-3'>
										<span className='text-xs font-medium text-gray-700'>{tier.guarantee}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Refund Policy Sections */}
			<section className='pb-16'>
				<div className='container mx-auto px-6'>
					<div className='max-w-4xl mx-auto space-y-8'>
						{refundSections.map((section, index) => (
							<div
								key={index}
								className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300'
								style={{ border: '1px solid #E2E8F080' }}>
								<div className='flex items-center gap-4 mb-6'>
									<div className='w-12 h-12 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-lg flex items-center justify-center'>
										<section.icon className='w-6 h-6 text-white' />
									</div>
									<h2 className='text-2xl font-bold text-gray-900'>{section.title}</h2>
								</div>
								<ul className='space-y-3'>
									{section.content.map((item, itemIndex) => (
										<li key={itemIndex} className='flex items-start gap-3'>
											<div className='w-2 h-2 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-full mt-2 flex-shrink-0'></div>
											<p className='text-gray-700 leading-relaxed'>{item}</p>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How to Request Refund */}
			<section className='py-16 bg-white/50'>
				<div className='container mx-auto px-6'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
								How to Request a Refund
							</h2>
							<p className='text-xl text-gray-600'>
								Follow these simple steps to request your refund.
							</p>
						</div>

						<div className='grid md:grid-cols-3 gap-8'>
							<div className='text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl font-bold text-white'>1</span>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>Contact Support</h3>
								<p className='text-gray-600'>
									Email us at support@diagnosai.life with your refund request and account details.
								</p>
							</div>
							
							<div className='text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl font-bold text-white'>2</span>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>Review Process</h3>
								<p className='text-gray-600'>
									Our team will review your request and verify eligibility within 2 business days.
								</p>
							</div>
							
							<div className='text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl font-bold text-white'>3</span>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>Receive Refund</h3>
								<p className='text-gray-600'>
									Approved refunds are processed within 5-7 business days to your original payment method.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className='py-16'>
				<div className='container mx-auto px-6'>
					<div className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-2xl p-12 text-white text-center max-w-4xl mx-auto'>
						<h2 className='text-3xl lg:text-4xl font-bold mb-4'>
							Need Help with a Refund?
						</h2>
						<p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
							Our customer support team is here to assist you with any refund questions 
							or concerns you may have.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<a
								href='mailto:support@diagnosai.life'
								className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300'>
								Request Refund
							</a>
							<a
								href='/support'
								className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300'>
								Contact Support
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
} 