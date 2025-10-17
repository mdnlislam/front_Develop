"use client";
import { useUserContext } from "@/app/context/user";
import { useEffect } from "react";
export default function Card() {
  const { setSavedpage } = useUserContext();
  useEffect(() => {
    setSavedpage(<userContent />);
    return <userContent />;
  });
  return (
    <div className="border-2">
      <div>
        <h2>alhamdulillah</h2>
        <h2>bismillah</h2>
      </div>
    </div>
  );
}
