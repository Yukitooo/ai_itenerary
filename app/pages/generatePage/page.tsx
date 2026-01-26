import React from 'react'
import Table from './Table'
import { ItineraryRow } from '@/app/types/types';

const data: ItineraryRow[] = [
    { time: "10:00 - 11:20", place: "Baguio Strawberry Farm", itineraryRowDescription: "Pick some strawberries" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
  ];


function page() {
  return (
    <>  
      <Table data={data}/>
    </>
    
  )
}

export default page