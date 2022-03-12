import Head from 'next/head'
import { Box } from '@mui/material'
import { useGlobalContextApi } from '@context/apiContext'

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
