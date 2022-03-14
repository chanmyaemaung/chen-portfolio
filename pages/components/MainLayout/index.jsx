import Head from 'next/head'
import { Box } from '@mui/material'
import { useGlobalContextApi } from '@context/apiContext'

// Static Image
const imgUrl = '/assets/images/myLogo.png'

// styles for main layout
const styles = {
	root: {
		width: '100vw',
		height: '100vh',
		backgroundImage: `url('/assets/images/bg.jpeg')`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
	},
}

const MainLayout = ({ title, keywords, description, children }) => {
	const { portfolio } = useGlobalContextApi()

	const { image } = portfolio

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<title>{`${title || portfolio.title} - Portfolio`}</title>
				<meta charSet='utf-8' />
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description || portfolio.tags} />
				<meta
					name='og:title'
					content={`${title || portfolio.title} - Portfolio`}
				/>
				<meta name='og:type' content={description || portfolio.tags} />
				<meta name='og:url' content='http://chanmyaemaung.net' />
				<meta name='og:image' content={image ?? imgUrl} />
				<meta name='og:site_name' content='Chen Lay' />
				<meta name='og:description' content={description || portfolio.tags} />
				<meta name='fb:page_id' content='886426121448796' />
				<meta name='og:email' content='info@chanmyaemaung.net' />
				<meta name='og:phone_number' content='09-263-338-051' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box sx={styles.root}>{children}</Box>
		</>
	)
}

MainLayout.defaultProps = {
	title: 'Chen Lay',
	keywords: 'chenlay, chanmyaemaung, chanlaymcmm, mgchan, mgchen',
	description: 'This is my very little simple own Portfolio Page',
}

export default MainLayout
