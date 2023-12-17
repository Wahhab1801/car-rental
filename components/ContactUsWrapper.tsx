import React from "react";
import ContactUsForm from "./ContactUsForm";

type Props = {};

const ContactUsWrapper = (props: Props) => {
  return (
    <section className="bg-white mt-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            Contact Us
          </h2>
          {/* <p className="font-light text-gray-800 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p> */}
        </div>
        <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
          <div className="col-span-2 mb-8 lg:mb-0">
            <ContactUsForm />
          </div>
          <div className="grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
            {/* ... Other content remains the same */}
            <div>
              <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 ">Call us:</p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Call us to speak to a member of our team. We are always happy to
                help.
              </p>
              <p className="font-semibold text-primary-600 dark:text-primary-500">
                0 (203) 4889498
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg lg:h-16 lg:w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 ">Email:</p>
              <p className="text-gray-500 ">
                Email us to speak to a member of our team. We are always happy
                to help.
              </p>
              <a
                href="mailto:motechmotors@outlook.com"
                className="font-semibold text-primary-600"
              >
                motechmotors@outlook.com
              </a>
            </div>
            <div>
              <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg lg:h-16 lg:w-16">
                <svg
                  className="w-6 h-6 text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"
                  />
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 ">
                Dealership Hours:
              </p>
              <p className="mb-3 text-gray-500">
                Mon - Fri: 8am - 5pm
                <br />
                Saturday: 8am - 1pm
                <br />
                Sunday: CLOSED
                <br />
                <span className="text-primary-700"> (Viewings strictly by appointment only)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsWrapper;
