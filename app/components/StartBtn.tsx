"use client";
import React from "react";

function removeSettingsDiv() {
  const startBtn = document.querySelector(
    "#gameBtn"
  ) as HTMLButtonElement | null;
  const settingsDiv = document.querySelector("#settings") as HTMLElement | null;
  const keyboardBtns = document.querySelectorAll(
    "kbd"
  ) as NodeListOf<HTMLElement> | null;

  // Check if elements exist before using them
  if (settingsDiv && startBtn) {
    settingsDiv.style.display = "none";

    // Currently Restart btn is appeared
    if (startBtn.name === "restartBtn") {
      keyboardBtns?.forEach((btn) => {
        btn.classList.add("btn-disabled", "clicked");
      });
      localStorage.setItem("game", "false");
      startBtn.classList.remove("bg-orange-400");
      startBtn.classList.add("bg-orange-500");
      startBtn.innerHTML = "Start HangMan";
      startBtn.name = "startBtn";
      settingsDiv.style.display = "flex";
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

    keyboardBtns?.forEach((btn) => {
      btn.classList.remove("btn-disabled", "clicked");
    });
    localStorage.setItem("game", "true");
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
