import { Stack, Typography } from '@mui/material'

export default function Summary({ about }) {
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
