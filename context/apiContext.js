import { fetchPortfolio, fetchSocialMediaLink } from '@hooks/useFetchApi'
import { useState, useEffect, useContext, createContext } from 'react'

const ApiContext = createContext(null)

const ApiContextProvider = ({ children }) => {
	const [socialMediaLink, setSocialMediaLink] = useState({})
	const [portfolio, setPortfolio] = useState({})
	const [loading, setLoading] = useState(true)

	// Retrieve all data
	const getAllData = () => {
		return Promise.all([fetchSocialMediaLink(), fetchPortfolio()])
	}

	useEffect(() => {
		getAllData()
			.then(([getSocialMediaLink, getPortfolioLink]) => {
				setSocialMediaLink(getSocialMediaLink)
				setPortfolio(getPortfolioLink)
				setLoading(false)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<ApiContext.Provider value={{ socialMediaLink, portfolio, loading }}>
			{children}
		</ApiContext.Provider>
	)
}

// Export as global
export const useGlobalContextApi = () => useContext(ApiContext)
export { ApiContext, ApiContextProvider }``
