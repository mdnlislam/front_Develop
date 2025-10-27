"use client";

import { useReducer } from "react";
import { useRouter } from "next/navigation";

const initialState = { isAuthenticated: false }; // default false

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { isAuthenticated: true };
    case "logout":
      return { isAuthenticated: false };
    default:
      return state;
  }
}

export default function Navber() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const item = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "WhatsApp", href: "/whatsApp" },
    { label: "Info", href: "/info" },
    // { label: "LogIn", href: "/login" },
  ];

  const handleClick = (href) => {
    if (!state.isAuthenticated) {
      router.push("/login");
    } else {
      router.push(href);
    }
  };

  const handleLogin = () => {
    dispatch({ type: "login" });
    router.push("/");
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
    router.push("/login");
  };
  return (
    <div>
      <div className="bg-amber-200 flex gap-20 p-4">
        {item.map((link, i) => (
          <button
            key={i}
            onClick={() => handleClick(link.href)}
            className="text-black"
          >
            {link.label}
          </button>
        ))}

        {state.isAuthenticated ? (
          <button onClick={handleLogout} className="text-red-600 ml-10">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="text-green-600 ml-10">
            Login
          </button>
        )}
      </div>
    </div>
  );
}
