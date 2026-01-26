import React from 'react'
import Table from './Table'
import { ItineraryRow } from '@/app/types/types';
import DaysButton from '@/app/atomic/DaysButton';

const data: ItineraryRow[] = [
    { time: "10:00 - 11:20", place: "Baguio Strawberry Farm", itineraryRowDescription: "Pick some strawberries" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
  ];


function page() {
  return (
    <>  
      <h1> Baguio</h1>
      <h3>This is the best place in the ph</h3>
      <Table data={data}/>
      <DaysButton dayNumber={5}/>
    </>
    
  )
}

export default page