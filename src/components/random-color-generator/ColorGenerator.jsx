import { useState } from "react";

const ColorGenerator = () => {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#d9d977');

    const generateRandomIndex = (length) => {
        let randIndex = Math.floor(Math.random() * length);
        return randIndex;
    }

    const handleHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexCode = "#";

        for (let i=0; i<6; i++) {
           let index = generateRandomIndex(hex.length)
            hexCode += hex[index];
        }
        setColor(hexCode);
    }
    const handleRgbColor = () => {
        const r = generateRandomIndex(256);
        const g = generateRandomIndex(256);
        const b = generateRandomIndex(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Random Color Generator</h1>
        <div className="buttons">
          <button onClick={() => setColorType("hex")}>HEX Color</button>
          <button onClick={() => setColorType("rgb")}>RGB Color</button>
          <button
            onClick={colorType === "hex" ? handleHexColor : handleRgbColor}
          >
            Generate Color
          </button>
        </div>
        <div>
          <h4>{`${colorType} : ${color}`}</h4>
        </div>
      </div>
    );
}

export default ColorGenerator;
