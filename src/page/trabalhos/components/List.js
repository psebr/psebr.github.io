import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

import { Card, CardContent, Typography, CardHeader } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Link } from '@material-ui/icons'
import LazyLoad from 'react-lazyload'
import ImageZoom from 'react-medium-image-zoom'
import { GradeOutlined, InsertChartOutlined, AttachmentOutlined } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '0',
    display: 'flex',
    position: 'relative',
    transition: `all 0.2s ease-in-out`,
    height: '100%',
    backgroundColor: (theme.palette.type === 'dark') ? '#333' : '#fff',
  },
  cardMedia: {
    flexShrink: 0,
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: 256
    },
    height: 350,
    transition: `all 0.5s ease-in-out`,
    '&:hover': {
      transform: `scale(1.1)`,
    },
    cursor: 'pointer'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  summary: {
    maxHeight: 190,
    margin: 0,
    overflowY: 'auto',
    textAlign: 'justify'
  },
  content: {
    flex: '1 0 auto',
    paddingTop: '5px',
    // paddingBottom: '1px',
    "&:last-child": {
      paddingBottom: '5px',
    }
  },
  bold: {
    fontWeight: 700,
  },
  textTn: {
    fontSize: '0.8rem',
  },
  cardHeader: {
    fontSize: '0.7rem',
    padding: theme.spacing.unit/2,
    width: '100%',
    color: 'white',
    fontWeight: 600,
    textAlign: 'center',
  },
  smallInfos: {
    display: 'flex',
    fontSize: '0.8rem',
  },
  infosItens: {
    paddingRight: theme.spacing.unit * 4,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit,
  },
  cardLink: {
    textDecoration: 'none',
    color: fade(theme.palette.common.white, 0.55),
    transition: `all 0.3s ease-in`,
    '&:hover': {
      color: fade(theme.palette.common.white, 0.75),
    }
  },
}))

function handleFavoriteClick(params) {
  console.log('Favoritado!')
}

function handleAvaliarClick(params) {
  console.log('Avaliado!')
}

function handleVisualizarClick(params) {
  console.log('Visualizando!')
}

const backGroundColorsArea = {
  'controle e instrumentação de processos': 'darkred',
  'integração': 'orange',
  'modelagem e simulação de processos': 'darkgreen',
  'aplicações industriais de ferramentas de pse': 'blue',
  'detecção e diagnóstico de falhas': '#A52A2A',
  'síntese e projeto de processos': '	#800000',
  'integração e intensificação de processos': 'darkgrey',
  // 'modelagem molecular e projeto de produto': 'brown',
  'tratamento de dados e aprendizado de máquina': 'black',
  'otimização de processos': '#3cb371',
  'modelagem molecular e projeto de produto': '#2f4f4f',
  'planejamento e programação da produção': '#808000',
}

/**
 *
 * @type {{docResource: String, docTitle: String, imgTitle: String, ratingCount: String, ratingValue: String, summaryText: String}}
 */
// List.propTypes = {
//   ID: PropTypes.string.isRequired,
//   AUTHOR: PropTypes.string.isRequired,
//   TITLE: PropTypes.string.isRequired,
//   AXIS: PropTypes.string.isRequired,
//   TYPE: PropTypes.string.isRequired,
//   LOCATION: PropTypes.string.isRequired,
//   docResource: PropTypes.string.isRequired,
//   docTitle: PropTypes.string.isRequired,
//   imgTitle: PropTypes.string.isRequired,
//   ratingCount: PropTypes.string.isRequired,
//   ratingValue: PropTypes.string.isRequired,
//   summaryText: PropTypes.string.isRequired
// }

function List({ ID, TITLE, AUTHOR, TYPE, LOCATION, DATE, ABSLINK, FORMLINK, AXIS, PAPERLINK }) {
  const theme = useTheme()
  const classes = useStyles()

  console.log('List', ID)
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <section className={classes.cardHeader} style={{ backgroundColor: backGroundColorsArea[AXIS.toLowerCase()]}}>
          {AXIS}
        </section>

        <CardContent className={classes.content}>
          <section style={{ display: 'flex'}}>
          <div style={{flexBasis: '90%'}}>
            <Typography variant="caption" className={classes.bold}>
                {TITLE}
            </Typography>
            <Typography variant="body2">
              {AUTHOR}
            </Typography>
            <section className={classes.smallInfos}>
              <Typography variant="caption" color="textSecondary" className={classes.infosItens}>
                ID: {ID}
              </Typography>
              <Typography variant="caption" color="textSecondary" className={classes.infosItens}>
                Tipo: {TYPE}
              </Typography>
            </section>
            <section className={classes.summary}>
              <Typography variant="caption" color="textSecondary" className={classes.infosItens}>
                  Local: {LOCATION}
              </Typography>
            </section>
          </div>
            <div style={{ flexBasis: '10%', display: 'flex', flexDirection: 'column'}}>
              <IconButton tooltip="Favoritar" style={{padding: 2}}
                onClick={handleFavoriteClick}>
                <GradeOutlined></GradeOutlined>
              </IconButton>
              <IconButton tooltip="Avaliar" style={{padding: 2}}
                onClick={handleAvaliarClick}>
                <InsertChartOutlined></InsertChartOutlined>
              </IconButton>
              <IconButton tooltip="Abrir Resumo" style={{padding: 2}}
                href={ABSLINK}
                onClick={handleVisualizarClick}>
                <AttachmentOutlined></AttachmentOutlined>
              </IconButton>
          </div>
        </section>


        </CardContent>
        {/* <div className={classes.controls}>
          <a target="_blank" rel="noopener noreferrer" href={docResource} className={classes.cardLink}>
            <Link/>
          </a>
        </div> */}
      </div>
    </Card>
  )
}

function componentIsEqual(prevProps, nextProps) {
  if (prevProps.ID === nextProps.ID) {
    console.log('equal')
    return true
  }
}

export default React.memo(List, componentIsEqual)
