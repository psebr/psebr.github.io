import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import realizacaoImg from '../../assets/realizacao.png'
import partrociniosImg from '../../assets/Patrocinios-300x136.png'

import { useTitle } from 'utils'

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
  pdfWrapper: {
    width: '95%',
    height: '96vh',
  },
  button: {
    margin: theme.spacing.unit,
  },
}))

function Inicial() {
  const classes = useStyles()
  useTitle('Informações | PSE-2019');

  return (
    <div className={classes.container}>
      <h4>
        Encontrou algum erro ?
			</h4>
      <Button variant="contained" className={classes.button}
        target='_blank'
        rel="noreferrer"
        href="mailto: caiocuritiba@gmail.com?subject=Reportagem de Erro Web-App PSE2019"
      >Avise-nos!</Button>

      <h5>
        Realização:
      </h5>

      <img src={realizacaoImg} alt="Realizacao" width="200px"/>

      <h5>
        Patrocínios:
      </h5>

      <img src={partrociniosImg} alt="Realizacao" width="200px"/>

    </div>
  )
}

export default Inicial
