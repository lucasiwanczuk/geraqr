// components/QrCodeGenerator.js
'use client';

import { useState } from 'react';
import ReactQRCode from 'react-qr-code';

const QrCodeGenerator = () => {
  const [text, setText] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');

  // Função para gerar QR Code
  const handleGenerateQRCode = () => {
    setQrCodeValue(text);
  };

  return (
    <div>
      <label htmlFor="text-input">Texto para gerar QR Code:</label>
      <input
        type="text"
        id="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo..."
        className="border p-2 m-2"
      />
      <button
        onClick={handleGenerateQRCode}
        className="bg-green-500 text-white p-2 rounded"
      >
        Gerar QR Code
      </button>

      {qrCodeValue && (
        <div className="mt-4">
          <ReactQRCode value={qrCodeValue} size={256} />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;
