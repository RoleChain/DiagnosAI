import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
	{
		question: 'How accurate is the AI medical diagnosis?',
		answer:
			'Our AI platform has shown a 95% success rate in improving learning outcomes. Studies show that students using our platform achieve 40% better test scores and retain information 60% longer than traditional methods.',
	},
	{
		question: 'Is my health data secure and private?',
		answer:
			'Absolutely. We use enterprise-grade encryption and comply with COPPA, FERPA, and GDPR regulations. Student data is never shared with third parties and is used solely to improve the learning experience.',
	},
	{
		question: 'Can the AI replace my doctor?',
		answer:
			'No, our AI is designed to enhance, not replace, human educators. It provides personalized tutoring and support, allowing teachers to focus on higher-level instruction, creativity, and emotional support.',
	},
	{
		question: 'What types of medical conditions can the AI help with?',
		answer:
			"Our AI supports K-12 through college level in mathematics, science, language arts, social studies, and more. We're continuously expanding our curriculum coverage and specializations.",
	},
	{
		question: 'How much does the service cost?',
		answer:
			'We offer a free plan for basic features, with premium plans starting at $29/month for unlimited AI tutoring, advanced analytics, and specialized curricula. Educational institutions receive special pricing.',
	},
	{
		question: 'Is the AI available in multiple languages?',
		answer:
			'Yes, our AI is specifically designed to adapt to different learning styles and needs, including students with dyslexia, ADHD, and other learning differences. It provides multiple representation methods and pacing options.',
	},
	{
		question: 'How quickly can I get a response from the AI?',
		answer:
			'Most students see improvement within the first week of consistent use. Our adaptive algorithms continuously optimize the learning experience based on real-time progress data.',
	},
	{
		question: 'What if I need to speak with a human doctor?',
		answer:
			'Yes, parents receive detailed progress reports, learning analytics, and recommendations. Our parent dashboard provides insights into learning patterns, strengths, and areas for improvement.',
	},
];

export const FAQ = () => {
	return (
		<section className='py-24 bg-background'>
			<div className='container mx-auto px-6'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl lg:text-5xl font-bold text-foreground mb-6'>
						Frequently Asked{' '}
						<span className='bg-gradient-to-r from-[#0073E6] to-[#2BDE96] bg-clip-text text-transparent'>
							Questions
						</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Get answers to the most common questions about our AI medical
						assistant and how it can help improve your healthcare experience.
					</p>
				</div>

				<div className='max-w-4xl mx-auto'>
					<Accordion type='single' collapsible className='space-y-4'>
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className='bg-card border border-border/50 rounded-lg px-6 shadow-card hover:shadow-educational transition-all duration-300'>
								<AccordionTrigger className='text-left hover:no-underline py-6'>
									<span className='text-lg font-semibold text-foreground pr-4'>
										{faq.question}
									</span>
								</AccordionTrigger>
								<AccordionContent className='pb-6'>
									<p className='text-muted-foreground leading-relaxed'>
										{faq.answer}
									</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};
