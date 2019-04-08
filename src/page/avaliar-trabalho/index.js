import React from 'react'
// import { makeStyles } from '@material-ui/styles'
import { QrCodeReader } from 'components'
import Notifier, { openSnackbar } from 'components/Notifier';
import { useTitle } from 'utils'

// const useStyles = makeStyles(theme => ({
// 	container: {
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 	},
// 	item: {
// 		flexBasis: '90%'
// 	}
// }))

function AvaliarTrabalho() {
	// const classes = useStyles()
	useTitle('Avaliar Trabalho| PSE-2019');

	const handleError = err => {
		console.error(err)
		console.error('Oi erro')
		const result = 'Erro na identificação do dispositivo.'
		openSnackbar({ message: result, variant: 'error'})
	}

	return (
		<div >
			<QrCodeReader
			handleError={handleError}>
			</QrCodeReader>
			<Notifier></Notifier>
		</div>
	)
}

export default AvaliarTrabalho
