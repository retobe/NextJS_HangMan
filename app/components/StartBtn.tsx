"use client";
import React from "react";
import allWords from "../randomWords";
function removeSettingsDiv() {
  const startBtn = document.querySelector(
    "#gameBtn"
  ) as HTMLButtonElement | null;
  const settingsDiv = document.querySelector("#settings") as HTMLElement | null;
  const keyboardBtns = document.querySelectorAll(
    "kbd"
  ) as NodeListOf<HTMLElement> | null;
  const wordDisplay = document.querySelector("#result") as HTMLElement | null;
  const keyboardDiv = document.querySelector(
    "#keyboardDiv"
  ) as HTMLElement | null;

  var wordAmount: number = parseInt(sessionStorage.getItem("wordCount") || "3");
  const customWord: any = sessionStorage.getItem("customWord") || false;

  const filteredWordsArr = allWords.filter((word: string) => {
    return word.length === wordAmount;
  });

  var actualWord: string = "";
  if (customWord && customWord.replaceAll(" ", "").length >= 3) {
    actualWord = customWord.replaceAll(" ", "").toLowerCase();
  } else {
    actualWord =
      filteredWordsArr[Math.floor(Math.random() * filteredWordsArr.length)];
  }

  // Check if elements exist before using them
  if (settingsDiv && startBtn && wordDisplay) {
    settingsDiv.style.display = "none";

    if (startBtn.name === "restartBtn") {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
      return;
    }

    // Start BTN has been clicked

    keyboardBtns?.forEach((btn) => {
      btn.classList.remove("btn-disabled", "clicked");
    });

    //The keyboard div classes
    keyboardDiv?.classList.add("flex");
    keyboardDiv?.classList.remove("hidden");
    //The word display classes
    var underScores = "";
    for (let i = 0; i < actualWord.length; i++) {
      underScores += "_ ";
    }
    sessionStorage.setItem("word", `${actualWord}`);
    wordDisplay.innerHTML = underScores;
    wordDisplay?.classList.add("flex");
    wordDisplay?.classList.remove("hidden");
    sessionStorage.setItem("game", "true");
    startBtn.name = "restartBtn";
    startBtn.classList.remove("bg-orange-500");
    startBtn.classList.add("bg-orange-400");
    startBtn.innerHTML = "Reset HangMan";
    document.body.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
}

const StartBtn = () => {
  return (
    <button
      onClick={removeSettingsDiv}
      id="gameBtn"
      name="startBtn"
      className="btn mt-3 shadow-2xl bg-orange-500 text-white font-bold tracking-wider"
    >
      Start HangMan
    </button>
  );
};

export default StartBtn;
