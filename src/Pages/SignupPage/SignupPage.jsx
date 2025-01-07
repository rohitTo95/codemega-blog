import "./signup_page.css";
import {textInputHandler} from "../../js/helper.js";

import { useState } from "react";
export default function SignupPage({setState}) {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    return (
        <>
<div class=" w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 rounded-xl shadow-lg flex overflow-hidden bg-[var(--bg-color)]">
  <div class="w-1/2 hidden md:block">
    <img
            src="assets/images/signup-img.png"
            alt="Signup Illustration"
            class="w-full h-full object-cover"
    />
  </div>
  <div class="w-full md:w-1/2 p-8 relative">
    <i class="ri-close-line text-2xl absolute top-4 right-4 cursor-pointer" onClick={()=> setState(false)}></i>
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center flex-wrap justify-center gap-4 mb-6 mt-12">
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
                  class="w-full px-4 py-3"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e)=> textInputHandler(e, form, setForm)}
          />
        </div>
        <div>
          <label for="password" class="block text-lg mb-2">Password</label>
          <input
                  type="password"
                  id="password"
                  class="w-full px-4 py-3"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e)=> textInputHandler(e, form, setForm)}
          />
        </div>
        <div>
          <label for="repeat-password" class="block text-lg mb-2">Repeat Password</label>
          <input
                  type="password"
                  id="repeat-password"
                  class="w-full px-4 py-3"
                  placeholder="Repeat your password"
          />
        </div>
        <button
                type="submit"
                class="w-full py-3 rounded-full transition"
        >
          Sign Up
        </button>
        <a class="text-center">Already Have An Account?</a>
      </form>
    </div>
  </div>
</div>
        </>
    )
}