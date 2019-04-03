import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
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
  handleError = err => {
	console.error(err)
	  this.setState({
		  result: 'Erro durante identificação do dispositivo.'
	  })	
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default QrCodeReader
 