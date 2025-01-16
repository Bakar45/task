import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [submittedPrompts, setSubmittedPrompts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Helper functions to simulate a backend using localStorage
  const loadPromptsFromLocalStorage = () => {
    const storedPrompts = JSON.parse(localStorage.getItem("prompts")) || [];
    setSubmittedPrompts(storedPrompts);
  };

  const savePromptToLocalStorage = (newPrompt) => {
    const updatedPrompts = [...submittedPrompts, newPrompt];
    localStorage.setItem("prompts", JSON.stringify(updatedPrompts));
    setSubmittedPrompts(updatedPrompts);
  };

  const deletePromptFromLocalStorage = (index) => {
    const updatedPrompts = submittedPrompts.filter((_, i) => i !== index);
    localStorage.setItem("prompts", JSON.stringify(updatedPrompts));
    setSubmittedPrompts(updatedPrompts);
  };

  useEffect(() => {
    loadPromptsFromLocalStorage();
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      savePromptToLocalStorage(prompt);
      setPrompt("");
      toast.success("Prompt added successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: isDarkMode ? "dark" : "light",
      });
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDarkMode ? "dark" : "light",
    });
  };

  const handleDelete = (index) => {
    deletePromptFromLocalStorage(index);
    toast.error("Prompt deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDarkMode ? "dark" : "light",
    });
  };

  return (
    <div
      className={`flex flex-col items-center p-6 min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ToastContainer />
      <div className="absolute right-10 w-full max-w-lg flex justify-end mb-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`py-2 px-4 rounded-lg font-semibold transition-all duration-200 ${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-300 hover:bg-gray-200 text-gray-900"
          }`}
        >
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <h1 className="text-3xl font-extrabold mb-6">Prompt Manager</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex items-center bg-transparent dark:bg-gray-800 rounded-xl shadow-lg"
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white mr-2 text-gray-800"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-200"
        >
          Submit
        </button>
      </form>

      {submittedPrompts.length > 0 && (
        <div className="mt-6 w-full max-w-[700px] dark:bg-gray-800 p-6 rounded-xl">
          {submittedPrompts.map((text, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 last:mb-0 dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 py-2 px-3 rounded-lg font-semibold hover:text-red-600 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="flex-grow mr-4 font-medium text-gray-500 dark:text-white text-lg max-w-[400px] truncate">
                {text}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleCopy(text)}
                  className="bg-purple-500 text-white py-2 px-6 font-semibold text-xl hover:bg-purple-900 transition-all duration-200"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
