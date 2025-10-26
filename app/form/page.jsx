"use client";

import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);

    setValue({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <form onSubmit={onsubmitHandler}>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={value.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
