import styled from '@emotion/styled'

export default function LaunchScreen() {
	return (
		<SplashScreenContainer>
			<SplashTitle>Wait for a while...</SplashTitle>
		</SplashScreenContainer>
	)
}

const SplashScreenContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.9);
`
const SplashTitle = styled.h1`
	font-family: 'Quicksand', sans-serif;
	font-size: 2rem;
	font-weight: bold;
	color: #fff;
	text-shadow: 0 0 10px #092640;
`
