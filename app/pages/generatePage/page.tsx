"use client"
import React, {useState} from 'react'
import Table from './Table'
import ItineraryForm from './ItineraryForm';
import { ItineraryRow, Plan } from '@/app/types/types';
import DaysButton from '@/app/atomic/DaysButton';

const data: ItineraryRow[] = [
    { time: "10:00 - 11:20", place: "Baguio Strawberry Farm", itineraryRowDescription: "Pick some strawberries" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
  ];

function page() {

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
    <> 
      <div> 
        {/* Nicole's part */}
        <div>
          <ItineraryForm 
            plan={plan}
            updateField={updateField}
          />
        </div>

        <div>
          <h1> Baguio</h1>
            <h3>This is the best place in the ph</h3>
            <Table data={data}/>
            <DaysButton dayNumber={5}/>
        </div>  
      </div>
      
     
    </>
    
  )
}

export default page