/** @format */

import React, { useState } from "react";
import QRCode from "qrcode";

const QrCode = () => {
  const [value, setValue] = useState("Testing");
  const [url, setUrl] = useState("");

  const generateQr = async () => {
    const res = await QRCode.toDataURL(value);
    setUrl(res);
  };

  return (
    <div className="w-64 mx-auto mb-20">
      <input
        className="mt-10"
        placeholder="Enter QR value"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />

      {url ? (
        <>
          <img height={180} width={180} src={url} alt="" />
          <a href={url} download>
            {" "}
            Download
          </a>
        </>
      ) : null}
      <button onClick={generateQr}>{url ? "Generate new" : "Generate"}</button>
    </div>
  );
};

export default QrCode;
