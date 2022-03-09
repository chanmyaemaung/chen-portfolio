import { css } from '@emotion/react'

const GlobalStyle = css`
	@import url('https://fonts.googleapis.com/css2?family=Kurale&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	html {
		scroll-behavior: smooth;
	}

	body {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	body::-webkit-scrollbar {
		display: none;
	}

	.myLogo {
		border-radius: 50%;
	}
`

export default GlobalStyle
