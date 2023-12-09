"use client";

import React from "react";
function clickedBtn(event: any) {
  if (localStorage.getItem("game") === "true") {
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
