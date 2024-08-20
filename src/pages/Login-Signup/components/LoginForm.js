import React from "react";
import { InputText } from "primereact/inputtext";
import Button2 from "../../../components/Button2";
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form
      onSubmit=""
      className="flex flex-col justify-center items-center w-full p-6 border-gray-200  z-10 "
    >
      <h1 className="text-2xl font-semibold mb-6 text-white lg:text-black">
        Log in
      </h1>
      <div className="flex flex-col gap-2 justify-center items-center mb-6">
        <InputText
          type="email"
          id="email"
          placeholder="Email"
          class="block pl-2.5 pr-28 py-3 w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
        />
        <InputText
          type="password"
          id="password"
          placeholder="Password"
          class="block pl-2.5 pr-20 lg:pr-52 py-3 mb-2 lg:mb-8 w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
        />
        <div className="flex justify-between items-center w-full px-2 mb-2 lg:mb-8">
          <div className="flex justify-center items-center ">
            <Checkbox inputId="RememberMe" />
            <label
              htmlFor="RememberMe"
              className="ml-2 text-white lg:text-black text-sm"
            >
              Remember me
            </label>
          </div>
          <p className="text-white lg:text-black text-sm">Forgot password?</p>
        </div>
        <Button2
          label="Log in"
          color="bg-primary"
          type="submit"
          extraStyle="w-full"
        />
        <Link to="/signUp">
          <p className="text-white lg:hidden mt-2">Don't have an account?</p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
