"use client";

import React, { SyntheticEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import useToast from "./useToast";
import { CustomButton } from ".";
import {
  emailJsPublicKey,
  emailJsServiceId,
  emailJsTemplateId,
} from "@/constants";
type Props = {};

const ContactUsForm = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const { showToast } = useToast();
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    confirm(JSON.stringify(values));

    emailjs
      .sendForm(
        emailJsServiceId || "",
        emailJsTemplateId || "",
        e.target as HTMLFormElement,
        emailJsPublicKey
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        showToast(
          "Your request has been recieved. You will be contacted shortly.",
          "success",
          {
            duration: 3000,
            position: "top-center",
          }
        );
        form?.reset()
        // form.current?.reset();
        // You can reset the form or display a success message here.
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        showToast("Sorry, something went wrong. Please try again.", "error", {
          duration: 3000,
          position: "top-center",
        });
        // Handle the error or display an error message.
      });
  }
  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      // name="contact-us"
      className="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2"
    >
      <div>
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Robert"
          required
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Green"
          required
        />
      </div>
      <div>
        <label
          htmlFor="customerEmail"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          id="customerEmail"
          name="customerEmail"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="phoneNumber"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Phone Number
        </label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="+44 345 6789"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Subject"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <CustomButton
        title="Send message"
        btnType="submit"
        handleClick={() => {}}
        containerStyles="bg-primary py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
      />
    </form>
  );
};

export default ContactUsForm;
