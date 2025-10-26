"use client";
import { useState } from "react";

export default function Count() {
  const [cont, setCont] = useState(0);

  return (
    <div>
      <p>{cont}</p>

      <h1 onClick={() => setCont(cont + 1)}>incre</h1>
      <h2 onClick={() => setCont(cont - 1)}>Des</h2>
    </div>
  );
}
