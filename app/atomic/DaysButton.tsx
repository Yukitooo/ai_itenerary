"use client";

import { useState } from "react";


interface DaysButtonProps {
  dayNumber: number;      
}


function DaysButton({ dayNumber }: DaysButtonProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  

  return (
    <div className="flex justify-center gap-4">
      {Array.from({ length: dayNumber }).map((_, index) => (
        <button
        type="button" 
        onClick={() =>
          setActiveIndex((prev) => (prev === index ? null : index))
        }
        className={`w-12 h-12 cursor-pointer flex items-center justify-center rounded-md font-bold transition-all border-2
          ${activeIndex === index 
            ? "bg-blue-600 border-blue-600 text-white" // Selected day style
            : "bg-white border-gray-200 text-black hover:border-blue-400" // Unselected day style
          }`}
      >
        {index + 1}
      </button>
      ))}
    </div>
    
    
   
  );
}

export default DaysButton
