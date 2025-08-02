'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo);
		
		// In production, you might want to send this to an error reporting service
		if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
			// Example: Send to error tracking service
			// errorTrackingService.captureException(error, { extra: errorInfo });
		}
	}

	private handleReset = () => {
		this.setState({ hasError: false, error: undefined });
	};

	public render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
					<div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
						<div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
							<AlertTriangle className="w-8 h-8 text-red-600" />
						</div>
						<h1 className="text-xl font-semibold text-gray-900 mb-2">
							Something went wrong
						</h1>
						<p className="text-gray-600 mb-6">
							We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
						</p>
						<button
							onClick={this.handleReset}
							className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
							<RefreshCw className="w-4 h-4" />
							Try again
						</button>
						{process.env.NODE_ENV === 'development' && this.state.error && (
							<details className="mt-4 text-left">
								<summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
									Error details (development only)
								</summary>
								<pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
									{this.state.error.toString()}
								</pre>
							</details>
						)}
					</div>
				</div>
			);
		}

		return this.props.children;
	}
} 