import React, { useState } from "react";
import { textInputHandler } from "../../js/helper.js"; 

export default function AdminLoginPage({ setState }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--bg-color)] text-[var(--paragraph-color)]">
      <div className="w-4/5 md:w-2/5 lg:w-1/3 bg-[var(--secondary-color)] p-8 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--heading-color)]">
          Admin Login
        </h2>
        <form className="flex flex-col gap-6">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg mb-2 text-[var(--paragraph-color)]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-3 rounded-md border border-[var(--paragraph-color)] bg-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Enter your username"
              value={form.username}
              onChange={(e) => textInputHandler(e, form, setForm)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg mb-2 text-[var(--paragraph-color)]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 rounded-md border border-[var(--paragraph-color)] bg-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => textInputHandler(e, form, setForm)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[var(--button-bg-color)] text-[var(--button-text-color)] py-3 rounded-md hover:bg-[var(--primary-color)] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
