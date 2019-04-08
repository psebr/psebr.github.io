import React from 'react'
import { Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import segundaImg from '../../assets/Screenshot_20190408-112234.png'
import tercaImg from '../../assets/Screenshot_20190408-112441.png'
import quartaImg from '../../assets/Screenshot_20190408-112445.png'
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
  title: {
    backgroundColor: '',
    // color: 'black'
    borderRadius: '3px'
  },
  imgProg: {
    width: '100%',
    // maxWidth: ''
  },
  cardDivider: {
    display: 'block',
    height: '1px',
    border: 0,
    borderTop: '1px solid #666',
  },
  gridItem: {
    margin: '10px',
  }
}))

function Inicial() {
  const classes = useStyles()
  useTitle('PSE-2019 | Programação ');

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>
        Programação do Evento
			</h4>

      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item sm={12} md={6} className={classes.gridItem}>
          <img src={segundaImg} alt="Segunda" className={classes.imgProg} />
        </Grid>
        <Grid item sm={12} md={6} className={classes.gridItem}>
        <img src={tercaImg} alt="Terca" className={classes.imgProg} />
        </Grid>
        <Grid item sm={12} md={6} className={classes.gridItem}>
        <img src={quartaImg} alt="Quarta" className={classes.imgProg} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Inicial
