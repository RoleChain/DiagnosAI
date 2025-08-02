import React from 'react';
import { Header } from '@/components/Header';
import { FileText, Scale, AlertTriangle, Users, Shield, Gavel } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms & Conditions - Service Agreement',
	description: 'Read our terms and conditions for using DiagnosAI services. Important medical disclaimers, user responsibilities, and service terms.',
	keywords: ['DiagnosAI terms', 'service agreement', 'medical AI terms', 'healthcare terms'],
	openGraph: {
		title: 'DiagnosAI Terms & Conditions - Service Agreement',
		description: 'Complete terms and conditions for using our AI-powered health guidance services.',
		url: 'https://diagnosai.life/terms',
	},
};

const termsSections = [
	{
		icon: FileText,
		title: 'Acceptance of Terms',
		content: [
			'By accessing and using DiagnosAI services, you agree to be bound by these Terms and Conditions',
			'If you disagree with any part of these terms, you may not access our services',
			'These terms apply to all visitors, users, and others who access or use our service',
			'We reserve the right to update these terms at any time with notice to users',
			'Continued use of the service after changes indicates acceptance of new terms'
		]
	},
	{
		icon: Scale,
		title: 'Use of Services',
		content: [
			'DiagnosAI provides AI-powered health guidance for informational purposes only',
			'Our service is not a substitute for professional medical advice, diagnosis, or treatment',
			'You must be at least 18 years old to use our services independently',
			'You agree to provide accurate and complete information when using our services',
			'You are responsible for maintaining the security of your account credentials'
		]
	},
	{
		icon: AlertTriangle,
		title: 'Medical Disclaimer',
		content: [
			'DiagnosAI is not a licensed healthcare provider and does not practice medicine',
			'Always seek advice from qualified healthcare professionals for medical concerns',
			'Do not ignore professional medical advice or delay seeking treatment based on our AI guidance',
			'In case of medical emergencies, contact emergency services immediately',
			'Our AI recommendations are based on general medical knowledge and may not apply to your specific situation'
		]
	},
	{
		icon: Users,
		title: 'User Responsibilities',
		content: [
			'Provide accurate health information to receive relevant AI recommendations',
			'Use the service in compliance with applicable laws and regulations',
			'Respect the privacy and confidentiality of your health information',
			'Report any technical issues or concerns to our support team promptly',
			'Do not share your account credentials or allow unauthorized access to your account'
		]
	},
	{
		icon: Shield,
		title: 'Privacy and Data Protection',
		content: [
			'Your privacy is protected according to our comprehensive Privacy Policy',
			'We implement industry-standard security measures to protect your data',
			'Health information is encrypted and stored in HIPAA-compliant systems',
			'You retain ownership of your health data and can request its deletion',
			'We may use anonymized data for research and service improvement purposes'
		]
	},
	{
		icon: Gavel,
		title: 'Limitation of Liability',
		content: [
			'DiagnosAI is provided on an "as is" and "as available" basis',
			'We make no warranties regarding the accuracy or completeness of AI recommendations',
			'Our liability is limited to the maximum extent permitted by applicable law',
			'We are not liable for any indirect, incidental, or consequential damages',
			'Users assume full responsibility for decisions made based on our AI guidance'
		]
	}
];

