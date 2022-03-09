/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['api.chanmyaemaung.net'],
	},
	env: {
		API_URL: process.env.NEXT_PUBLIC_API_URL,
	},
}

module.exports = nextConfig
