"use client";

import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

//reducer function

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.value,
      };
    case "email":
      return {
        ...state,
        email: action.value,
      };
    case "phone":
      return {
        ...state,
        phone: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({
      type: e.target.name,
      value: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
