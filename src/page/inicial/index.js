import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import logo from 'assets/cropped-PSEBR2019-e1553045992398.png'
import { useTitle } from 'utils'

// const Components = [lazy(() => import('./components/Bar')), lazy(() => import('./components/Map'))]

const titleColor = '#3f51b5'

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
  },
  title: {
    fontWeight: 700,
    textAlign: 'center',
    textShadow: '1px 1px black',
    color: titleColor,
  },
}))

function Inicial() {
	const classes = useStyles()
	useTitle('PSE-2019 | Página Inicial');

	return (
		<div className={classes.container}>
      <img src={logo} alt="Logo PSE"/>
      <Typography variant="h5" className={classes.title}>
				I Congresso Brasileiro em Engenharia de Sistemas em Processos
			</Typography>
			<h4>
				Consulta e Avaliação de Trabalhos
			</h4>
			<Typography component="p">
					Seja bem-vindo!
			</Typography>
			<Typography component="p">
				Acesse o Site principal do PSE para maiores informações: http://www.ufrgs.br/psebr/
			</Typography>
		</div>
	)
}

export default Inicial
