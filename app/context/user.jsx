"use client";

import { createContext, useContext, useState } from "react";
const UserContext = createContext();

export default function Store({ children }) {
  const [product] = useState({
    id: 26,
    name: "i-phone",
    model: "x-altra",
  });

  const [count, setCount] = useState(0);
  return (
    <UserContext.Provider value={{ product, count, setCount }}>
      {children}
    </UserContext.Provider>
  );
}

export const useDesign = () => useContext(UserContext);
