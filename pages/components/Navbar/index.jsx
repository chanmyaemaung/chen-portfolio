import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import WorkspacesIcon from '@mui/icons-material/Workspaces'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { Tooltip } from '@mui/material'
import { useRouter } from 'next/router'

function HideOnScroll(props) {
	const { children, window } = props
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	})

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
}

export default function MyAppBar(props) {
	const { push } = useRouter()

	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar color='inherit' elevation={3}>
					<Toolbar variant='dense'>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Box sx={{ flexGrow: 1 }}></Box>
						<Tooltip
							title='See all my projects'
							arrow
							onClick={() => push('/portfolio')}
						>
							<Button color='inherit' startIcon={<WorkspacesIcon />}>
								Projects
							</Button>
						</Tooltip>
						<Tooltip title='Download my resume' arrow>
							<Button color='inherit' startIcon={<CloudDownloadIcon />}>
								Resume
							</Button>
						</Tooltip>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</React.Fragment>
	)
}
