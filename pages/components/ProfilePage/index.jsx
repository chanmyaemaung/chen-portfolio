import { Container, Stack } from '@mui/material'
import Image from 'next/image'
import SocialIcons from './SocialIcons'
import EducationWorks from './EducationWorks'
import Summary from './Summary'
import Information from './Information'

// Static Image
const imgUrl = '/assets/images/myLogo.png'

const ProfilePage = (props) => {
	// Destructuring Props
	const {
		socialMediaLink,
		portfolio: { title, image, tags, about, company, education },
	} = props

	return (
		<Container maxWidth='sm'>
			<Stack sx={styles.root}>
				{/* Logo Image */}
				<Stack sx={{ position: 'relative', top: '-100px' }} mb={-15}>
					<Image
						className='myLogo'
						src={image ?? imgUrl}
						width={120}
						height={120}
						layout='intrinsic'
						objectFit='cover'
						priority
						quality={100}
						alt='My Logo'
					/>
				</Stack>
				{/* Information */}
				<Information title={title} tags={tags} />
				{/* Summery Description */}
				<Summary about={about} />
				{/* Work and Education */}
				<EducationWorks company={company} education={education} />
				{/* Social Media Icons */}
				<SocialIcons {...socialMediaLink} />
			</Stack>
		</Container>
	)
}

// styles for profile page
const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		mt: 20,
		p: 5,
		borderRadius: '7px',
		boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.2)',
		textAlign: 'center',
	},
}

export default ProfilePage
