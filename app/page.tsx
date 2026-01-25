"use client"
import BasicButton from './atomic/BasicButton';
import DaysButton from './atomic/DaysButton';
import Input from './atomic/Input'
import TextArea from './atomic/TextArea'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 text-black">My AI Itenerary Planner</h1>
      
      {/* Country Field */}
      <Input
        label="Country"
        value=""
        placeholder="e.g. Japan"
        onChange={(val) => console.log(val)}
      />

      {/* Date Range Field */}
      <Input
        label="No. of Days"
        value=""
        placeholder="5"
        onChange={(val) => console.log(val)}
      />

      {/* Description Field */}
      <TextArea 
        label="Describe your ideal itenerary"
        value=""
        placeholder="I want my itenerary to be more of a nature trip"
        onChange={(val) => console.log(val)}
      />

      {/* Generate Button */}
      <BasicButton
        text="Generate Itenerary"
      />

      <DaysButton 
        dayNumber={5}
        isActive={false}
        onClick={(num) => console.log(num)}
      />
      
    </main>
  );
}




