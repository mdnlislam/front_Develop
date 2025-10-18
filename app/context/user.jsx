"use client";

import { createContext, useContext, useState } from "react";
import Card from "@/component/product/card";
const UserContext = createContext();

export default function Store({ children }) {
  const [product] = useState({
    id: 26,
    name: "i-phone",
    model: "x-altra",
  });

  const [design] = useState(<Card />);
  const [count, setCount] = useState(0);
  return (
    <UserContext.Provider value={{ product, design, count, setCount }}>
      {children}
    </UserContext.Provider>
  );
}

export const useDesign = () => useContext(UserContext);
