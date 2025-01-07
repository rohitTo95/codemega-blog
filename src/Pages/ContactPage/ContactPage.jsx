import "./contact_page.css";
import { useState } from "react";
import {textInputHandler} from "../../js/helper.js";
export default function ContactPage() {
    const [form, setForm] = useState({
        name : "",
        email: "",
        message: ""
    });
    return (
        <>
        <section className="my-40 default-spacing">
  <h1 className="text-6xl font-bold">Contact Us</h1>
    <div className="contact-form-container flex flex-col md:flex-row items-center gap-8 justify-evenly my-12 h-screen">
        <img src="assets/images/contact-img.png" alt="" srcset="" className="w-full h-auto object-cover rounded-3xl" />
        <div className="flex flex-col gap-4 w-full md:w-1/2  text-center md:text-left space-y-6">
            <form>
                <div className="flex flex-col gap-4">
                    <label for="name" className="text-4xl font-semibold">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Name" className="text-xl w-full py-4 px-8" value={form.name} onChange={(e)=> textInputHandler(e, form, setForm)}/>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                    <label for="email" className="text-3xl font-semibold">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" className="text-xl w-full py-4 px-8" value={form.email} onChange={(e)=> textInputHandler(e, form, setForm)}/>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                    <label for="message" className="text-3xl font-semibold">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message" className="text-xl w-full py-6 px-8 " value={form.message} onChange={(e)=> textInputHandler(e, form, setForm)}></textarea>
                </div>
                <button type="submit" className="px-8 py-3 md:px-5 md:py-4 w-1/4 mt-12 flex flex-col justify-center items-center p-4 font-semibold rounded-full text-2xl md:text-3xl">
                    Send
                </button>
            </form>
        </div>
    </div>

    </section>
        </>
    )
    }