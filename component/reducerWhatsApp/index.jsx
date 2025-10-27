"use client";

import { useReducer } from "react";

const iniValue = {
  messages: [],
  text: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      if (state.text.trim() === "") return state;

      return {
        ...state,
        messages: [...state.messages, state.text],
        text: "",
      };
    case "SET_TEXT":
      return { ...state, text: action.payload };

    default:
      return state;
  }
}

export default function ReducerWhatsApp() {
  const [state, dispatch] = useReducer(reducer, iniValue);
  const handleOnchange = (e) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_MESSAGE" });
    console.log(state);
  };
  return (
    <div>
      <h2>WhatsApp messaging chats</h2>

      <div className="border-1 w-150 h-100">
        {state.messages.map((meg, index) => (
          <div key={index}>{meg}</div>
        ))}
      </div>

      <div className="border-1 w-70">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a message....."
            value={state.text}
            onChange={handleOnchange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
