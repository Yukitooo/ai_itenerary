"use client";

interface DaysButtonProps {
  dayNumber: number;
  isActive: boolean;        
  onClick: (day: number) => void;
}
function DaysButton({ dayNumber, isActive, onClick }: DaysButtonProps) {

  return (
    <button
      type="button" 
      onClick={() => onClick(dayNumber)}
      className={`w-12 h-12 flex items-center justify-center rounded-md font-bold transition-all border-2
        ${isActive 
          ? "bg-blue-600 border-blue-600 text-white" // Selected day style
          : "bg-white border-gray-200 text-black hover:border-blue-400" // Unselected day style
        }`}
    >
      {dayNumber}
    </button>
  );
}

export default DaysButton