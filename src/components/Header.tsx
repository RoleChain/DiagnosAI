import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ label: 'Features', href: '#features' },
		{ label: 'How it Works', href: '#how-it-works' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#contact' },
	];

	const handleSmoothScroll = (e, href) => {
		e.preventDefault();
		const targetId = href.replace('#', '');
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
		setIsMenuOpen(false); // Close mobile menu
	};

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50'>
			<div className='container mx-auto px-6'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<div className='flex items-center gap-3'>
						<div className='w-10 h-10 rounded-lg flex items-center justify-center shadow-sm'>
							<img
								src={logo}
								title='iagnosAI.Life Logo'
								alt='DiagnosAI.Life Logo'
								className='w-8 h-8'
							/>
						</div>
						<span className='text-xl font-semibold text-gray-900'>
							Diagnos<span className='text-teal-600'>AI</span>.Life
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center gap-8'>
						{navItems.map((item) => (
							<a
								key={item.label}
								title={item.label}
								href={item.href}
								onClick={(e) => handleSmoothScroll(e, item.href)}
								className='text-gray-600 hover:text-teal-600 transition-colors font-medium cursor-pointer'>
								{item.label}
							</a>
						))}
					</nav>

					{/* Desktop CTA */}
					<div className='hidden md:flex items-center gap-3'>
						<button className='px-4 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors'>
							Sign In
						</button>
						<button className='px-6 py-2 bg-gradient-to-r from-[#0073E6] to-[#2BDE96] hover:bg-teal-600 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md'>
							Get Started
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors'
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? (
							<X className='w-6 h-6' />
						) : (
							<Menu className='w-6 h-6' />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className='md:hidden py-4 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm'>
						<nav className='flex flex-col gap-2'>
							{navItems.map((item) => (
								<a
									key={item.label}
									title={item.label}
									href={item.href}
									onClick={(e) => handleSmoothScroll(e, item.href)}
									className='text-gray-600 hover:text-teal-600 transition-colors py-3 px-2 font-medium cursor-pointer'>
									{item.label}
								</a>
							))}
							<div className='flex flex-col gap-2 pt-4 px-2'>
								<button className='py-3 text-gray-700 hover:text-teal-600 font-medium transition-colors text-left'>
									Sign In
								</button>
								<button className='py-3 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-all duration-200 shadow-sm'>
									Get Started
								</button>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
