"use client";

import { useState } from "react";

export default function whatsAppPage() {
  const [message, setMassge] = useState([]);
  const [text, setText] = useState("");

  console.log(text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    setMassge([...message, text]);
    setText("");
    console.log(message);
  };

  return (
    <div className="border-2">
      <h2>Alhamdulillah</h2>
      <div className="border-1 w-150 h-100">
        {message.map((mess, index) => (
          <div key={index}>{mess}</div>
        ))}
      </div>

      <div className="border-2 w-70">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Plz.Text Now"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
