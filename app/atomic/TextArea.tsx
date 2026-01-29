"use client";
import React from "react";

function TextArea({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold text-white"> {label} </label>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
        className="p-2 border rounded-md text-grey-700 h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}

export default TextArea;
