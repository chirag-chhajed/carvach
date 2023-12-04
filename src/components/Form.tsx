"use client";

import { useState } from "react";

type AuthFormProps = {
  typeOf: string;
};
const SignInForm = ({ typeOf }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("%c📧 Email:", "font-size: 16px; font-weight: bold;", email);
    console.log(
      "%c🗝️ Password:",
      "font-size: 16px; font-weight: bold;",
      password
    );
    console.log(
      "%cPsst. Passwords are not supposed to be shared 🤫",
      "color: #ffcc00; font-style: italic;"
    );
    setTimeout(() => {
      setEmail("");
      setPassword("");
    }, 3000);
  };
  return (
    <div className="flex flex-col justify-center flex-1 h-screen px-6 py-12 lg:px-8 bg-zinc-100 text-zinc-900">
      <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center ">
        {typeOf} to your account
      </h2>
      <div className="p-6 mt-10 rounded-md bg-zinc-400 sm:mx-auto sm:w-full sm:max-w-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] shadow-zinc-900">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-white bg-zinc-700 focus:ring-2 focus:ring-zinc-900 sm:text-sm sm:leading-6"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                placeholder="Enter you password"
                onChange={(e) => setPassword(e.target.value)}
                title="Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter."
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                className="block w-full rounded-md pl-2 border-0 py-1.5 text-white bg-zinc-700 focus:ring-2 focus:ring-zinc-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              {typeOf}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
