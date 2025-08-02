import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
	// Enable experimental features for better performance
	experimental: {
		optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
	},

	// Turbopack configuration (moved from experimental)
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},

	// Image optimization
	images: {
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000, // 1 year
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},

	// Compression
	compress: true,

	// PoweredByHeader
	poweredByHeader: false,

	// Generate ETags for pages
	generateEtags: true,

	// Strict mode
	reactStrictMode: true,

	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Optimize bundle size
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: 'all',
				cacheGroups: {
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						priority: -10,
						chunks: 'all',
					},
					lucide: {
						test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
						name: 'lucide',
						priority: 30,
						chunks: 'all',
					},
				},
			};
		}

		// SVG optimization
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},

	// Headers for security and performance
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
			{
				source: '/assets/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},

	// Redirect trailing slashes
	trailingSlash: false,

	// Output configuration for production
	output: 'standalone',
};

export default withBundleAnalyzer(nextConfig);
