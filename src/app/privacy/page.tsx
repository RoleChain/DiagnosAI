import React from 'react';
import { Header } from '@/components/Header';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy - Your Health Data Protection',
	description: 'Learn how DiagnosAI protects your health information with HIPAA-compliant security measures, encryption, and transparent data practices.',
	keywords: ['DiagnosAI privacy', 'health data protection', 'HIPAA compliance', 'medical privacy'],
	openGraph: {
		title: 'DiagnosAI Privacy Policy - Your Health Data Protection',
		description: 'Comprehensive privacy policy detailing how we protect your health information with enterprise-grade security.',
		url: 'https://diagnosai.life/privacy',
	},
};

const privacySections = [
	{
		icon: Shield,
		title: 'Information We Collect',
		content: [
			'Personal information you provide when creating an account (name, email, phone number)',
			'Health information you share during consultations and assessments',
			'Usage data and analytics to improve our services',
			'Device information and technical data for security purposes',
			'Communication records for support and service improvement'
		]
	},
	{
		icon: Lock,
		title: 'How We Use Your Information',
		content: [
			'Provide personalized AI-powered health consultations and recommendations',
			'Improve our AI models and diagnostic accuracy',
			'Send important updates about our services and your health journey',
			'Ensure platform security and prevent fraudulent activities',
			'Comply with legal and regulatory requirements'
		]
	},
	{
		icon: Eye,
		title: 'Information Sharing',
		content: [
			'We never sell your personal health information to third parties',
			'Data may be shared with healthcare providers with your explicit consent',
			'Anonymous, aggregated data may be used for research purposes',
			'Information may be disclosed if required by law or to protect user safety',
			'Service providers who help us operate our platform under strict confidentiality agreements'
		]
	},
	{
		icon: Database,
		title: 'Data Security',
		content: [
			'Enterprise-grade encryption for all data transmission and storage',
			'HIPAA-compliant infrastructure and security measures',
			'Regular security audits and penetration testing',
			'Multi-factor authentication and access controls',
			'Secure data centers with 24/7 monitoring and backup systems'
		]
	},
	{
		icon: UserCheck,
		title: 'Your Rights',
		content: [
			'Access and review your personal information at any time',
			'Request correction or deletion of your data',
			'Download a copy of your health data',
			'Opt-out of non-essential communications',
			'Request data portability to other healthcare providers'
		]
	},
	{
		icon: AlertCircle,
		title: 'Data Retention',
		content: [
			'Health consultation data is retained for 7 years as required by medical regulations',
			'Account information is kept while your account is active',
			'Usage data and analytics are retained for 3 years',
			'Communication records are kept for 2 years for quality assurance',
			'You can request early deletion of your data by contacting support'
		]
	}
];

export default function PrivacyPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]'>
			<Header />
			
			{/* Hero Section */}
			<section className='pt-24 pb-16'>
				<div className='container mx-auto px-6'>
					<div className='text-center mb-16'>
						<h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6'>
							Privacy{' '}
							<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
								Policy
							</span>
						</h1>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
							Your health information is personal and private. We&apos;re committed to protecting 
							your data with the highest security standards and complete transparency.
						</p>
						<div className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm'>
							<Shield className='w-5 h-5 text-green-500' />
							<span className='text-sm font-medium text-gray-700'>HIPAA Compliant</span>
						</div>
					</div>

					{/* Last Updated */}
					<div className='bg-white rounded-xl p-6 shadow-sm max-w-4xl mx-auto mb-16' style={{ border: '1px solid #E2E8F080' }}>
						<div className='flex items-center gap-3 mb-4'>
							<AlertCircle className='w-6 h-6 text-blue-500' />
							<h2 className='text-lg font-semibold text-gray-900'>Important Information</h2>
						</div>
						<p className='text-gray-600 leading-relaxed mb-4'>
							This Privacy Policy was last updated on <strong>January 15, 2024</strong> and is effective immediately. 
							We may update this policy from time to time, and we&apos;ll notify you of any significant changes.
						</p>
						<p className='text-gray-600 leading-relaxed'>
							By using DiagnosAI services, you agree to the collection and use of information in accordance 
							with this Privacy Policy. If you have any questions, please contact us at{' '}
							<a href='mailto:privacy@diagnosai.life' className='text-blue-600 hover:underline'>
								privacy@diagnosai.life
							</a>
						</p>
					</div>
				</div>
			</section>

			{/* Privacy Sections */}
			<section className='pb-16'>
				<div className='container mx-auto px-6'>
					<div className='max-w-4xl mx-auto space-y-8'>
						{privacySections.map((section, index) => (
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

			{/* Contact Section */}
			<section className='py-16 bg-white/50'>
				<div className='container mx-auto px-6'>
					<div className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] rounded-2xl p-12 text-white text-center max-w-4xl mx-auto'>
						<h2 className='text-3xl lg:text-4xl font-bold mb-4'>
							Have Privacy Questions?
						</h2>
						<p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
							Our privacy team is here to help. Contact us anytime for questions about 
							your data, privacy rights, or security concerns.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<a
								href='mailto:privacy@diagnosai.life'
								className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300'>
								Contact Privacy Team
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