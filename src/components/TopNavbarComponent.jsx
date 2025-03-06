import { Bell, Search } from "lucide-react";
import React, { useState } from "react";

export default function TopNavbarComponent({ getSearchValue }) {
  const handleUserInput = (userInput) => {
    const { value } = userInput.target;

    getSearchValue(value);
  };

  // handle on form submit
  const handleSubmit = (e) => {
    // to prevent the page from reload
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-between">
      <form className="relative w-9/12 " onSubmit={handleSubmit}>
        {/* search button */}
        <button className="cursor-pointer">
          <Search className="absolute w-6 h-6 text-primary-text top-3 left-4" />
        </button>

        {/* search input */}
        <input
          type="text"
          onChange={handleUserInput}
          placeholder="Search assignment here"
          className="w-full h-12 py-3 pr-5 bg-white border-none pl-14 rounded-xl focus:border-none focus:ring-0 focus:outline-custom-sky-blue"
        />
      </form>

      {/* notification bell */}
      <div className="relative w-12 h-12 bg-white p-2.5 rounded-full">
        <Bell className="w-7 h-7 text-primary-text" />
        {/* red dot */}
        <div className="bg-red-600 w-2.5 h-2.5 rounded-full absolute top-2 right-3"></div>
      </div>

      {/* profile image */}
      <div className="h-16 rounded-xl w-2/12 bg-white py-2.5 px-3 flex gap-3 items-start">
        <img
          src="https://i.pinimg.com/736x/39/2a/50/392a5042102c7d7e4ed87527a2d7e74a.jpg"
          alt="profile image"
          width={45}
          height={45}
          className="rounded-full"
        />

        {/* username and email */}
        <div>
          <p className="text-base capitalize">dark moon</p>
          <p className="text-xs text-gray-400">darkmoon@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
