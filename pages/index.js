import { useGlobalContextApi } from '@context/apiContext'
import LaunchScreen from './components/LaunchScreen'
import MainLayout from './components/MainLayout'
import MyAppBar from './components/Navbar'
import ProfilePage from './components/ProfilePage'

export default function Home() {
	const { loading } = useGlobalContextApi()

	return (
		<MainLayout>
			{loading ? (
				<LaunchScreen />
			) : (
				<>
					<MyAppBar />
					<ProfilePage />
				</>
			)}
		</MainLayout>
	)
}
