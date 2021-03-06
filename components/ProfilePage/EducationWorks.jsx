import { useGlobalContextApi } from '@context/apiContext'
import { Grid, Typography } from '@mui/material'

export default function EducationWorks() {
	const { portfolio } = useGlobalContextApi()

	// Extract image from context
	const { company, education } = portfolio

	return (
		<Grid container spacing={1}>
			<Grid item xs={12} sm={6} md={6}>
				<Typography variant='caption' fontFamily={'Kurale'}>
					WORK
				</Typography>
				<Typography
					variant='subtitle2'
					fontFamily='Quicksand'
					fontWeight={'bold'}
				>
					{company ?? 'PJK-DEV'}
				</Typography>
			</Grid>
			<Grid item xs={12} sm={6} md={6}>
				<Typography variant='caption' fontFamily={'Kurale'}>
					EDUCATION
				</Typography>
				<Typography
					variant='subtitle2'
					fontFamily='Quicksand'
					fontWeight={'bold'}
				>
					{education ?? 'B.Tech'}
				</Typography>
			</Grid>
		</Grid>
	)
}
