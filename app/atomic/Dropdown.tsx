import React from "react";
import { usePlannerState } from "../states/usePlannerState";

function Dropdown({
  label,
  options,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  options: number[];
  placeholder: string;
  value: number;
  onChange: (val: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold text-white"> {label} </label>
      <select
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="p-2 border rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
