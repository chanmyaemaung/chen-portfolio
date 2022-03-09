import { Global } from '@emotion/react'
import GlobalStyle from 'styles/globalStyle'

function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* Global StyleSheet */}
			<Global styles={GlobalStyle} />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
