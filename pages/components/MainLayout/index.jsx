import Head from 'next/head'
import NoSsr from '@mui/material/NoSsr'
import MyAppBar from '../Navbar'
import { Box, CssBaseline } from '@mui/material'

// styles for main layout
const styles = {
	root: {
		width: '100vw',
		height: '100vh',
		background: `url('/assets/images/bg.jpeg')`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
	},
}

const MainLayout = ({ title, keywords, description, children }) => {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NoSsr>
				<Box sx={styles.root}>
					<CssBaseline />
					<MyAppBar />
					{children}
				</Box>
			</NoSsr>
		</>
	)
}

export default MainLayout

MainLayout.defaultProps = {
	title: 'Chen Lay',
	keywords: 'chenlay, chanmyaemaung, chanlaymcmm, mgchan, mgchen',
	description: 'This is my very little simple own Portfolio Page',
}
