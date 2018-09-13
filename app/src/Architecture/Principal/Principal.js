import React, { Component } from 'react';
import Camera from 'react-camera';
import QrCodeScanner from '@sensorfactdev/qr-code-scanner';

export default class Principal extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
  }
  handleScanResult = result => {
  console.log(result);
  // {
  //   "result": "RESULT STRING VALUE",
  //   "points": [
  //     {
  //       "x": 171,
  //       "y": 445,
  //       "count": 2,
  //       "estimatedModuleSize": 3.857142857142857
  //     },
  //     // .... more points
  //   ]
  // }
}

  render() {
    return (


      <div style={style.container}>
      <div>
   <QrCodeScanner
     onQrCodeScanned={this.handleScanResult}
     width={window.innerWidth}
     height={window.innerHeight}
     showAimAssist // Defaults to true, disable to remove the aim assist
   />
 </div>
        <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};
