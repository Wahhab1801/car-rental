"use client";

import React, { SyntheticEvent, useRef } from "react";
import useToast from "./useToast";
import { CustomButton } from ".";
import axios from "axios";
import { baseUrl } from "@/constants";
import { useRouter } from "next/navigation";
type Props = {};

type ErrorResponse = {
  error: string;
  message: string;
  statusCode: number;
};

const LoginForm = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const { showToast } = useToast();
  const router = useRouter();
  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await axios.post(`${baseUrl}/users/login`, values);

      if (response.status >= 200 && response.status < 300) {
        const newAuthToken = response.data.accessToken;
        localStorage.setItem("authToken", newAuthToken);
        router.push("new-car");
      }
    } catch (error: any) {
      const response = error?.response?.data;
      const { statusCode, message } = (response || {}) as ErrorResponse;
      if (statusCode === 401) {
        showToast(message, "error");
      } else {
        showToast(error.message, "error", {
          duration: 15,
        });
      }
    }
  }
  return (
    <div className="mt-20 py-10 px-10">
      <form
        ref={form}
        onSubmit={handleSubmit}
        // name="contact-us"
        className="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-1"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Robert"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Green"
            required
          />
        </div>
        <CustomButton
          title="Login"
          btnType="submit"
          handleClick={() => {}}
          containerStyles="bg-primary py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        />
      </form>
    </div>
  );
};

export default LoginForm;
