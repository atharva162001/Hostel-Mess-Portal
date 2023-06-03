import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ text }) => {
    return (
      <div>
        <QRCode value={text} />
      </div>
    );
  };
  
  export default QRCodeComponent;
  