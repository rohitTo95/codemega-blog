import "./navigation_bar.css";
import LoginPage from "../../../Pages/LoginPage/LoginPage.jsx";
import SignupPage from "../../../Pages/SignupPage/SignupPage.jsx";
import { setTheme, checkTheme } from "./navigation_bar.js";
// import {toggleMode} from "./navigation_bar.js";

import { useState } from "react";
export default function NavigationBar() {
  const [isDarkMode, setIsDarkMode] = useState(checkTheme());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSignUpBtnClicked, setIsSignUpBtnClicked] = useState(false);
  const [isLoginBtnClicked, setIsLoginBtnClicked] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setTheme();
  };
  const toggleMenu = () => {
    setIsMenuOpen((prevMenu) => !prevMenu);
  };
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <>
    <nav className="flex items-center justify-between py-6 px-20 rounded-full relative">
      <h1 className="text-5xl font-bold z-10">
        <a href="/">CodeMega</a>
      </h1>
      <div className="flex items-center gap-12 relative">
        {/* Theme Toggle */}
        <div
          id="theme-toggle"
          className={`toggle-btn cursor-pointer flex items-center justify-start relative z-10 ${
            isDarkMode ? "active" : ""
          }`}
          onClick={toggleTheme}
          style={{
            background: isDarkMode ? "#060606" : "#F5F5F5",
            transition: "1.2s",
          }}
        >
          <i
            className={`${
              isDarkMode ? "ri-moon-line" : "ri-sun-line"
            } toggle-icon w-12`}
            style={{
              color: isDarkMode ? "#F5F5F5" : "#060606",
              transition: "1.2s",
            }}
          ></i>
        </div>

        {/* User Icon with Dropdown */}
        <div className="relative">
          <i
            id="user-icon"
            className="ri-user-line cursor-pointer z-10 w-12"
            onClick={toggleDropdown}
          ></i>
          {isDropdownOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg py-4 px-6 z-20">
              {!isUserLoggedIn ? (
                <div className="flex flex-col gap-4">
                  <button
                    id="sign-in-btn"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    onClick={() => {setIsLoginBtnClicked(true);
                          setIsDropdownOpen(false);}}
                  >
                    Sign In
                  </button>
                  <button
                    id="sign-in-btn"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                    onClick={() => {setIsSignUpBtnClicked(true);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <p className="text-gray-700">Hello, UserName</p>
                  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition">
                    Profile
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                    onClick={() => setIsUserLoggedIn(false)} // Simulate logout
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
          
        </div>

        {/* Hamburger Menu Icon */}
        <div
          id="hamburger"
          onClick={toggleMenu}
          className={`hamburger-menu z-10 ${isMenuOpen ? "active" : ""}`}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        id="nav-menu"
        className={`absolute top-36 left-0 z-0 py-20 w-full items-end justify-center flex ${
          isMenuOpen ? " active" : ""
        }`}
        style={{
          width: isMenuOpen ? "100%" : "0",
          clipPath: isMenuOpen
            ? "circle(150% at 50% 50%)"
            : "circle(0% at 100% 0)",
          transition: "clip-path 0.7s ease-in-out",
        }}
      >
        <ul
          className="flex items-center gap-12 w-full flex-col"
          style={{ transition: "opacity 0.5s ease-in-out 0.4s" }}
        >
          <li className="cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="/about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="/blog-posts">Blog Posts</a>
          </li>
          <li className="cursor-pointer">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* login and Signup panel  */}

    </nav>
      <section
                    id="login-signup-panel"
                    className={`absolute top-0 left-0 w-full h-full items-center justify-center min-h-screen bg-[var(--bg-transparent-color)] ${
                      isSignUpBtnClicked || isLoginBtnClicked ? "active" : ""
                    }`}
                  >
                    {isSignUpBtnClicked ? <SignupPage setState = {setIsSignUpBtnClicked}/>: <></>}
                    {isLoginBtnClicked ? <LoginPage setState = {setIsLoginBtnClicked}/>: <></>}
                  </section>
                  </>
  );
}
