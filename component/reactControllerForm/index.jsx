"use client";

import { useForm, Controller } from "react-hook-form";

export default function ReactFormController() {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: null,
    },
  });

  const submitHandler = (data) => {
    console.log(data);
    reset();
  };

  // watch value live show

  const firstName = watch("firsNamne");
  const lastName = watch("lastname");
  const email = watch("email");
  const phone = watch("phone");
  const file = watch("file");

  return (
    <div>
      <h2>Alhamdulillah</h2>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-3"
      >
        <Controller
          name="firstName" // ⚡ name ঠিক করা
          control={control}
          defaultValue=""
          rules={{
            required: "First Name is required",
            minLength: { value: 3, message: "Must be at least 3 letters" },
            maxLength: { value: 10, message: "max use 10 letters" },
            pattern: { value: /^[A-Za-z]+$/, message: "only english lettter" },
          }}
          render={({ field }) => (
            <input {...field} placeholder="First Name" className="border p-1" />
          )}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}

        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{
            required: "First Name is required",
            minLength: { value: 3, message: "Must be at least 3 letters" },
            maxLength: { value: 7, message: "max use 10 letters" },
            pattern: { value: /^[A-Za-z]+$/, message: "only english lettter" },
          }}
          render={({ field }) => (
            <input {...field} placeholder="Last Name" className="border p-1" />
          )}
        />
        {errors.lastName && (
          <p className="text-red-300">{errors.lastName.message}</p>
        )}

        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required", // Required field
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple email regex
              message: "Enter a valid email address", // Error message
            },
          }}
          render={({ field }) => (
            <input {...field} placeholder="Email" className="border p-1" />
          )}
        />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}

        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]+$/, // শুধু সংখ্যা
              message: "Only numbers are allowed",
            },
            minLength: { value: 10, message: "Must be 10 digits" },
            maxLength: { value: 10, message: "Must be 10 digits" },
          }}
          render={({ field }) => (
            <input {...field} placeholder="Phone" className="border p-1" />
          )}
        />
        {errors.phone && <p className="text-red-400">{errors.phone.message}</p>}
        <Controller
          name="file"
          type="file"
          control={control}
          defaultValue=""
          rules={{
            required: "File is required",
            validate: (file) => {
              if (!file) return "File is required";

              // Word file types
              const allowedTypes = [
                "application/msword", // .doc
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
              ];

              if (!allowedTypes.includes(file.type)) {
                return "Only Word files (.doc, .docx) are allowed";
              }
              return true;
            },
          }}
          render={({ field: { onChange } }) => (
            <input
              type="file"
              onChange={(e) => onChange(e.target.files[0])}
              className="border-1"
            />
          )}
        />
        {errors.file && <p className="text-red-400">{errors.file.message}</p>}
        <button type="submit">Sumbit</button>
      </form>

      {/* watch  () live preview */}

      <div className="border text-xl">
        <h2>Live Preview:</h2>
        <p>
          <strong>First Name:</strong>
          {firstName}
        </p>
      </div>
    </div>
  );
}
