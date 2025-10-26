"use client";
import { useState } from "react";
export default function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  // same Reducer
  function sum(a, b) {}

  const dispatch = (state, action) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        setState((prem) => ({
          ...prem,
          [action.name]: action.value,
        }));
        break;

      case "RESET":
        setState({
          name: "",
          email: "",
          phone: "",
          gender: "",
        });
        break;

      default:
        break;
    }
  };

  const onchangeHandle = (e) => {
    dispatchHelper({
      type: "CHANGE_INPUT",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const dispatchHelper = (values) => {
    dispatch(state, values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    dispatchHelper({ type: "RESET" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={state.name}
          onChange={onchangeHandle}
        />

        <input
          type="email"
          placeholder="Email"
          value={state.email}
          name="email"
          onChange={onchangeHandle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={state.phone}
          onChange={onchangeHandle}
        />

        <select name="gender" value={state.gender} onChange={onchangeHandle}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
