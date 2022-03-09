import { IconButton, Stack } from '@mui/material'

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function SocialIcons({ facebook, instagram, twitter, github }) {
	return (
		<Stack
			direction='row'
			spacing={2}
			sx={{
				border: '1px solid #f1f1f1',
				borderRadius: 10,
				boxShadow: 2,
			}}
			px={2}
			mt={3}
		>
			<IconButton
				size='medium'
				color='primary'
				onClick={() => window.open(facebook, 'blank')}
			>
				<FacebookTwoToneIcon sx={{ fontSize: '2rem' }} />
			</IconButton>
			<IconButton
				size='medium'
				color='error'
				onClick={() => window.open(instagram, 'blank')}
			>
				<InstagramIcon sx={{ fontSize: '2rem' }} />
			</IconButton>
			<IconButton
				size='medium'
				color='inherit'
				onClick={() => window.open(github, 'blank')}
			>
				<GitHubIcon sx={{ fontSize: '2rem' }} />
			</IconButton>
			<IconButton
				size='medium'
				color='info'
				onClick={() => window.open(twitter, 'blank')}
			>
				<TwitterIcon sx={{ fontSize: '2rem' }} />
			</IconButton>
		</Stack>
	)
}
