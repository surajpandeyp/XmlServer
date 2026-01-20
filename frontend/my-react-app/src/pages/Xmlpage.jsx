import { useState } from "react";
import "./Xmlpage.css";

function Xmlpage() {
  const [age, setAge] = useState("");
  const [response, setResponse] = useState("");

  const sendAge = async () => {
    const xmlData = `<?xml version="1.0"?>
<user>
  <age>${age}</age>
</user>`;

    try {
      const res = await fetch("http://localhost:3000/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: xmlData
      });

      const text = await res.text();
      setResponse(text);
    } catch (err) {
      setResponse("Error sending request",err);
    }
  };

  return (
    <div className="xml-page">
      <div className="xml-card">
        <h2>Patient Age Verification</h2>

        <p>
          This page simulates a hospital system where patient data is verified
          before proceeding with medical records.
        </p>

        <p>
          In real-world applications, such verification helps hospitals ensure
          that patient information exists in their internal systems.
        </p>

        <p>
          <strong>CTF / Security Context:</strong>  
          This form sends data in XML format to the backend.  
          If input validation is weak, it may expose server-side vulnerabilities.
        </p>

        <input
          type="text"
          placeholder="Enter patient age to search"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={sendAge}>Verify Age</button>

        {response && (
          <div className="response-box">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}

export default Xmlpage;
