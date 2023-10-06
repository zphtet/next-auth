import React, { FormEvent } from "react";
import { signIn } from "next-auth/react";
const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [formData, setFormData] = React.useState(initialState);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      username: formData.name || "zph",
      password: formData.password || "zphpass123",
      redirect: true,
      callbackUrl: "/me",
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-3  border-green-700"
    >
      <input
        type="text"
        placeholder="Your Name "
        name="name"
        className="input input-bordered w-full max-w-xs"
        value={formData.name}
      />
      <input
        type="email"
        placeholder="Your Email "
        className="input input-bordered w-full max-w-xs"
        name="email"
        value={formData.email}
      />
      <input
        type="password"
        placeholder="Your Password"
        className="input input-bordered w-full max-w-xs"
        name="password"
        value={formData.password}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="input input-bordered w-full max-w-xs"
        name="confirmpassword"
        value={formData.confirmpassword}
      />
      <button className="btn btn-primary btn-sm"> SignUp With Email</button>
    </form>
  );
};

export default SignUp;
