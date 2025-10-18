"use client";

import { useState } from "react";
import { useDesign } from "@/app/context/user";
export default function Count() {
  const { count, setCount } = useDesign();
  return (
    <div>
      <div>
        <h2 onClick={() => setCount(count + 1)}>Up</h2>
        <h2 className="border-2 w-30 h-10">{count}</h2>
        <h2 onClick={() => setCount(count - 3)}>Doun</h2>
      </div>
    </div>
  );
}
