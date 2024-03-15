import React from "react";

const Model = ({ setShowModel }) => {
  return (
    <div className="mx-auto mix-h-[600px] w-1/2 my-2 border border-[#141414] rounded-lg p-16">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl">How to get App Password</h2>
          <button
            className="text-1xl text-[#343434]"
            onClick={() => setShowModel(false)}
          >
            X
          </button>
        </div>
        <div className="px-14 my-2">
          <ol className="list-decimal pl-6 text-gray-400 font-light">
            <li className="mb-2">
              Make sure you have two-step verification enabled on your Gmail
              account. If not, enable it in your Google Account settings.
            </li>
            <li className="mb-2">
              Visit the Google Account management page:
              <a
                href="https://myaccount.google.com/"
                target="_blank"
                className="text-blue-500 underline"
              >
                https://myaccount.google.com/
              </a>
              <br />
              or
              <a
                href="https://myaccount.google.com/security?hl=en"
                target="_blank"
                className="text-blue-500 underline"
              >
                https://myaccount.google.com/security?hl=en
              </a>
            </li>
            <li className="mb-2">Sign in to your Google Account.</li>
            <li className="mb-2">Go to "Security" in the left sidebar.</li>
            <li className="mb-2">
              Scroll down to "2-step verification" and click on it.
            </li>
            <li className="mb-2">
              Scroll further down to "App passwords" and click on it. You may
              need to re-enter your password for security.
            </li>
            <li className="mb-2">Enter a custom name for the App Password.</li>
            <li className="mb-2">
              Click "Create" to generate a unique 16-character App Password.
            </li>
            <li className="mb-2">
              Save the generated App Password securely as it won't be visible
              again.
            </li>
            <li className="mb-2">
              Replace your regular Gmail account password in your application
              code with this App Password.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Model;
