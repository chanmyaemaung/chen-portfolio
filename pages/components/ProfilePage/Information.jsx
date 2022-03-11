import { Button, Typography } from '@mui/material'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { useGlobalContextApi } from '@context/apiContext'

export default function Information() {
	const { portfolio } = useGlobalContextApi()

	// Extract image from context
	const { title, tags } = portfolio

	return (
		<>
			{/* Main Title */}
			<Typography
				variant='h3'
				component='h1'
				textAlign='center'
				fontFamily='Kurale'
				mt={4}
				fontSize='1.5rem'
				fontWeight='bold'
				sx={{ textDecoration: 'underline' }}
			>
				{title ?? 'Chen Lay'}
			</Typography>
			{/* Sub Title */}
			<Typography
				component='p'
				variant='subtitle2'
				textAlign='center'
				fontFamily='Quicksand'
				gutterBottom
			>
				{tags ?? 'Software Engineer'}
			</Typography>
			{/* Contact Button */}
			<Button
				fullWidth
				variant='contained'
				size='medium'
				startIcon={<ContactMailIcon />}
				onClick={() => window.open('mailto:info@chanmyaemaung.net', '_parent')}
				sx={{
					background: '#082640',
					color: '#fff',
					mt: 2,
					fontFamily: 'Poppins',
				}}
			>
				Get in touch
			</Button>
		</>
	)
}
