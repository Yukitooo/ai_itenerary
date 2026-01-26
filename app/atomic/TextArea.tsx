"use client"
import React, {useState} from 'react'

interface TextAreaProps {
  label: string,
  value: string,
  placeholder: string,
  onChange: (val: string) => void
}

function Input({label, value, placeholder, onChange}: TextAreaProps) {

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
  )
}

export default Input