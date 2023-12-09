"use client";
import React, { ChangeEvent, useState } from "react";

const Settings = () => {
  const [wordDifficulty, setWordDifficulty] = useState(3);

  const displayLetters = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setWordDifficulty(value);
    document.querySelector("output")!.innerHTML = `${value} Letters`;
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
        <output>3 letters</output>
      </div>
      {/* <div className="custom_word" id="custom_word_div">
        <h3>
          Custom Word (Make sure it's empty or else it'll use custom word)
        </h3>
      </div> */}
    </div>
  );
};

export default Settings;