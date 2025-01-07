import "./login_page.css";
import {textInputHandler} from "../../js/helper.js";

import { useState } from "react";

export default function LoginPage({setState}) {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    return (
        <>
<div class=" w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 rounded-xl shadow-lg flex overflow-hidden bg-[var(--bg-color)]">
  <div class="w-1/2 hidden md:block">
    <img
            src="assets/images/login-img.png"
            alt="Login Illustration"
            class="w-full h-full object-cover"
    />
  </div>
  <div class="w-full md:w-1/2 p-8 relative">
    <i class="ri-close-line text-2xl absolute top-4 right-4 cursor-pointer" onClick={()=> setState(false)}></i>
    <div class="social-login-handels flex flex-col justify-between h-full px-4">
      <div>
        <div class="flex items-center flex-wrap justify-center gap-4 mb-6">
          <i class="ri-github-fill text-3xl cursor-pointer"></i>
          <i class="ri-google-fill text-3xl  text-blue-500 cursor-pointer"></i>
          <i class="ri-apple-fill text-3xl cursor-pointer"></i>
        </div>
        <div class="flex items-center justify-center mb-6">
          <div class="h-px bg-gray-300 w-1/4"></div>
          <span class="mx-4 text-gray-400">or</span>
          <div class="h-px bg-gray-300 w-1/4"></div>
        </div>
      </div>
      <form action="" class="flex flex-col gap-6">
        <div>
          <label for="email" class="block text-lg mb-2" >Email</label>
          <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  value={form.email} onChange={(e)=> textInputHandler(e, form, setForm)}
          />
        </div>
        <div>
          <label for="password" class="block text-lg mb-2">Password</label>
          <input
                  type="password"
                  id="password"
                  name="password"
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  value={form.password} onChange={(e)=> textInputHandler(e, form, setForm)}
          />
        </div>
        <a href="#" class="text-blue-500 text-sm self-end">Forget Email/Password?</a>
        <button
                type="submit"
                class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Sign In
        </button>
        <a href="/signup" class="text-center">Don't Have An Account?</a>
      </form>
    </div>
  </div>
</div>
</>
    )}