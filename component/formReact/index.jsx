"use client";
import { useForm } from "react-hook-form";

export default function FormReact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h2>Alhamdulillah</h2>

      <div>
        <form
          className=" flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border-1 w-70"
            type="text"
            placeholder="firstName"
            {...register("firstName", {
              required: "First name is required",

              maxLength: {
                value: 10,
                message: "max 10 characters only",
              },
            })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
          <input
            className="border-1 w-70"
            type="text"
            {...register("lastName", {
              required: "Last name is required",
              maxLength: {
                value: 6,
                message: "max 6 characters only",
              },
            })}
            placeholder="lastName"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}

          <input
            className="border-1 w-70"
            type="number"
            {...register("age", { min: 18, max: 30 })}
            placeholder="Age"
            {...register("age", {
              min: { value: 18, message: "Minimum age is 18" },
              max: { value: 30, message: "Maximum age is 30" },
            })}
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
          <button className="border-1 w-70" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
