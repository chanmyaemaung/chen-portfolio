import { Box, Button, Typography } from '@mui/material'
import MainLayout from './components/MainLayout'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import { useRouter } from 'next/router'

function NotFound() {
	const { push } = useRouter()

	return (
		<MainLayout>
			<Box sx={styles.root}>
				<Typography component='h1' variant='h4' gutterBottom>
					404 Not Found!
				</Typography>
				<Typography component='p' variant='body' gutterBottom>
					Sorry, there is nothing here!
				</Typography>
				<Button
					startIcon={<CottageOutlinedIcon />}
					onClick={() => push('/')}
					size='small'
					variant='contained'
					color='info'
				>
					Go back home
				</Button>
			</Box>
		</MainLayout>
	)
}

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100vw',
		height: 'calc(100vh - 70px)',
		p: 3,
	},
}

export default NotFound
