import { ApiContextProvider } from '@context/apiContext'
import { Global } from '@emotion/react'
import GlobalStyle from 'styles/globalStyle'

function MyApp({ Component, pageProps }) {
	return (
		<ApiContextProvider>
			{/* Global StyleSheet */}
			<Global styles={GlobalStyle} />
			<Component {...pageProps} />
		</ApiContextProvider>
	)
}

export default MyApp
