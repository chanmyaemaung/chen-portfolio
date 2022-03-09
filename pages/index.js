import { fetchPortfolio, fetchSocialMediaLink } from '@hooks/useFetchApi'
import MainLayout from './components/MainLayout'
import ProfilePage from './components/ProfilePage'

// fetch get static props
export async function getStaticProps() {
	const socialMediaLink = await fetchSocialMediaLink()
	const portfolio = await fetchPortfolio()
	return {
		props: {
			socialMediaLink,
			portfolio,
		},
	}
}

export default function Home({ socialMediaLink, portfolio }) {
	return (
		<MainLayout
			title={`${portfolio.title} - Portfolio`}
			description={portfolio.tags}
		>
			{socialMediaLink && portfolio && (
				<ProfilePage socialMediaLink={socialMediaLink} portfolio={portfolio} />
			)}
		</MainLayout>
	)
}
