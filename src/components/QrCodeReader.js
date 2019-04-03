import React, { Component } from 'react'
import { makeStyles } from '@material-ui/styles'
import QrReader from 'react-qr-reader'
// import classes from '*.module.sass';
 
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
  item: {
    flexBasis: '90%'
  }  
}))

const classesNameContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

class QrCodeReader extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  // handleError = err => {
	// console.error(err)
	//   this.setState({
	// 	  result: 'Erro durante identificação do dispositivo.'
	//   })	
  // }
  render() {
    // const classes = useStyles()
    return (
      <div style={classesNameContainer}>
        <QrReader
          delay={300}
          onError={this.props.handleError}
          onScan={this.handleScan}
          style={{ width: '100%', maxWidth: 400 }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default QrCodeReader
 