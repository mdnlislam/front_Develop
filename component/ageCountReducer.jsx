"use client";

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incress": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }

    case "change_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }

    default:
      return state; //
  }
}

const initialState = { name: "Taylor", age: 42 };

export default function AgeCount() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incress" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "change_name",
      nextName: e.target.value,
    });
  }

  return (
    <div>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increase age</button>
      <p>
        Name: {state.name} <br />
        Age: {state.age}
      </p>
    </div>
  );
}
