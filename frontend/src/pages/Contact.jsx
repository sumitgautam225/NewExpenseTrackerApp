import React from "react";

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg border border-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4"
          />
        </svg>
        Contact & Support
      </h1>
      <p className="mb-6 text-gray-600">
        If you have any questions or need support, please contact us:
      </p>
      <div className="mb-6">
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4"
              />
            </svg>
            <span>
              Email:{" "}
              <a
                href="mailto:feellofi4@gamil.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                feellofi4@gamil.com
              </a>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L21 13M7 13l1.5-6h7l1.5 6"
              />
            </svg>
            <span>
              Phone:{" "}
              <a
                href="tel:+12345678901"
                className="text-blue-600 underline hover:text-blue-800"
              >
                +91 75xxx xxxxx
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg text-blue-700 text-center">
        We are here to help you!
      </div>
    </div>
  );
};

export default Contact;
