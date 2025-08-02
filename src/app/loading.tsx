import { Loader2 } from 'lucide-react';

export default function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#EEF7F3] to-[#F8FAFC]">
			<div className="text-center">
				<div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
					<Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
				</div>
				<h2 className="text-xl font-semibold text-gray-900 mb-2">
					Loading DiagnosAI
				</h2>
				<p className="text-gray-600">
					Preparing your AI medical assistant...
				</p>
			</div>
		</div>
	);
} 