import React, { ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

type SignUpProps = {
  toLogin: (state: boolean) => void;
};
const SignUp = ({ toLogin }: SignUpProps) => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [formData, setFormData] = React.useState(initialState);

  const onChangeHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);

    const res = await fetch(`/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.status === "success") {
      toast.success("SignUp Successful , Signin Again");
      toLogin(true);
      return;
    }
    toast.error(data.message);
  };

  return (
    <>
      {/* <Toaster /> */}
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
          onChange={onChangeHandler}
        />
        <input
          type="email"
          placeholder="Your Email "
          className="input input-bordered w-full max-w-xs"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="Your Password"
          className="input input-bordered w-full max-w-xs"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input input-bordered w-full max-w-xs"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={onChangeHandler}
        />
        <button className="btn btn-primary btn-sm"> SignUp With Email</button>
      </form>
    </>
  );
};

export default SignUp;
