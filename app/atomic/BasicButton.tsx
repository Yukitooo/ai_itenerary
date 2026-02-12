import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disable: boolean;
}

function BasicButton({ text, type = "submit", onClick, disable }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        !disable
          ? "w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all shadow-sm"
          : "w-full bg-blue-300 text-white font-bold py-3 px-6 rounded-lg"
      }
      disabled={disable}
    >
      {text}
    </button>
  );
}

export default BasicButton;
