import { Button, CssBaseline, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import CottageIcon from '@mui/icons-material/Cottage'
import { useRouter } from 'next/router'

const PortFolio = () => {
	const { push } = useRouter()

	return (
		<>
			<Head>
				<title>See All My Portfolio</title>
			</Head>
			<CssBaseline />
			<Stack direction='column'>
				<Stack
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100vw',
						height: '100vh',
					}}
				>
					<Typography
						gutterBottom
						mb={3}
						textAlign='center'
						fontSize='2rem'
						fontWeight='bold'
						fontFamily='Quicksand'
					>
						The page is currently under construction!
					</Typography>
					<Button
						startIcon={<CottageIcon />}
						size='large'
						color='inherit'
						variant='contained'
						sx={{ fontFamily: 'Poppins' }}
						onClick={() => push('/')}
					>
						Go back home
					</Button>
				</Stack>
			</Stack>
		</>
	)
}

export default PortFolio
