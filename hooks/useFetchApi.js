import axios from 'axios'

const baseUrl = process.env.API_URL

// Fetch Social Medial Link Api
export const fetchSocialMediaLink = async () => {
	const { data } = await axios.get(baseUrl + '/social')

	const resData = data[0].acf

	return resData
}

// Fetch Portfolio Api
export const fetchPortfolio = async () => {
	const { data } = await axios.get(baseUrl + '/portfolio')

	const resData = data[0].acf

	return resData
}
