import { useGlobalContextApi } from '@context/apiContext'
import { Stack, Typography } from '@mui/material'

export default function Summary() {
	const { portfolio } = useGlobalContextApi()

	// Extract image from context
	const { about } = portfolio

	return (
		<Stack direction='column' my={3}>
			<Typography
				component='p'
				variant='body'
				textAlign='justify'
				gutterBottom
				fontFamily='Poppins'
				dangerouslySetInnerHTML={{ __html: about }}
			/>
		</Stack>
	)
}
