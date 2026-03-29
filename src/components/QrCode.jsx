import { useState } from "react"


// export const QrCode = () => {

//   const [img, setImg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [qrData, setQrData] = useState("00-000-00000-000");
//   const [qrSize, setQrSize] = useState("150");


//   async function generateQR(){
//     setLoading(true);
//     try{
//       const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
//       setImg(url);
//     }catch (error){
//       console.error("Error generating QR Code", error);
//     }finally {
//       setLoading(false)
//     }
//   }

//   function downloadQR(){
//     fetch(img)
//     .then ((response)=> response.blob())
//     .then ((blob)=>{
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = `${qrData}.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     })
//   }


//   return (
//     <div className="app-container">
//         <h1>QR CODE GENERATOR</h1>
//         {loading && <p>Please wait...</p>}
//         {img && <img src={img} className="qr-code-image"></img>}
        
//         <div>
//             <label htmlFor="dataInput" className="input-label">Data for QR Code:</label>
//             <input type="text" value={qrData} id="dataInput" placeholder="Enter data for QR Code" onChange={(e)=>setQrData(e.target.value)} />
//             <label htmlFor="sizeInput" className="input-label">Image Size (e.g., 150)</label>
//             <input type="text" value={qrSize} id="sizeInput" placeholder="Enter Image size" onChange={(e)=>setQrSize(e.target.value)}/>
//             <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
//             <button className="download-button" onClick={downloadQR}>Download QR Code</button>
//         </div>
//         <p className="footer">Designed By <a href="#">Preetha Kumar</a></p>
//     </div>
//   )
// }



export const QrCode = () => {
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const mask = "XX-XXX-XXXXX-XXX";

  // 🔹 format 2-3-5-3
  function formatValue(val) {
    val = val.replace(/\D/g, "").substring(0, 13);

    let result = "";

    if (val.length > 0) result += val.substring(0, 2);
    if (val.length > 2) result += "-" + val.substring(2, 5);
    if (val.length > 5) result += "-" + val.substring(5, 10);
    if (val.length > 10) result += "-" + val.substring(10, 13);

    return result;
  }

  function handleChange(e) {
    const raw = e.target.value;
    setValue(formatValue(raw));
  }

  // 🔹 watermark display
  function getDisplay() {
    let clean = value.replace(/-/g, "");
    let result = "";
    let index = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === "X") {
        if (index < clean.length) {
          result += clean[index];
          index++;
        } else {
          result += "X";
        }
      } else {
        result += "-";
      }
    }

    return result;
  }

  // 🔹 build URL
  function buildURL(val) {
    if (val.replace(/-/g, "").length !== 13) return "";

    const parts = val.split("-");

    return `https://erp.chennaicorporation.gov.in/ptis/citizensearch/searchPropByBillNumber!search.action?collectionType=online&propertyId=${parts[2]}&search1=Search&subNo=${parts[3]}&wardNo=${parts[1]}&zoneNo=${parts[0]}`;
  }

  // 🔹 generate QR
  function generateQR() {
    const fullURL = buildURL(value);

    if (!fullURL) {
      alert("Please Enter the Property Tax Bill number!");
      return;
    }

    setLoading(true);

    try {
      const qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(fullURL)}`;
      setImg(qr);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // 🔹 download QR
  function downloadQR() {
    if (!img) return;

    fetch(img)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${value}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>

      {loading && <p>Please wait...</p>}

      {img && <img src={img} alt="QR" className="qr-code-image" />}

      <label>Enter Property Number</label>

      <div className="input-wrapper">
        {/* watermark */}
        <div className="mask">{getDisplay()}</div>

        {/* real input */}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="real-input"
        />
      </div>

      <button onClick={generateQR} disabled={loading}>
        Generate QR Code
      </button>

      <button onClick={downloadQR}>
        Download QR Code
      </button>

      <p className="footer">
        Designed By <a href="#">Zone-XI</a>
      </p>
    </div>
  );
};