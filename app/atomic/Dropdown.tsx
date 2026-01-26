import React from 'react'

interface DropdownProps {
  label: string,
  value: number,
  options: number[]
  onChange: (val: string) => void
  placeholder: string
}

function Dropdown({label, value, options, placeholder, onChange}: DropdownProps) {

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold text-white"> {label} </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
  )
}

export default Dropdown