import React, { lazy, Suspense } from 'react'
import { Grid, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Loading } from 'components'
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
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}
}))

function Inicial() {
	const classes = useStyles()
	useTitle('Informações | PSE-2019');

	return (
		<div className={classes.container}>
			<h1>
				Informações sobre o PSE 2019
			</h1>
			<Typography component="p">
					Fique por dentro
			</Typography>
			<Typography component="p">
				Acesse o Site do PSE: http://www.ufrgs.br/psebr/
			</Typography>
		</div>
	)
}

export default Inicial