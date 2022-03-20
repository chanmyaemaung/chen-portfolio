import { Box, Button, Typography } from '@mui/material'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import { useRouter } from 'next/router'
import MainLayout from '@components/MainLayout'

function NotFound() {
	const { push } = useRouter()

	return (
		<MainLayout title='Not Found'>
			<Box sx={styles.root}>
				<Typography
					component='h1'
					variant='h4'
					gutterBottom
					fontFamily='Quicksand'
				>
					404 Not Found!
				</Typography>
				<Typography
					component='p'
					variant='body'
					gutterBottom
					fontFamily='Poppins'
				>
					Sorry, there is nothing here!
				</Typography>
				<Button
					startIcon={<CottageOutlinedIcon />}
					onClick={() => push('/')}
					size='small'
					variant='contained'
					color='info'
					sx={{ my: 2 }}
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
		width: '100%',
		height: 'calc(100vh - 70px)',
		p: 3,
	},
}

export default NotFound
