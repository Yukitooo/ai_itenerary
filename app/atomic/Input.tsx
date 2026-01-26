import React from 'react'

interface InputProps {
  label: string,
  value: string,
  placeholder: string,
  onChange: (val: string) => void
}

function Input({label, value, placeholder, onChange}: InputProps) {

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold text-white"> {label} </label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
        className="p-2 border rounded-md text-grey-700 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  )
}

export default Input