export default function TermsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]'>
			<Header />
			
			{/* Hero Section */}
			<section className='pt-24 pb-16'>
				<div className='container mx-auto px-6'>
					<div className='text-center mb-16'>
						<h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6'>
							Terms &{' '}
							<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
								Conditions
							</span>
						</h1>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
							Please read these terms carefully before using DiagnosAI. These terms govern your 
							use of our AI-powered health services and establish our mutual rights and responsibilities.
						</p>
						<div className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm'>
							<Scale className='w-5 h-5 text-blue-500' />
							<span className='text-sm font-medium text-gray-700'>Legal Agreement</span>
						</div>
					</div>

					{/* Important Notice */}
					<div className='bg-white rounded-xl p-6 shadow-sm max-w-4xl mx-auto mb-16' style={{ border: '1px solid #E2E8F080' }}>
						<div className='flex items-center gap-3 mb-4'>
							<AlertTriangle className='w-6 h-6 text-amber-500' />
							<h2 className='text-lg font-semibold text-gray-900'>Important Medical Disclaimer</h2>
						</div>
						<p className='text-gray-600 leading-relaxed mb-4'>
							<strong>DiagnosAI is not a replacement for professional medical care.</strong> Our AI-powered 
							health guidance is for informational purposes only and should not be considered medical advice, 
							diagnosis, or treatment recommendations.
						</p>
						<p className='text-gray-600 leading-relaxed'>
							Always consult with qualified healthcare professionals for medical concerns. In case of 
							emergencies, contact your local emergency services immediately.
						</p>
					</div>

					{/* Last Updated */}
					<div className='bg-blue-50 rounded-xl p-6 max-w-4xl mx-auto mb-16' style={{ border: '1px solid #E2E8F080' }}>
						<div className='flex items-center gap-3 mb-4'>
							<FileText className='w-6 h-6 text-blue-500' />
							<h2 className='text-lg font-semibold text-gray-900'>Agreement Information</h2>
						</div>
						<p className='text-gray-600 leading-relaxed mb-4'>
							These Terms and Conditions were last updated on <strong>January 15, 2024</strong> and are 
							effective immediately. By using our services, you agree to these terms.
						</p>
						<p className='text-gray-600 leading-relaxed'>
							For questions about these terms, contact our legal team at{' '}
							<a href='mailto:legal@diagnosai.life' className='text-blue-600 hover:underline'>
								legal@diagnosai.life
							</a>
						</p>
					</div>
				</div>
			</section>

			{/* Terms Sections */}
			<section className='pb-16'>
				<div className='container mx-auto px-6'>
					<div className='max-w-4xl mx-auto space-y-8'>
						{termsSections.map((section, index) => (
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

			{/* Additional Important Information */}
			<section className='py-16 bg-white/50'>
				<div className='container mx-auto px-6'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Additional Information</h2>
						
						<div className='grid md:grid-cols-2 gap-8'>
							<div className='bg-white rounded-xl p-6 shadow-sm' style={{ border: '1px solid #E2E8F080' }}>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>Governing Law</h3>
								<p className='text-gray-600 leading-relaxed'>
									These terms are governed by and construed in accordance with the laws of the jurisdiction 
									where DiagnosAI operates, without regard to conflict of law principles.
								</p>
							</div>
							
							<div className='bg-white rounded-xl p-6 shadow-sm' style={{ border: '1px solid #E2E8F080' }}>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>Dispute Resolution</h3>
								<p className='text-gray-600 leading-relaxed'>
									Any disputes arising from these terms will be resolved through binding arbitration in 
									accordance with established arbitration rules and procedures.
								</p>
							</div>
							
							<div className='bg-white rounded-xl p-6 shadow-sm' style={{ border: '1px solid #E2E8F080' }}>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>Service Availability</h3>
								<p className='text-gray-600 leading-relaxed'>
									We strive to maintain service availability but cannot guarantee uninterrupted access. 
									Scheduled maintenance and updates may temporarily affect service availability.
								</p>
							</div>
							
							<div className='bg-white rounded-xl p-6 shadow-sm' style={{ border: '1px solid #E2E8F080' }}>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>Termination</h3>
								<p className='text-gray-600 leading-relaxed'>
									We may terminate or suspend access to our service immediately, without prior notice, 
									for any breach of these Terms and Conditions.
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
							Questions About Our Terms?
						</h2>
						<p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
							Our legal team is here to help clarify any questions you may have about 
							these terms and conditions.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<a
								href='mailto:legal@diagnosai.life'
								className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300'>
								Contact Legal Team
							</a>
							<a
								href='/support'
								className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300'>
								General Support
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
} 