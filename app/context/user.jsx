"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function AppStore({ children }) {
  const [SavedPage, setSavedpage] = useState(null);

  return (
    <UserContext.Provider value={{ SavedPage, setSavedpage }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
