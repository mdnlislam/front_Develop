"use client";

import { useState } from "react";
import { useDesign } from "@/app/context/user";
export default function Count() {
  const { count, setCount } = useDesign();

  const increas = () => {
    if (count < 10) setCount(count + 1);
  };

  const decreace = () => {
    if (count >= 0) setCount(count - 1);
  };

  return (
    <div>
      <div>
        <h2 onClick={increas}>Up</h2>
        <h2 className="border-2 w-30 h-10">{count}</h2>
        <h2 onClick={decreace}>Doun</h2>
      </div>
    </div>
  );
}
