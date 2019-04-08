import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Card, CardContent, Typography, Tooltip } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';

import { Grade, InsertChartOutlined, AttachmentOutlined } from '@material-ui/icons'

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
    padding: theme.spacing.unit / 2,
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
}))

function handleAvaliarClick(params) {
  console.log('Avaliando!')
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

function List({ ID, TITLE, AUTHOR, TYPE, LOCATION,
  DATE, ABSLINK, FORMLINK, AXIS, PAPERLINK,
  favorited, handleFavoriteButton }) {
  const classes = useStyles()
  const work = {
    ID, TITLE, AUTHOR, TYPE, LOCATION,
    DATE, ABSLINK, FORMLINK, AXIS, PAPERLINK,
    favorited
  }
  // console.log('List', ID)
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <section className={classes.cardHeader} style={{ backgroundColor: backGroundColorsArea[AXIS.toLowerCase()] }}>
          {AXIS}
        </section>

        <CardContent className={classes.content}>
          <section style={{ display: 'flex' }}>
            <div style={{ flexBasis: '90%' }}>
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
            <div style={{ flexBasis: '10%', display: 'flex', flexDirection: 'column' }}>
              <Tooltip title="Favoritar" aria-label="Favoritar">
                <IconButton tooltip="Favoritar" style={{ padding: 2 }}
                  onClick={(e) => handleFavoriteButton(e, work)}>
                  <Grade
                    color={favorited === true ? 'secondary' : 'inherit'}
                  >
                  </Grade>
                </IconButton>
              </Tooltip>
              <Tooltip title="Avaliar" aria-label="Avaliar">
                <IconButton tooltip="Avaliar" style={{ padding: 2 }}
                  target="_blank"
                  href={FORMLINK}
                  onClick={handleAvaliarClick}>
                  <InsertChartOutlined></InsertChartOutlined>
                </IconButton>
              </Tooltip>
              <Tooltip title="Abrir Resumo" aria-label="Abrir Resumo">
                <IconButton tooltip="Abrir Resumo" style={{ padding: 2 }}
                  target="_blank"
                  rel="noreferrer"
                  href={ABSLINK}
                  onClick={handleVisualizarClick}>
                  <AttachmentOutlined></AttachmentOutlined>
                </IconButton>
              </Tooltip>
            </div>
          </section>


        </CardContent>
      </div>
    </Card>
  )
}

function componentIsEqual(prevProps, nextProps) {
  if (prevProps.ID === nextProps.ID &&
    prevProps.favorited === nextProps.favorited
  ) {
    return true
  }
  return false
}

export default React.memo(List, componentIsEqual)
// export default List
