import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

const QrcodeGenerator = () => {
  const [qrValue, setQrValue] = useState("");
  const [input, setInput] = useState("");

  const generateQrCode = () => {
    setQrValue(input);
    setInput("");
    alert(`QR Code has generated for - ${input}`)
  };

  return (
    <div className="qr-code-container">
      <h1>QR-Code Generator</h1>
      <QRCode className="qr-code" value={qrValue} />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={generateQrCode}
        disabled={input && input.trim() ? false : true}
      >
        Generate QR Code
      </button>
    </div>
  );
};

export default QrcodeGenerator;
