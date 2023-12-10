"use client";
import React, { ChangeEvent, useState } from "react";

const Settings = () => {
  const [wordDifficulty, setWordDifficulty] = useState(
    parseInt(sessionStorage.getItem("wordCount") || "3")
  );

  const [showPassword, setShowPassword] = useState(false);

  const displayLetters = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setWordDifficulty(value);
    sessionStorage.setItem("wordCount", `${value}`);
    document.querySelector("output")!.innerHTML = `${value} Letters`;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const setCustomWord = () => {
    const customWordDiv = document.querySelector(
      "#customWord"
    ) as HTMLInputElement | null;

    if (customWordDiv) {
      sessionStorage.setItem("customWord", `${customWordDiv.value}`);
    } else {
      window.location.reload();
    }
  };

  return (
    <div
      id="settings"
      className="settings container flex gap-3 flex-col mx-auto text-center mt-3 mb-10 text-[#ff8000] p-3"
    >
      <h1 className="text-4xl mt-3">Settings</h1>
      <div
        id="div_diff"
        className="difficulty text-2xl flex flex-row mx-auto items-center gap-3"
      >
        <div className="flex flex-row gap-3 items-center justify-center">
          <h3>Adjust Word Difficulty: </h3>
          <input
            type="range"
            name="range"
            id="wordCounter"
            step={1}
            max={9}
            min={3}
            value={wordDifficulty}
            onChange={displayLetters}
            className="w-[120px] h-[30px]"
          />
        </div>
        <output>{sessionStorage.getItem("wordCount") || "3"} Letters</output>
      </div>
      <div
        className="custom_word container flex flex-col mx-auto items-center justify-center"
        id="custom_word_div"
      >
        <h3>
          Custom Word (Make sure it's empty or else it'll use custom word)
        </h3>
        <input
          type={showPassword ? "text" : "password"}
          onChange={setCustomWord}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs mt-3"
          name="customWord"
          id="customWord"
        />
        <div
          onClick={togglePasswordVisibility}
          className="flex items-center justify-center gap-1 cursor-pointer text-white mt-3"
        >
          <i
            className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            id="passwordIcon"
            aria-hidden="true"
          ></i>
          <label className="label cursor-pointer" htmlFor="customWord">
            Show Password
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
