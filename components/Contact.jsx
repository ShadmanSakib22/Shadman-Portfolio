"use client";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    // Custom validation
    const name = form.name.value;
    if (name.length < 2) {
      setResult("Please enter Name correctly.");
      return;
    }

    const message = form.message.value;
    if (message.length < 10) {
      setResult("Message must be at least 10 characters long.");
      return;
    }

    // Basic HTML5 validation
    if (!form.checkValidity()) {
      setResult("Please enter Email correctly.");
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className="w-full pt-[5rem] pb-[2.5rem] bg-gray-50 dark:bg-gray-900 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      id="contact"
    >
      <h1 className="text-indigo-950 dark:text-white tracking-tight font-bold text-[32px] md:text-5xl text-center">
        Con<span className="text-teal-200">tact:</span>
      </h1>
      <p className="dark:text-white text-indigo-950 mt-4 text-sm md:text-lg md:tracking-wide mx-auto text-center w-4/5">
        Contact me through the form or directly mail me at
        sadmansakib10000@gmail.com or shadman.sakib11@northsouth.edu
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 mx-auto w-4/5 max-h-[28rem] max-w-[1200px] gap-0 border-slate-700 hover:border-slate-700 border-2 rounded-lg">
        <div className="col-span-1 hidden md:block mx-auto ">
          <img
            src="/me.png"
            alt="Me"
            className="w-[25rem] h-[25rem] object-cover shadow-md rounded-l-lg"
          />
        </div>
        <div className="col-span-2 bg-white dark:bg-slate-900 p-6 rounded-lg md:rounded-r-lg max-h-[25rem]">
          <form onSubmit={onSubmit} noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-4"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-4"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                minLength={10}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full mt-4 px-4 py-2 bg-teal-700 text-white text-sm font-medium rounded-md shadow-sm hover:bg-teal-900 "
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="text-gray-900 dark:text-gray-100 text-sm tracking-tight mt-4">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
