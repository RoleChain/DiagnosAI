import Link from 'next/link';

export function Footer() {
	return (
		<footer className='bg-white/95 backdrop-blur-sm' style={{ borderTop: '1px solid #E2E8F080' }}>
			<div className='container mx-auto px-6 py-8'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='text-sm text-gray-600'>
						© {new Date().getFullYear()} Diagnos<span className='text-teal-600'>AI</span>.Life. All rights reserved.
					</p>
					<nav className='flex items-center gap-6'>
						<Link href='/pricing' className='text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium'>
							Pricing
						</Link>
						<Link href='/refund' className='text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium'>
							Refund Policy
						</Link>
						<Link href='/privacy' className='text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium'>
							Privacy Policy
						</Link>
						<Link href='/terms' className='text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium'>
							Terms & Conditions
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
} 