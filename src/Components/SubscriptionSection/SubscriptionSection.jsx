import "./subscription_section.css";
import { useState } from 'react'
import {textInputHandler} from "../../js/helper.js"
export default function SubscriptionSection() {
    const [formData, setFormData] = useState({
        name : "",
        email: ""
    })
    return ( <section id="subscription-section" class="mt-20 py-12 px-6">
        <div class="default-spacing flex flex-col md:flex-row items-center gap-8 justify-between">
          {/* { Left: Image}  */}
          <div class="w-auto md:w-full">
            <img src="assets/images/goat.png" alt="GOAT of Coding" class="rounded-lg w-full h-auto object-cover" />
          </div>
          {/* {Right: Form } */}
          <div class="w-5/6 md:w-3/5">
            <h2 class="text-6xl font-bold text-gray-800 mb-6">
              Subscribe and become a <span class="text-black">GOAT</span> of Coding
            </h2>
            <form class="space-y-4 mt-24">
              <div class="flex items-center border-b-2">
                <i class="ri-user-3-line text-4xl"></i>
                <input type="text" name="name" placeholder="Enter Your Name"
                  class="w-full py-4  text-4xl border-none outline-none ml-4" value={formData.name}  onChange={(e)=> textInputHandler(e, formData, setFormData)}/>
              </div>
              <div class="flex items-center mt-12 border-b-2">
                <i class="ri-mail-line text-4xl"></i>
                <input type="email" name="email" placeholder="Enter Your Email"
                  class="w-full py-4 border-none outline-none text-4xl ml-4" value={formData.email} onChange={(e)=> textInputHandler(e, formData, setFormData)}/>
              </div>
              <button type="submit"
                class="px-6 py-8 w-1/2 mt-20 rounded-full bg-black text-white font-semibold shadow-md text-3xl mt-12">Join
                The Club</button>
            </form>
          </div>
        </div>
      </section>)
}