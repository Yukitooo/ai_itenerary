"use client"
import {useState} from 'react'
import BasicButton from './atomic/BasicButton';
import DaysButton from './atomic/DaysButton';
import Input from './atomic/Input'
import TextArea from './atomic/TextArea'

type Plan = {
  country: string,
  dateRange: number,
  planDescription: string
}

export default function Home() {

  const [plan, setPlan] = useState<Plan>({
    country: "",
    dateRange: 0,
    planDescription: ""
  })

  const updateField = (field: keyof Plan, value: string | number) => {
    setPlan(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 text-black">My AI Itenerary Planner</h1>
      
      {/* Country Field */}
      <Input
        label="Country"
        value={plan.country}
        placeholder="e.g. Japan"
        onChange={(val) => {
          console.log("Typing detected:", val);
          updateField('country', val)}}
      />

      {/* Date Range Field */}
      <Input
        label="No. of Days"
        value={plan.dateRange.toString()}
        placeholder="5"
        onChange={(val) => {
          const numValue = parseInt(val) || 0
          updateField('dateRange', numValue)
        }}
      />

      {/* Description Field */}
      <TextArea 
        label="Describe your ideal itenerary"
        value={plan.planDescription}
        placeholder="I want my itenerary to be more of a nature trip"
        onChange={(val) => updateField('planDescription', val)}
      />

      {/* Generate Button */}
      <BasicButton
        text="Generate Itinerary"
      />

      <DaysButton 
        dayNumber={5}
      />
      
    </main>
  );
}




