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

    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((_, i) => i !== action.payload),
      };
    case "EDIT_MESSAGE":
      return {
        ...state,
        text: state.messages[action.payload],
        editIndex: action.payload,
      };

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

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_MESSAGE", payload: index });
  };
  const handleEdit = (index) => {
    dispatch({ type: "EDIT_MESSAGE", payload: index });
  };
  return (
    <div>
      <h2>WhatsApp messaging chats</h2>

      <div className="border-1 w-150 h-100">
        {state.messages.map((meg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`group relative px-3 py-2 rounded-2xl max-w-xs ${
                index % 2 === 0
                  ? "bg-white text-black"
                  : "bg-green-500 text-white"
              }`}
            >
              {meg}
              <button
                onClick={() => handleDelete(index)}
                className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                ✕
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="absolute -top-2 left-[-25px] text-xs bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                ✎
              </button>
            </div>
          </div>
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
