import React, { ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
const Login = () => {
  const initialState = {
    email: "",
    password: "",
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

    // console.log("From signin", formData);
    const data = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      callbackUrl: "/me",
      redirect: false,
    });
    console.log("from signin", data);
    if (data!.status === 401) {
      toast.error("User Not Exist");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-3  border-green-700"
    >
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

      <button className="btn btn-primary btn-sm"> Login With Email</button>
    </form>
  );
};

export default Login;
