"use client";
import { useUserContext } from "../context/user";
export default function User() {
  const { SavedPage } = useUserContext();
  return (
    <div>
      <h1>alhamdulillah</h1>
      {SavedPage}
    </div>
  );
}
