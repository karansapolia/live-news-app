"use client";

import { useState } from "react";

/**
 * Create a component that renders a "Summarize News" button.
 * When this button is clicked, the component displays the summary of all the articles
 */

type Summary = {
  summary: string;
};

function SummarizeNews({ summary }: Summary) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 p-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            role="link"
          >
            News Summary
          </a>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            role="button"
          >
            ⚡️ ChatGPT
          </a>
        </div>

        <div className="mt-2">
          <p className="mt-2 text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {click ? summary : "Click the button to summarize the news!"}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          {click ? null : (
            <button
              className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              onClick={handleClick}
            >
              Summarize News
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SummarizeNews;
