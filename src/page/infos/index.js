import React, { lazy, Suspense } from 'react'
import { Grid, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

// import PDFViewer from '../trabalhos/components/PDFViewer';
// import { Document, Page, setOptions  } from "react-pdf";
// import { Document } from 'react-pdf/dist/entry.webpack';
// import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

// import { Document, Page } from 'react-pdf/dist/entry.webpack'
import { Loading } from 'components'
import { useTitle } from 'utils'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

      {/* <div style={{ width: 600 }}>
        <Document
          file="https://goo.gl/DLsRGQ"
          // onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={1} width={600} />
        </Document>
      </div> */}
      {/* <a href="https://goo.gl/DLsRGQ">LINK!</a> */}

      {/* IF DECIDED TO OPEN DRIVE INSIDE APP:
        - GET FULL LINK
        - USE /preview instead of /view
      */}
      <iframe src="https://drive.google.com/file/d/1QmKMcZ4J_CmNRvJZtzCEJpQLU4pkE-Ho/preview" title="title">
        Presss me: <a href="https://www.youtube.com/embed/8WkuChVeL0s">Download PDF</a>
      </iframe>
    </div>
  )
}

export default Inicial
