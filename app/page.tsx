"use server";

import KeyboardBtn from "./components/KeyboardBtn";
import StartBtn from "./components/StartBtn";
import Settings from "./components/Settings";
import HiddenWord from "./components/HiddenWord";

export default async function Home() {
  return (
    <>
      <main className="flex items-center flex-col">
        <h1 className="text-shadow-a text-[3rem] tracking-widest text-center text-orange-500">
          HangMan Game
        </h1>
        <h6 className="text-[1rem] text-shadow-a text-center text-orange-300">
          (You only get 6 guesses)
        </h6>

        {/* Directions Div Element */}
        <div className="flex flex-col items-center mt-3 w-[50%] min-w-[20rem] px-10 py-4 text-black bg-orange-300 rounded shadow-2xl">
          <h3 className="text-[2rem] text-shadow-a font-semibold text-gray-500">
            HOW TO PLAY?
          </h3>

          <ul className="list-disc flex gap-5 flex-col p-3">
            <li className="text-[1.3rem]">
              Directions: {""}
              <span className="text-[2rem] text-orange-400 font-bold">
                HANGMAN
              </span>{" "}
              is a word-guessing game where one player thinks of a secret word
              and the other player tries to guess it letter by letter. A hangman
              figure is drawn, and incorrect guesses lead to the completion of
              the figure. The guesser's objective is to reveal the word before
              the hangman is fully drawn.
            </li>
            <li className="text-[1.3rem]">
              Steps: Start by guessing a letter from the keyboard down below. If
              the letter is in the word, the thinker reveals its position(s) in
              the dashes. Incorrect guesses result in the gradual drawing of a
              hangman figure. The game continues with turns alternating between
              guessing letters and drawing the hangman. Guessing continues until
              the word is guessed correctly or the hangman is completed.
            </li>
            <li className="text-[1.3rem]">
              Tips: Begin with common letters or those likely in the word. Keep
              track of guessed letters to avoid repetitions. Deduce the word
              using logic and context.
            </li>
          </ul>
        </div>
        {/* END of Directions Div Element */}

        <HiddenWord />
        <h1 className="word" id="word"></h1>
        <h5 className="guesses" id="guesses"></h5>

        <div
          id="keyboardDiv"
          className="mt-3 flex-col gap-y-3.5 bg-orange-400 p-4 rounded-xl items-center hidden"
        >
          <div className="top-key flex gap-3 text-[28px]">
            <KeyboardBtn text="Q" />
            <KeyboardBtn text="W" />
            <KeyboardBtn text="E" />
            <KeyboardBtn text="R" />
            <KeyboardBtn text="T" />
            <KeyboardBtn text="Y" />
            <KeyboardBtn text="U" />
            <KeyboardBtn text="I" />
            <KeyboardBtn text="O" />
            <KeyboardBtn text="P" />
          </div>

          <div className="middle-key flex gap-3 text-[28px]">
            <KeyboardBtn text="A" />
            <KeyboardBtn text="S" />
            <KeyboardBtn text="D" />
            <KeyboardBtn text="F" />
            <KeyboardBtn text="G" />
            <KeyboardBtn text="H" />
            <KeyboardBtn text="J" />
            <KeyboardBtn text="K" />
            <KeyboardBtn text="L" />
          </div>

          <div className="bottom-key flex gap-3 text-[28px]">
            <KeyboardBtn text="Z" />
            <KeyboardBtn text="X" />
            <KeyboardBtn text="C" />
            <KeyboardBtn text="V" />
            <KeyboardBtn text="B" />
            <KeyboardBtn text="N" />
            <KeyboardBtn text="M" />
          </div>
          {/* END KEYBOARD Div Element */}
        </div>

        <StartBtn></StartBtn>
        <Settings></Settings>
      </main>
    </>
  );
}
