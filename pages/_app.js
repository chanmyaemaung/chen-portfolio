import { ApiContextProvider } from '@context/apiContext'
import { Global } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import GlobalStyle from 'styles/globalStyle'

function MyApp({ Component, pageProps }) {
	return (
		<ApiContextProvider>
			<CssBaseline />
			{/* Global StyleSheet */}
			<Global styles={GlobalStyle} />
			<Component {...pageProps} />
		</ApiContextProvider>
	)
}

export default MyApp
