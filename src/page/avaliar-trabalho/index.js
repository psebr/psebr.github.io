import React, { lazy, Suspense } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Loading, QrCodeReader } from 'components'
import { useTitle } from 'utils'

// const Components = [lazy(() => import('./components/Bar')), lazy(() => import('./components/Map'))]

const useStyles = makeStyles(theme => ({
	card: {
		position: 'relative',
		height: 512,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: (theme.palette.type === 'dark') ? '#333' : '#fff',
	},
}))

function Inicial() {
	const classes = useStyles()
	useTitle('Página Inicial | PSE-2019');

	return (
		<div className="">
			<QrCodeReader></QrCodeReader>
		</div>
	)
}

export default Inicial