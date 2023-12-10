"use client";

import React from "react";
const guessedLetters: any = [];
var guesses = 6;
function clickedBtn(event: any) {
  if (event.target.classList.contains("clicked")) return;
  const resultDisplay = document.querySelector("#result") as HTMLElement | null;
  const word = sessionStorage.getItem("word") || null;

  if (sessionStorage.getItem("game") === "true") {
    console.log("Game is TRUE.");
    const letter = event.target.textContent.toLowerCase();
    if (sessionStorage.getItem("word")?.includes(letter)) {
      if (resultDisplay && word) {
        guessedLetters.push(letter);
        resultDisplay.textContent = word
          .split("")
          .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
          .join(" ");
        if (!resultDisplay.textContent.includes("_")) {
          alert(
            `You have WON.\nThe word was "${sessionStorage.getItem("word")}".`
          );
          sessionStorage.clear();
          localStorage.clear();
          window.location.reload();
          return;
        }
      }
    } else {
      guesses -= 1;
      if (guesses === 0) {
        alert(
          `You have lost.\nThe word was "${sessionStorage.getItem("word")}".`
        );
        sessionStorage.clear();
        localStorage.clear();
        window.location.reload();
        return;
      }
      alert(`${letter} is not in the word\nGuesses Left: ${guesses}`);
    }
    event.target.classList.add("clicked");
  }
}

const KeyboardBtn = ({ text }: { text: string }) => {
  return (
    <kbd onClick={clickedBtn} className="kbd btn-disabled clicked select-none">
      {text}
    </kbd>
  );
};

export default KeyboardBtn;
