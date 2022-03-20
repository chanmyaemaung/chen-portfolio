import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'

export default function LaunchScreen() {
	return (
		<SplashScreenContainer>
			<SplashTitle>Wait for a while...</SplashTitle>
			<CircularProgress variant='indeterminate' sx={{ color: '#082640' }} />
		</SplashScreenContainer>
	)
}

const SplashScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.6);
`
const SplashTitle = styled.h1`
	font-family: 'Quicksand', sans-serif;
	font-size: 2rem;
	font-weight: bold;
	color: #fff;
	text-shadow: 0 0 10px #092640;
`
